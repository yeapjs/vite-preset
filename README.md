# yeap-vite-preset

Simplify your developement when you code an app with [Yeap](https://github.com/yeapjs/yeap).

## Installation

First intall the preset package from npm:

```bash
npm install --save-dev yeap-vite-preset
# or
yarn add -D yeap-vite-preset
```

Enhance your vite config with the Yeap preset plugin in your `vite.config.ts` or `vite.config.js`:

```js
import { defineConfig } from "vite";
import yeap from "yeap-vite-preset";

export default defineConfig({
  plugins: [yeap()]
});
```

## License

MIT, see [the license file](./LICENSE).
