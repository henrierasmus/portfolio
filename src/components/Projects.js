import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
	const [displayProject, setDisplayProject] = useState(false);

	const resetDisplay = () => {
		if (displayProject === true) {
			setDisplayProject(false);
		}
	};

	let projects = [
		{
			name: 'dev connector',
			pic: '',
			description:
				'Socail media application for developers. This is a Tutorial by Traversy Media on Udemy',
			link: 'https://mighty-dawn-59701.herokuapp.com/',
			id: 1
		},
		{
			name: 'Library App',
			pic: '../components/pics/library.png',
			description:
				'An app where a person can view and upload new books and authors. This was an excersice to become comfortable with express. The tutorial can be found on MDN.',
			link: 'https://damp-basin-23459.herokuapp.com/',
			id: 2
		},
		{
			name: 'Message Board',
			pic: '',
			description: 'Small message board in Node',
			link: 'https://sheltered-savannah-65982.herokuapp.com/',
			id: 3
		},
		{
			name: 'Todo List',
			pic: '',
			description: 'Small todo list made with JavaScript.',
			id: 5
		},
		{
			name: 'Dice',
			pic: '',
			description:
				'An application that simulates 2 dice being rolled, the purpose of the project was to learn state using react.',
			id: 4
		}
	];
	return (
		<div className='projects' onClick={() => resetDisplay()}>
			<div className='projects-inner'>
				<h2>Projects</h2>
				<div className='project-cards'>
					{projects.map(project => (
						<ProjectCard
							name={project.name}
							description={project.description}
							link={project.link}
							id={project.id}
							pic={project.pic}
							displayProject={displayProject}
							setDisplayProject={setDisplayProject}
							key={project.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
