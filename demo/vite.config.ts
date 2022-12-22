import { defineConfig } from "vite";
import yeap from "../src/index";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [yeap()],
});
