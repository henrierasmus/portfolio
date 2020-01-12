import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<a href='#home' className='no-underline grey'>
				<h1>Henri Erasmus</h1>
			</a>
			<ul>
				<li>
					<a href='#about' className='no-underline grey'>
						About/Projects
					</a>
				</li>
				<li>
					<a href='#contact' className='no-underline grey'>
						Contact Me
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
