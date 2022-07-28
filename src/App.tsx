import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavComponent from "./components/Navbar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			{/* <TabComponent/> */}
			<NavComponent />
			<Home />
			{/* <BodyComponent/> */}
			{/* <FooterComponent/> */}
		</div>
	);
}

export default App;
