import React from 'react';
import './css/App.css';
import Header from './components/contents/Header';
import Main from './components/contents/Main';
import Footer from './components/contents/Footer';
import Contact from './components/slides/Contact';
import Faq from './components/slides/Faq';

function App() {
    return (
        <div className='app'>
            <div className={'background-layer'}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
            <Contact/>
            <Faq/>
        </div>
    );
}

export default App;
