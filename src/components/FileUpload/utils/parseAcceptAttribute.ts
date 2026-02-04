export const parseAcceptAttribute = (accept: string): string[] => {
  if (!accept) return [];
  return accept.split(',').map((s) => s.trim().toLowerCase());
};
