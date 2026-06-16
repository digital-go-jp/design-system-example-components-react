export const rgb2hex = (rgb: string): string => {
  const regRgb = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const regRgba = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+|\d\.\d+)\)$/;
  const isRgb = rgb.match(/,/g)?.length === 2;
  const matched = isRgb ? (rgb.match(regRgb) ?? []) : (rgb.match(regRgba) ?? []);
  return (
    matched
      .slice(1)
      .map((n) => {
        if (isRgb) {
          return Number.parseInt(n, 10).toString(16).padStart(2, '0');
        }

        if (n === '0') {
          return '00';
        }

        const a = Number.parseFloat(n);
        return Math.round(Math.min(Math.max(a || 1, 0), 1) * 255)
          .toString(16)
          .padStart(2, '0');
      })
      .join('')
      .toUpperCase() ?? ''
  );
};
