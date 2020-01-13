import React from 'react';
import Projects from './Projects';

const About = () => {
	return (
		<div className='about' id='about'>
			<div className='about-inner'>
				<h1>About</h1>
				<div className='about-content'>
					<div className='paragraph-project-wrapper'>
						<p className='about-paragraph'>
							I am a self-taught Softawre Developer with experience creating
							applications using JavaScript, Node and React. I am starting my
							BSC IT Degree at NWU in February of 2020 to better my programming
							skills and gain a better understanding of Computer Sciences. My
							background is from the recruitment and sales industry and I have
							grown a lot and picked soft skills that will benefit any
							organisation I join.
						</p>
						<Projects />
					</div>

					<h2>Skills</h2>
					<ul className='skills'>
						<li>
							<i className='fab fa-html5'></i> HTML
						</li>
						<li>
							<i className='fab fa-css3-alt'></i> CSS
						</li>
						<li>
							<i className='fab fa-js-square'></i> JavaScript
						</li>
						<li>
							<i className='fab fa-react'></i> React
						</li>
						<li>
							<i className='fab fa-node'></i> Node
						</li>
						<li>
							<i className='fab fa-git'></i> git/github
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
