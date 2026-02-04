import type { FileInfo, FileUploadMessages } from '../types';
import { useFileDrop } from './useFileDrop';
import { useFileState } from './useFileState';

export type UseFileUploadOptions = {
  /** 選択可能なファイル数の上限 */
  maxFiles?: number;
  /** 1ファイルあたりの最大サイズ（例: "5MB"） */
  maxFileSize?: string;
  /** 合計の最大サイズ（例: "10MB"） */
  maxTotalSize?: string;
  /** 許可するファイル形式（accept属性形式） */
  accept?: string;
  /** ドラッグ＆ドロップを有効化 */
  droppable?: boolean;
  /** 全画面ドロップエリアを有効化 */
  dropAreaExpandable?: boolean;
  /** 初期ファイル一覧 */
  initialFiles?: FileInfo[];
  /** カスタムメッセージ */
  messages?: FileUploadMessages;
};

export const useFileUpload = (options: UseFileUploadOptions = {}) => {
  const {
    maxFiles,
    maxFileSize,
    maxTotalSize,
    accept,
    droppable = false,
    dropAreaExpandable = false,
    initialFiles,
    messages,
  } = options;

  const fileState = useFileState({
    maxFiles,
    maxFileSize,
    maxTotalSize,
    accept,
    initialFiles,
    messages,
  });

  const fileDrop = useFileDrop({
    droppable,
    dropAreaExpandable,
    onFilesAdded: fileState.addFiles,
    focusTargetRef: fileState.selectButtonRef,
    messages,
  });

  return {
    // From useFileState
    files: fileState.files,
    errors: fileState.errors,
    totalSize: fileState.totalSize,
    hasError: fileState.hasError,
    isMultiple: fileState.isMultiple,
    maxFileSizeBytes: fileState.maxFileSizeBytes,
    maxTotalSizeBytes: fileState.maxTotalSizeBytes,
    selectionSummarySuffix: fileState.selectionSummarySuffix,
    inputRef: fileState.inputRef,
    selectButtonRef: fileState.selectButtonRef,
    setFiles: fileState.setFiles,
    setErrors: fileState.setErrors,
    addFiles: fileState.addFiles,
    removeFile: fileState.removeFile,
    validateFiles: fileState.validateFiles,
    handleSelectButtonClick: fileState.handleSelectButtonClick,
    handleInputChange: fileState.handleInputChange,
    messages: fileState.messages,

    // From useFileDrop
    isDragOver: fileDrop.isDragOver,
    isExpandedDropArea: fileDrop.isExpandedDropArea,
    showViewportOverlay: fileDrop.showViewportOverlay,
    announcerText: fileDrop.announcerText,
    announcerAssertiveText: fileDrop.announcerAssertiveText,
    handleExpandedDropAreaChange: fileDrop.handleExpandedDropAreaChange,
    handleDragEnter: fileDrop.handleDragEnter,
    handleDragOver: fileDrop.handleDragOver,
    handleDragLeave: fileDrop.handleDragLeave,
    handleDrop: fileDrop.handleDrop,
    handleViewportDragEnter: fileDrop.handleViewportDragEnter,
    handleViewportDragOver: fileDrop.handleViewportDragOver,
    handleViewportDragLeave: fileDrop.handleViewportDragLeave,
    handleViewportDrop: fileDrop.handleViewportDrop,
  };
};
