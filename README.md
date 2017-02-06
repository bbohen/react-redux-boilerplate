# React Redux Boilerplate

## About

A scalable pattern for apps using the newest versions of popular tools in the react ecosystem. The goal is to continually keep this up to date with the latest tools & patterns. Feedback,  ideas & suggestions are all welcome.

If you run the app you will notice there are humans, cats and a form. The humans are generated from [uifaces](https://uinames.com/), the cats come from [reddit](https://www.reddit.com/r/cats/) and the form generates a random cat gif from [giphy](https://www.giphy.com). The general layout and design is likely not the best around but the focus of this repo is the structure, performance and composition of the tools being used.

Included technologies:

* [React](https://github.com/facebook/react)
  * Declarative library for building user interfaces
* [Redux](https://github.com/reactjs/redux)
  * Predictable state container
  * The [chrome dev tools extension](https://github.com/zalmoxisus/redux-devtools-extension) is supported
* [React Redux](https://github.com/reactjs/react-redux)
  * Official React bindings for Redux
* [React Router 4](https://github.com/ReactTraining/react-router)
  * Declarative routing for React
* [Redux Form](https://github.com/erikras/redux-form)
  * A Higher Order Component using react-redux to keep form state in a Redux store
* [Redux Pack](https://github.com/lelandrichardson/redux-pack)
  * Sensible promise handling and middleware for redux
* [Styled Components](https://github.com/styled-components/styled-components)
  * Visual primitives for the component age
  * If you're using Atom, I recommend [the language-babel package](https://atom.io/packages/language-babel) for editor support
* [Webpack 2](https://github.com/webpack/webpack)
  * Bundling, chunking and code splitting
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
  * Development server with built in live reload
* [Jest](https://github.com/facebook/jest)
  * Unit testing, snapshot testing with coverage reports
* [Babel](https://github.com/babel/babel)
  * The compiler for writing next generation JavaScript
* [ESLint](https://github.com/eslint/eslint)
  * Lint using the [Airbnb style guide](https://github.com/airbnb/javascript)

## Development

1. Clone the repo `git clone --depth=1 https://github.com/bbohen/react-redux-boilerplate.git` (or fork)
2. Install [Yarn](https://yarnpkg.com/en/docs/getting-started)
3. `yarn start`

## Testing

Still working on improving coverage...

* `yarn test` to run tests
* `yarn test:coverage` to run tests & view coverage report
