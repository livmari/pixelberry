import React from 'react';
import WorkInProgress from "./WorkInProgress";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionClasses: 'foregroud-layer contact'
        }
    }

    render() {
        return (
            <div className={this.props.sectionClasses}>
                <div className={'container'}>
                </div>
            </div>
        );
    }
}

export default Portfolio;