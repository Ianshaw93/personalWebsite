import Home from "./components/Home";
import NavComponent from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Articles from "./components/Articles";
import Contact from "./components/Contact";

function App() {

	return (
		<div>
			<NavComponent />
			<Home />
			<About />
			<Work />
			<Articles />
			<Contact />
		</div>
	);
}

export default App;
