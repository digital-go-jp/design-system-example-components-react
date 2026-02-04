export type FileInfo = {
  id: string;
  name: string;
  size: number;
  file?: File;
  isExisting?: boolean;
  errors?: string[];
};

export type FileUploadMessages = {
  error: {
    maxFiles: string;
    maxTotalSize: string;
    invalidType: string;
    maxFileSize: string;
    hasFileErrors: string;
  };
  announce: {
    dropAvailable: string;
    dropUnavailable: string;
  };
};
