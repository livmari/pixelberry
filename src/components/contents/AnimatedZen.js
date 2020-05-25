import React from 'react';
import Zen from '../../images/zendude/zen.png';
import Shadow from '../../images/zendude/shadow.svg';

class AnimatedZen extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={'zen'}>
                <img src={Zen} alt={'Photo credit: https://www.ls.graphics/illustrations'} />
                <img src={Shadow} alt={'Shadow of floaty guy'} />
            </div>
        );
    }

}

export default AnimatedZen;