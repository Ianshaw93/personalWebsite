import { useState } from "react";
// import "./App.css";
// import "./index.css";
import Home from "./components/Home";
import NavComponent from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Articles from "./components/Articles";
import Contact from "./components/Contact";

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
			<Articles />
			<Contact />
			{/* <BodyComponent/> */}
			{/* <FooterComponent/> */}
		</div>
	);
}

export default App;
