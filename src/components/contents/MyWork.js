import React from 'react';

class MyWork extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className={'container my-work'}>
                <div className={'row'}>
                    <div className={'six columns'}>
                        <h2>
                            Doing the things
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid blanditiis
                            culpa cumque impedit labore laborum laudantium nam quas repellendus, tenetur ullam vitae
                            voluptatum? Assumenda aut ex minus natus officia.
                        </p>
                    </div>
                    <div className={'six columns'}>
                        <h2>
                            Doing the things
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid blanditiis
                            culpa cumque impedit labore laborum laudantium nam quas repellendus, tenetur ullam vitae
                            voluptatum? Assumenda aut ex minus natus officia.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default MyWork;