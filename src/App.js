import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact.js';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className='App'>
			<NavBar />
			<Home />
			<About />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
