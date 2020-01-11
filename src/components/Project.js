import React from 'react';

const Project = props => {
	return (
		<div className='project'>
			<div className='project-inner'>
				<div className='close'>X</div>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default Project;
