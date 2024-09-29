/*
  Setup Vitest
  - Vitest and Jest are the same kind of tool, a test runner. You would use one or the other, but not both.
  - React Testing Library is a tool you use in your tests to render React components without an actual page in a browser.
  - 

  ~~ npm i -D vitest
  - there are many frameworks that can be used for testing: 
    + Jest
    + <Vitest>
    + React Testing Library
    + Cypress
    + Mocha
    + Jasmine

  - package.json
      "test": "vitest",
      "test:ui": "vitest --ui"
      -> interface to monitor tests

  - extension: Vitest + Vitest Snippets
    -> iv
    -> d
    -> i


**************************

  1. create root/tests/main.test.ts
    -> npm run test
    -> npm t
    -> npm run test:ui


\\\\\\\\\\\\\\\\\\\\\\\\\\

  Setup React Testing Library
  - to test react -> react testing library
  - react-testing-library runs on node 
    -> but node does not know anything about the DOM 
    -> to test react components we need to know the DOM -> need jsdom

  ~~ npm i -D @testing-library/react 
  ~~ npm i -D jsdom
  ~~ npm i -D @testing-library/jest-dom

  2. create root/vitest.config.ts
    -> config jsdom for testing

  3. npm test:ui


*/

import Layout from './pages/Layout'
import Providers from './providers'

function App() {
  return (
    <Providers>
      <Layout />
    </Providers>
  )
}

export default App
