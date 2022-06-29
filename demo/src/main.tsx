import { render } from "yeap/web";
import { Foo } from "./Foo";
import "./index.css";

function App() {
	return (
		<div>
			<h1>Hello from Preact</h1>
			<Foo />
			<h2>Compat</h2>
		</div>
	);
}

render(<App />, document.getElementById("app")!);
