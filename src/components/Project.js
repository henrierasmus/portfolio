import React from 'react';

const Project = props => {
	console.log(props);
	return (
		<div className='project'>
			<div className='project-inner'>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				{props.link ? (
					<a
						className='no-underline'
						href={props.link}
						target='_blank'
						onClick={props.displayProject === true}
					>
						View Project
					</a>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Project;
