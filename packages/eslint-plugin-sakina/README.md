# @fz6m/eslint-plugin-sakina

sakina eslint config rules for quick use.

### Install

使用前，请确保安装了以下前置依赖：

```bash
  pnpm add -D eslint@^7 @typescript-eslint/parser
  pnpm add -D eslint-config-prettier eslint-plugin-prettier prettier
```

⚠ 注意：prettier 仍有插件未适配 eslint8，目前仅可用 eslint7 。

安装本插件：

```bash
  pnpm add -D @fz6m/eslint-plugin-sakina
```

### Scene

##### normal

```js
{
  extends: ['plugin:@fz6m/sakina/recommended']
}
```

##### react

安装 react 所需前置依赖：

```bash
  pnpm add -D eslint-plugin-react-hooks
```

```js
{
  extends: ['plugin:@fz6m/sakina/react']
}
```
