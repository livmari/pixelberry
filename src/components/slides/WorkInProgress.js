import React from 'react';
import ToolKit from '../../images/toolkit.svg';

class WorkInProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: ''
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <img src={ToolKit} alt={'Work in progress icon'}/>
            </div>
        );
    }
}

export default WorkInProgress;