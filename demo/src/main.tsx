import { render } from "yeap/web";
import { Bar } from "./Bar";
import { Foo } from "./Foo";
import "./index.css";

function App() {
	return (
		<div>
			<h1>Hello from Yeap</h1>
			<Foo />
			<Bar />
		</div>
	);
}

render(<App />, document.getElementById("app")!);
