import React from 'react';
import './css/App.css';
import Header from './components/content/Header';
import Footer from './components/content/Footer';
import Contact from './components/slides/Contact';
import Faq from './components/slides/Faq';
import Portfolio from './components/slides/Portfolio';
import Projects from './components/slides/Projects';
import Welcome from "./components/content/Welcome";
import Work from "./components/content/Work";

function App() {

    function openPortfolio() {
        alert('Hello world!');
    }

    function openProjects() {
        alert('Hello world!');
    }

    return (
        <div className='app'>
            <div className={'background-layer'}>
                <Header/>
                <Welcome/>
                <Work portfolioClick={openPortfolio} projectsClick={openProjects}/>
                <Footer/>
            </div>
            <Portfolio/>
            <Projects/>
            <Contact/>
            <Faq/>
        </div>
    );
}

export default App;
