import React from 'react';
import AnimatedZen from "./AnimatedZen";
import Heart from "../../images/heart.svg";

class Hero extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <section className={'hero'}>
                <AnimatedZen />
                <h1>
                    Hello world
                </h1>
                <img className={'heart'} src={Heart} alt={'Heart icon'} />
            </section>
        );
    }

}

export default Hero;