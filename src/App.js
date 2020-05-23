import React from 'react';
import './css/App.css';
import Hero from './components/hero/Hero';
import Section from "./components/main/Section";

function App() {
    return (
        <div className='app container'>
            <Hero/>
            <Section/>
        </div>
    );
}

export default App;
