export const bannerStyleClasses = `
  data-[style=standard]:border-[calc(3/16*1rem)] data-[style=standard]:rounded-12
  data-[style=color-chip]:[--color-chip-color:currentColor] data-[style=color-chip]:border-[calc(2/16*1rem)] data-[style=color-chip]:!pl-6 data-[style=color-chip]:shadow-[inset_calc(8/16*1rem)_0_0_0_var(--color-chip-color)]
  data-[style=color-chip]:desktop:!pl-10 data-[style=color-chip]:desktop:shadow-[inset_calc(16/16*1rem)_0_0_0_var(--color-chip-color)]
`;

export const bannerTypeClasses = `
  data-[type=info1]:text-blue-900
  data-[type=info2]:text-solid-gray-536
  data-[type=warning]:text-warning-yellow-2 data-[type=warning]:[--color-chip-color:theme(colors.yellow.400)]
  data-[type=error]:text-error-1
  data-[type=success]:text-success-2
`;
