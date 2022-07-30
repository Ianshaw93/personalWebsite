import { useState } from "react";
// import "./App.css";
// import "./index.css";
import Home from "./components/Home";
import NavComponent from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";

function App() {
	const [count, setCount] = useState(0);

	return (
		// <div className="App">
		<div>
			{/* <TabComponent/> */}
			<NavComponent />
			<Home />
			<About />
			<Work />
			{/* <BodyComponent/> */}
			{/* <FooterComponent/> */}
		</div>
	);
}

export default App;
