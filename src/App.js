import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particle_config from './config/particle_config';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<Particles className='particles' params={particle_config} />
				<Navbar />
				<Home />
				<About />
				<Contact />
			</Router>
		</div>
	);
}

export default App;
