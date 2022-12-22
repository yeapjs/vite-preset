import type { Plugin } from "vite";

// Taken from https://github.com/vitejs/vite/blob/main/packages/plugin-react/src/index.ts
export default function yeapPlugin(): Plugin[] {
	return [
		{
			name: "vite:yeap-preset",
			config(config, _env) {
				config.esbuild = {
					...config.esbuild,
					jsx: "transform",
					jsxFactory: "__auto_h",
					jsxFragment: "__auto_Fragment",
					jsxInject: `import { h as __auto_h } from "yeap/web"\nimport { Fragment as __auto_Fragment } from "yeap/components"`,
				};
			},
		},
	];
}
