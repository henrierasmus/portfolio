import React, { Fragment, useState, useEffect } from 'react';
import Project from './Project';

const ProjectCard = props => {
	const [displayProject, setDisplayProject] = useState(props.displayProject);
	// Projects: dev_connector, Library, Message Board,
	// a few smaller projects that i used as excercises to understand
	// js, react and node better
	// Project Objects: name, description, link if available

	useEffect(() => {
		if (props.displayProject === false) {
			setDisplayProject(false);
		}
	});

	const handleProjectCardClick = e => {
		if (props.displayProject === false) {
			setDisplayProject(!displayProject);
			props.setDisplayProject(true);
		} else {
			setDisplayProject(false);
		}
	};

	return (
		<Fragment>
			<div className='project-card' onClick={e => handleProjectCardClick(e)}>
				<p><strong>{props.name}</strong></p>
			</div>
			<Fragment>
				{displayProject && (
					<Project
						name={props.name}
						description={props.description}
						link={props.link}
						displayProject={displayProject}
					/>
				)}
			</Fragment>
		</Fragment>
	);
};

export default ProjectCard;
