import React from 'react';
import './css/App.css';
import Hero from './components/hero/Hero';
import Welcome from "./components/main/Welcome";
import Services from "./components/main/Services";

function App() {
    return (
        <div className='app container'>
            <Hero/>
            <Welcome/>
            <Services/>
        </div>
    );
}

export default App;
