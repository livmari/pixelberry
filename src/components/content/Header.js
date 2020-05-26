import React from 'react';
import AnimatedZen from "./AnimatedZen";

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header>
                <AnimatedZen/>
            </header>
        );
    }

}

export default Header;