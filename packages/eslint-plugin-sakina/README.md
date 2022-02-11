# @fz6m/eslint-plugin-sakina

sakina eslint config rules for quick use.

### Install

使用前，请确保安装了以下前置依赖：

```bash
  pnpm add -D eslint typescript
```

安装本插件：

```bash
  pnpm add -D @fz6m/eslint-plugin-sakina
```

### Scene

##### normal

```js
// .eslintrc.js

module.exports = {
  extends: ['plugin:@fz6m/sakina/recommended']
}
```

##### react

```js
// .eslintrc.js

module.exports = {
  extends: ['plugin:@fz6m/sakina/react']
}
```
