import { defineConfig } from 'dumi';
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  title: 'dumi-test',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'dist',
  mode: 'site',
  hash: !isDev,
  webpack5: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  // hack pnpm workspace
  alias: {
    'dumi-theme-sakina': path.resolve(__dirname, './node_modules/dumi-theme-sakina')
  },
  themeConfig: {
    carrier: 'test'
  }
});
