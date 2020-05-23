import React from 'react';
import Card from "./Card";

class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'row services-section'}>
                <div className={'row'}>
                    <div className={'twelve columns'}>
                        <h1>
                            Doing the things
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid blanditiis
                            culpa cumque impedit labore laborum laudantium nam quas repellendus, tenetur ullam vitae
                            voluptatum? Assumenda aut ex minus natus officia.
                        </p>
                    </div>
                </div>
                <div className={'row'}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
        );
    }
}

export default Services;