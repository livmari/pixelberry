import React from 'react';
import Heart from "../../images/heart.svg";
import Socials from "../buttons/Socials";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'container welcome-section'}>
                <div className={'row'}>
                    <div className={'twelve columns'}>
                        <h1>
                            Hello world
                        </h1>
                        <img className={'heart'} src={Heart} alt={'Heart icon'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'twelve columns'}>
                        <p>
                            My name is Liv, and I'm a freelance developer based in Gothenburg, Sweden. I love meeting
                            new people, and creating value in their daily lives by developing web based solutions that
                            help solve problems they're facing.
                        </p>
                        <p>
                            My ultimate goal is to make my customers and partners feel like the very zen dude at the
                            center of this website design. By working with me, I hope that you feel like complex tasks
                            are solved with simplified but solid solutions, that are easy for you to take ownership of
                            and build from.
                        </p>
                    </div>
                </div>
                <Socials/>
            </section>
        );
    }
}

export default Welcome;