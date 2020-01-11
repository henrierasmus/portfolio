import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particle_config from './config/particle_config';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div className='App'>
			<Particles className='particles' params={particle_config} />
			<Navbar />
			<Home />
			<About />
			<Contact />
		</div>
	);
}

export default App;
