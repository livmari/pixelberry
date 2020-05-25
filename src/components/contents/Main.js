import React from 'react';
import Welcome from "./Welcome";
import MyWork from "./MyWork";

class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Welcome/>
                <MyWork/>
            </div>
        );
    }

}

export default Main;