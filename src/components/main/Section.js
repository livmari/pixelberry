import React from 'react';
import Heart from "../../images/heart.svg";

class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'row welcome-section'}>
                <div className={'twelve columns'}>
                    <h1>
                        Hello world
                    </h1>
                    <img className={'heart'} src={Heart} alt={'Heart icon'}/>
                </div>
                <div className={'twelve columns'}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid cum delectus dolores eos
                        est eum, impedit ipsa minima modi, molestias odio odit recusandae tempora unde ut vel?
                        Architecto autem consequuntur, dolore, doloribus ea eligendi eos eveniet ipsa modi natus numquam
                        odio perferendis quas quis quo suscipit veniam voluptas voluptatum!
                    </p>
                    <a href={"#"}>Link</a>
                </div>
            </section>
        );
    }
}

export default Section;