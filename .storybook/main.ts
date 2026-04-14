import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../public']
};

export default config;
