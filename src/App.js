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

    const oopsie = 'This is a work in progress, check back soon :)';

    function openPortfolio() {
        alert(oopsie);
    }

    function openProjects() {
        alert(oopsie);
    }

    function openContactForm() {
        alert(oopsie);
    }

    function openFaq() {
        alert(oopsie);
    }

    return (
        <div className='app'>
            <div className={'background-layer'}>
                <Header/>
                <Welcome/>
                <Work portfolioClick={openPortfolio} projectsClick={openProjects}/>
                <Footer contactClick={openContactForm} faqClick={openFaq}/>
            </div>
            <Portfolio/>
            <Projects/>
            <Contact/>
            <Faq/>
        </div>
    );
}

export default App;
