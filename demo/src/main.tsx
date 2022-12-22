import { render } from "yeap/web";
import { Foo } from "./Foo";
import "./index.css";

function App() {
	return (
		<div>
			<h1>Hello from Yeap</h1>
			<Foo />
		</div>
	);
}

render(<App />, document.getElementById("app")!);
