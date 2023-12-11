# Vue 3 Project (JavaScript)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

```
"stylelint.validate": [
    "vue"
]
```

[FormatCodeAction](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action)

```
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.formatDocument": true,
    "source.fixAll.eslint": true
},
```

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

### Install Vue

```sh
npm i -g @vue/cli`
```

### Follow the installation guide of [nvm](https://github.com/nvm-sh/nvm)

### Set the node/npm versions

```sh
nvm use
```

### Install the dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Lint CSS with [StyleLint](https://stylelint.io/)

```sh
npm run lint:style
```

## [PrimeVue UI](https://primevue.org/)

Supports a set of completely unstyled, fully accessible UI components.
