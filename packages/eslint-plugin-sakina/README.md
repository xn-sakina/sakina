# @fz6m/eslint-plugin-sakina

sakina eslint config rules for quick use.

### Install

```bash
  pnpm add -D eslint typescript
  pnpm add -D @fz6m/eslint-plugin-sakina
```

### Initial

```bash
  sakina-lint init
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
