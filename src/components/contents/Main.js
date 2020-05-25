import React from 'react';
import Welcome from "./Welcome";
import Work from "./Work";

class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Welcome/>
                <Work/>
            </div>
        );
    }

}

export default Main;