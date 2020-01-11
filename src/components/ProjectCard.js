import React, { Fragment, useState } from 'react';
import Project from './Project';

const ProjectCard = props => {
	// Projects: dev_connector, Library, Message Board,
	// a few smaller projects that i used as excercises to understand
	// js, react and node better
	// Project Objects: name, description, link if available

	return (
		<Fragment>
			<div
				className='project-card'
				onClick={() => props.handleProjectCardClick()}
			>
				<p>{props.name}</p>
			</div>
			<Fragment>
				{props.displayProject && (
					<Project name={props.name} description={props.description} />
				)}
			</Fragment>
		</Fragment>
	);
};

export default ProjectCard;
