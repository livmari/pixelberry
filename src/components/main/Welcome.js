import React from 'react';
import Heart from "../../images/heart.svg";
import Socials from "./Socials";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'row welcome-section'}>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid cum delectus dolores
                            eos
                            est eum, impedit ipsa minima modi, molestias odio odit recusandae tempora unde ut vel?
                            Architecto autem consequuntur, dolore, doloribus ea eligendi eos eveniet ipsa modi natus
                            numquam
                            odio perferendis quas quis quo suscipit veniam voluptas voluptatum!
                        </p>
                    </div>
                </div>
                <Socials/>
            </section>
        );
    }
}

export default Welcome;