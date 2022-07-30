import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// type BurgerProps = {
// 	handleClick: (event: React.MouseEvent) => boolean;
// }

// export default function NavComponent(props: BurgerProps) {
export default function NavComponent() {

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav); // not working??

	return (
		<>
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 ">
				<div className="flex-1">
					<a className="text-[#40AAE8] btn btn-ghost normal-case text-xl" href="#home">
						Ian Shaw
						<img src="" className="nav--logo" />
					</a>
				</div>
				{/* menu hidden mobile, visible big screen */}
				<div className='hidden md:flex'> 
					{/* <div className="navbar-end">*/}
						<ul className="menu menu-horizontal p-0">
						{/* <ul className="hidden md:flex"> */}
							<li>
								<Link to='home' smooth={true} duration={500}>
									Home
								</Link>
								{/* <a href="#link">Home</a> */}
							</li>
							<li>
								<Link to='portfolio' smooth={true} duration={500}>
									Portfolio
								</Link>
								{/* <a href="#link">Portfolio</a> */}
							</li>
							<li>
								<a href="#link">Blog</a>
							</li>
							<li>
								<a href="#link">CV</a>
							</li>
							<a className="btn">Contact</a>
						</ul>
						
					{/* </div> */}
				</div>
				{/* Burger Menu */}
				{/* <div className='md:hidden' onClick={props.handleClick}> */}
				<div onClick={handleClick} className='md:hidden z-10'>
					{!nav ? <FaBars /> : <FaTimes /> } 
				</div>
				{/* mobile menu - burger content */}
				{/* to do add bg colour - same as nav bar colour */}
				<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen b flex flex-col justify-center items-center bg-[#CBD0D3]'} >
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
				<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
					<ul>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full' 
							href="/">
								LinkedIn<FaLinkedin size={30}/>
							</a>
						</li>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full' href="/">
								GitHub <FaGithub size={30}/>
							</a>
						</li>
						{/* <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full' href="/">
								Medium<FaMedium size={30}/>
							</a>
						</li> */}
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full' href="/">
								Email <HiOutlineMail size={30}/>
							</a>
						</li>
						<li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full' href="/">
								Resume<BsFillPersonLinesFill size={30}/>
							</a>
						</li>
					</ul>
				</div>
			</div>

		</>
	);
}
