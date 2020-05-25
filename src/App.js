import React from 'react';
import './css/App.css';
import Header from './components/contents/Header';
import Footer from './components/contents/Footer';
import Contact from './components/slides/Contact';
import Faq from './components/slides/Faq';
import Portfolio from './components/slides/Portfolio';
import Projects from './components/slides/Projects';
import Welcome from "./components/contents/Welcome";
import Work from "./components/contents/Work";

function App() {
    return (
        <div className='app'>
            <div className={'background-layer'}>
                <Header/>
                <Welcome/>
                <Work/>
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
