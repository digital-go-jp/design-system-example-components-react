import { type DragEvent, type RefObject, useEffect, useRef, useState } from 'react';
import { fileUploadDefaultMessages } from '../messages';
import type { FileUploadMessages } from '../types';

export type UseFileDropOptions = {
  /** ドラッグ＆ドロップを有効化 */
  droppable?: boolean;
  /** 全画面ドロップエリアを有効化 */
  dropAreaExpandable?: boolean;
  /** ファイル追加時のコールバック */
  onFilesAdded: (files: File[]) => void;
  /** フォーカスを戻すためのref */
  focusTargetRef?: RefObject<HTMLElement | null>;
  /** カスタムメッセージ */
  messages?: FileUploadMessages;
};

// 全画面ドロップエリアの排他制御用
const expandedDropAreaState = {
  activeCallback: null as (() => void) | null,
};

const registerExpandedDropArea = (callback: () => void) => {
  if (expandedDropAreaState.activeCallback && expandedDropAreaState.activeCallback !== callback) {
    expandedDropAreaState.activeCallback();
  }
  expandedDropAreaState.activeCallback = callback;
};

const unregisterExpandedDropArea = (callback: () => void) => {
  if (expandedDropAreaState.activeCallback === callback) {
    expandedDropAreaState.activeCallback = null;
  }
};

export const useFileDrop = (options: UseFileDropOptions) => {
  const {
    dropAreaExpandable = false,
    onFilesAdded,
    focusTargetRef,
    messages: customMessages,
  } = options;

  const messages = customMessages ?? fileUploadDefaultMessages;

  const [isDragOver, setIsDragOver] = useState(false);
  const [isExpandedDropArea, setIsExpandedDropArea] = useState(false);
  const [showViewportOverlay, setShowViewportOverlay] = useState(false);
  const [announcerText, setAnnouncerText] = useState('');
  const [announcerAssertiveText, setAnnouncerAssertiveText] = useState('');

  const dragCounterRef = useRef(0);
  const announcerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragOverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropAnnounceIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const collapseCallbackRef = useRef(() => setIsExpandedDropArea(false));

  const announceText = (text: string, assertive = false) => {
    if (announcerTimerRef.current) {
      clearTimeout(announcerTimerRef.current);
    }

    const setText = assertive ? setAnnouncerAssertiveText : setAnnouncerText;

    setText('');
    announcerTimerRef.current = setTimeout(() => {
      setText(text);
      announcerTimerRef.current = setTimeout(() => {
        setText('');
      }, 1000);
    }, 100);
  };

  const stopDropAnnounce = () => {
    if (dropAnnounceIntervalRef.current) {
      clearInterval(dropAnnounceIntervalRef.current);
      dropAnnounceIntervalRef.current = null;
    }
  };

  const startDropAnnounce = () => {
    stopDropAnnounce();
    const message = messages.announce.dropAvailable;
    announceText(message, true);

    dropAnnounceIntervalRef.current = setInterval(() => {
      announceText(message);
    }, 3000);
  };

  const handleExpandedDropAreaChange = (checked: boolean) => {
    setIsExpandedDropArea(checked);
    if (checked) {
      registerExpandedDropArea(collapseCallbackRef.current);
    } else {
      unregisterExpandedDropArea(collapseCallbackRef.current);
    }
  };

  // ドロップエリア用ハンドラ
  const handleDragEnter = () => {
    dragCounterRef.current++;
    if (dragCounterRef.current === 1) {
      setIsDragOver(true);
      startDropAnnounce();
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragLeave = () => {
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setIsDragOver(false);
      stopDropAnnounce();
      announceText(messages.announce.dropUnavailable, true);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    dragCounterRef.current = 0;
    setIsDragOver(false);
    stopDropAnnounce();

    const fileList = Array.from(e.dataTransfer?.files || []);
    onFilesAdded(fileList);
    focusTargetRef?.current?.focus();
  };

  // ビューポートオーバーレイ用ハンドラ
  const handleViewportDragEnter = () => {
    dragCounterRef.current++;
    if (dragCounterRef.current === 1) {
      startDropAnnounce();
    }
  };

  const handleViewportDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';

    if (dragOverTimerRef.current) {
      clearTimeout(dragOverTimerRef.current);
    }

    dragOverTimerRef.current = setTimeout(() => {
      if (showViewportOverlay) {
        dragCounterRef.current = 0;
        setShowViewportOverlay(false);
      }
    }, 300);
  };

  const handleViewportDragLeave = () => {
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setShowViewportOverlay(false);
      stopDropAnnounce();
      announceText(messages.announce.dropUnavailable, true);
    }
  };

  const handleViewportDrop = (e: DragEvent) => {
    e.preventDefault();
    dragCounterRef.current = 0;
    setShowViewportOverlay(false);
    stopDropAnnounce();

    const fileList = Array.from(e.dataTransfer?.files || []);
    onFilesAdded(fileList);
    focusTargetRef?.current?.focus();
  };

  // ドキュメント全体のドラッグオーバーイベント
  useEffect(() => {
    if (!dropAreaExpandable) return;

    const handleDocumentDragOver = (e: globalThis.DragEvent) => {
      if (isExpandedDropArea) {
        e.preventDefault();
        setShowViewportOverlay(true);
      }
    };

    document.documentElement.addEventListener('dragover', handleDocumentDragOver);
    return () => {
      document.documentElement.removeEventListener('dragover', handleDocumentDragOver);
    };
  }, [dropAreaExpandable, isExpandedDropArea]);

  // クリーンアップ
  // biome-ignore lint/correctness/useExhaustiveDependencies: クリーンアップは初回マウント時のみ実行
  useEffect(() => {
    return () => {
      if (announcerTimerRef.current) {
        clearTimeout(announcerTimerRef.current);
      }
      if (dragOverTimerRef.current) {
        clearTimeout(dragOverTimerRef.current);
      }
      stopDropAnnounce();
      // 全画面ドロップエリアの登録解除
      unregisterExpandedDropArea(collapseCallbackRef.current);
    };
  }, []);

  return {
    // State
    isDragOver,
    isExpandedDropArea,
    showViewportOverlay,
    announcerText,
    announcerAssertiveText,

    // Handlers
    handleExpandedDropAreaChange,

    // Drop area handlers
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,

    // Viewport overlay handlers
    handleViewportDragEnter,
    handleViewportDragOver,
    handleViewportDragLeave,
    handleViewportDrop,
  };
};
