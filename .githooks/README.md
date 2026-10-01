# Git hooks

`commit-msg` valida que los mensajes de commit sigan [Conventional Commits](https://www.conventionalcommits.org/).

Se activa automáticamente con `npm install` (script `prepare`). Si no usas npm, actívalo una vez por clon:

```sh
git config core.hooksPath .githooks
```
