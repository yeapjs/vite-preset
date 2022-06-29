import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	"..",
	"dist",
	"esm",
);

for (const file of fs.readdirSync(dir)) {
	const target = path.join(
		dir,
		path.basename(file, path.extname(file)) + ".mjs",
	);

	fs.renameSync(path.join(dir, file), target);

	const source = fs.readFileSync(target, "utf-8");
	const code = source.replace(
		/(\w+)\.js(["'])/g,
		(_, spec, quot) => `${spec}.mjs${quot}`,
	);
	if (code !== source) {
		fs.writeFileSync(target, code);
	}
}
