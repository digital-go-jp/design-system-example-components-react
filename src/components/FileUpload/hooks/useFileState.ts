import { type ChangeEvent, useRef, useState } from 'react';
import { fileUploadDefaultMessages } from '../messages';
import type { FileInfo, FileUploadMessages } from '../types';
import { isFileTypeAllowed, parseAcceptAttribute, parseSize } from '../utils';

export type UseFileStateOptions = {
  /** 選択可能なファイル数の上限 */
  maxFiles?: number;
  /** 1ファイルあたりの最大サイズ（例: "5MB"） */
  maxFileSize?: string;
  /** 合計の最大サイズ（例: "10MB"） */
  maxTotalSize?: string;
  /** 許可するファイル形式（accept属性形式） */
  accept?: string;
  /** 初期ファイル一覧 */
  initialFiles?: FileInfo[];
  /** カスタムメッセージ */
  messages?: FileUploadMessages;
};

export const useFileState = (options: UseFileStateOptions = {}) => {
  const {
    maxFiles = 1,
    maxFileSize,
    maxTotalSize,
    accept = '',
    initialFiles = [],
    messages: customMessages,
  } = options;

  const messages = customMessages ?? fileUploadDefaultMessages;

  const [files, setFiles] = useState<FileInfo[]>(initialFiles);
  const [errors, setErrors] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectButtonRef = useRef<HTMLButtonElement>(null);

  const maxFileSizeBytes = maxFileSize ? parseSize(maxFileSize) : null;
  const maxTotalSizeBytes = maxTotalSize ? parseSize(maxTotalSize) : null;
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  const hasError = errors.length > 0;
  const isMultiple = maxFiles > 1;

  // VoiceOver + Safari でaria-describedbyのキャッシュ問題を回避するためのキー
  // 選択ファイルサマリー要素のIDサフィックスとして使用することで、変更時にIDが変わりキャッシュが無効化される
  const selectionSummarySuffix = `${files.length}-${totalSize}`;

  const validateFiles = (
    fileList: FileInfo[],
  ): { errors: string[]; validatedFiles: FileInfo[] } => {
    const newErrors: string[] = [];
    const validatedFiles = fileList.map((f) => ({
      ...f,
      errors: f.isExisting ? f.errors : [],
    }));

    const newFiles = validatedFiles.filter((f) => !f.isExisting);

    if (fileList.length > maxFiles) {
      newErrors.push(messages.error.maxFiles);
    }

    const allowedExtensions = parseAcceptAttribute(accept);
    const fileTotalSize = fileList.reduce((sum, f) => sum + (f.size || 0), 0);

    newFiles.forEach((fileInfo) => {
      if (allowedExtensions.length > 0 && fileInfo.file) {
        const mimeType = fileInfo.file.type;

        if (!isFileTypeAllowed(fileInfo.name, mimeType, allowedExtensions)) {
          fileInfo.errors = fileInfo.errors || [];
          fileInfo.errors.push(messages.error.invalidType);
        }
      }

      if (maxFileSizeBytes !== null && fileInfo.size > maxFileSizeBytes) {
        fileInfo.errors = fileInfo.errors || [];
        fileInfo.errors.push(messages.error.maxFileSize);
      }
    });

    if (maxTotalSizeBytes !== null && fileTotalSize > maxTotalSizeBytes) {
      newErrors.push(messages.error.maxTotalSize);
    }

    const hasFileErrors = validatedFiles.some((f) => f.errors && f.errors.length > 0);
    if (hasFileErrors) {
      newErrors.unshift(messages.error.hasFileErrors);
    }

    return { errors: newErrors, validatedFiles };
  };

  const addFiles = (newFileList: File[]) => {
    const filesToAdd = isMultiple ? newFileList : newFileList.slice(0, 1);

    // 単一ファイルモードで既存ファイルがある場合は置き換え
    const existingFiles = !isMultiple && files.length > 0 ? [] : files;

    const newFiles: FileInfo[] = filesToAdd.map((file) => ({
      id: `file-${Math.random().toString(36).slice(-8)}`,
      file: file,
      name: file.name,
      size: file.size,
      isExisting: false,
      errors: [],
    }));

    const updatedFiles = [...existingFiles, ...newFiles];
    const { errors: newErrors, validatedFiles } = validateFiles(updatedFiles);
    setFiles(validatedFiles);
    setErrors(newErrors);
  };

  const removeFile = (fileId: string, index: number) => {
    const updatedFiles = files.filter((f) => f.id !== fileId);
    const { errors: newErrors, validatedFiles } = validateFiles(updatedFiles);
    setFiles(validatedFiles);
    setErrors(newErrors);

    if (updatedFiles.length === 0) {
      selectButtonRef.current?.focus();
    } else if (index < updatedFiles.length) {
      const nextButton = document.getElementById(`${updatedFiles[index].id}-remove`);
      nextButton?.focus();
    } else {
      const lastButton = document.getElementById(
        `${updatedFiles[updatedFiles.length - 1].id}-remove`,
      );
      lastButton?.focus();
    }
  };

  const handleSelectButtonClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files || []);
    addFiles(fileList);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    selectButtonRef.current?.focus();
  };

  return {
    // State
    files,
    errors,
    totalSize,
    hasError,
    isMultiple,
    maxFileSizeBytes,
    maxTotalSizeBytes,
    selectionSummarySuffix,

    // Refs
    inputRef,
    selectButtonRef,

    // Actions
    setFiles,
    setErrors,
    addFiles,
    removeFile,
    validateFiles,

    // Handlers
    handleSelectButtonClick,
    handleInputChange,

    // Messages
    messages,
  };
};
