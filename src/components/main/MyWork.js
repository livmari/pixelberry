import React from 'react';
import Services from "./Services";
import Hobbies from "./Hobbies";

class MyWork extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className={'container my-work'}>
                <div className={'row'}>
                    <Services/>
                    <Hobbies/>
                </div>
            </section>
        );
    }
}

export default MyWork;