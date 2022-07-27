import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

// type BurgerProps = {
// 	handleClick: (event: React.MouseEvent) => boolean;
// }

// export default function NavComponent(props: BurgerProps) {
export default function NavComponent() {

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav); // not working??

	return (
		<>
			<div className="navbar bg-base lg">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl" href="#home">
						Ian Shaw
						<img src="" className="nav--logo" />
					</a>
				</div>
				{/* menu hidden mobile, visible big screen */}
				<div className='hidden md:flex'> 
					<div className="navbar-end">
						<ul className="menu menu-horizontal p-0">
							<li>
								<a href="#link">Home</a>
							</li>
							<li>
								<a href="#link">Portfolio</a>
							</li>
							<li>
								<a href="#link">Blog</a>
							</li>
							<li>
								<a href="#link">CV</a>
							</li>
							<a className="btn">Contact</a>
						</ul>
						
					</div>
				</div>
				{/* Burger Menu */}
				{/* <div className='md:hidden' onClick={props.handleClick}> */}
				<div onClick={handleClick} className='md:hidden z-10'>
					{!nav ? <FaBars /> : <FaTimes /> } 
				</div>
				{/* mobile menu - burger content */}
				{/* to do add bg colour - same as nav bar colour */}
				<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen b flex flex-col justify-center items-center '} >
					<li className='py-6 text-4xl'>
						<a href="#link">Home</a>
					</li>
					<li className='py-6 text-4xl'>
						<a href="#link">Portfolio</a>
					</li>
					<li className='py-6 text-4xl'>
						<a href="#link">Blog</a>
					</li>
					<li className='py-6 text-4xl'>
						<a href="#link">CV</a>
					</li>
					<li className='py-6 text-4xl'>
						<a href="#link">Contact</a>
					</li>
				</ul>

				{/* Social Icons */}
				<div className='flex fixed flex-col tip-[35%] left-0'>
					<ul>
						<li>
							<a href="/">
								<FaLinkedin />
								<FaGithub />
							</a>
						</li>
					</ul>
				</div>
			</div>

		</>
	);
}
