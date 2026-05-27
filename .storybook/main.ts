import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    import.meta.resolve('./addons/html-validator'),
    '@storybook/addon-vitest'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../public'],

  viteFinal: (config) =>
    mergeConfig(config, {
      build: {
        cssMinify: false,
      },
    }),
};
export default config;
