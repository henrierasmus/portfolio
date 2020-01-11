import React from 'react';
import Projects from './Projects';

const About = () => {
	return (
		<div className='about'>
			<div className='about-inner'>
				<h1>About</h1>
				<div className='about-content'>
					<div className='paragraph-project-wrapper'>
						<p className='about-paragraph'>
							I am a self-taught Softawre Developer with experience creating
							applications using JavaScript, Node and React. I am starting my
							BSC IT Degree at NWU in February of 2020 to better my programming
							skills and gain a better understanding of Computer Sciences. My
							background is from the recruitment and sales industry and I feel
							that I have grown a lot and picked soft skills that will benefit
							any organisation I join.
						</p>
						<Projects />
					</div>

					<ul className='skills'>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node</li>
						<li>git/github</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
