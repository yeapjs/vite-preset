import type { Plugin } from "vite";

// Taken from https://github.com/vitejs/vite/blob/main/packages/plugin-react/src/index.ts
export default function yeapPlugin(): Plugin[] {
	return [
		{
			name: "vite:yeap-preset",
			config(config, _env) {
				config.esbuild = {
					...config.esbuild,
					jsxFactory: "h",
					jsxFragment: "Fragment",
					jsxInject: `import {h} from "yeap/web"\nimport {Fragment} from "yeap/components"`
				}
			},
		}
	];
}
