const getFileExtension = (filename: string): string => {
  const match = filename.match(/\.([^.]+)$/);
  return match ? `.${match[1].toLowerCase()}` : '';
};

export const isFileTypeAllowed = (
  filename: string,
  mimeType: string,
  allowedExtensions: string[],
): boolean => {
  const ext = getFileExtension(filename);

  return allowedExtensions.some((allowed) => {
    if (allowed.includes('/*')) {
      const [category] = allowed.split('/');
      return mimeType.startsWith(`${category}/`);
    }
    if (allowed.startsWith('.')) {
      return ext === allowed;
    }
    return mimeType === allowed;
  });
};
