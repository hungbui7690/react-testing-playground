# Setup Vitest & react-testing-library

```bash
npm i -D vitest
npm i -D @testing-library/react 
npm i -D @testing-library/user-event
npm i -D @testing-library/jest-dom
npm i -D jsdom
```


```json
"scripts": {
  "server": "json-server --watch src/data/db.json --delay 500",
  "start": "concurrently \"npm run server\" \"npm run dev\"",
  "test": "vitest",
  "test:ui": "vitest --ui"
},
```


```bash
npm run test
npm t
npm run test:ui -> ui to monitor test
```


extension: `Vitest` + `Vitest Snippets`
```js
iv -> import 
d -> describe
i -> it
```


create root/tests/setup.ts
```ts
import '@testing-library/jest-dom/vitest'
```


vitest.config.js
```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
  },
})

```


tsconfig.json
```json
"types": ["vitest/globals"],
```

