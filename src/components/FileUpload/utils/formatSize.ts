export const formatSize = (bytes: number, precision: number | null = null): string => {
  if (bytes === 0) return '0B';

  const units = ['B', 'KB', 'MB', 'GB'];
  const k = 1024;
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), units.length - 1);

  const decimals = precision !== null ? precision : i > 0 ? 1 : 0;
  return `${parseFloat((bytes / k ** i).toFixed(decimals))}${units[i]}`;
};
