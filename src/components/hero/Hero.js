import React from 'react';
import AnimatedZen from "./AnimatedZen";
import Heart from "../../images/heart.svg";

class Hero extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <section className={'hero row'}>
                <div className={'twelve columns'}>
                    <AnimatedZen/>
                </div>
            </section>
        );
    }

}

export default Hero;