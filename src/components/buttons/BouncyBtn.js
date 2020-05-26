import React from 'react';

class BouncyBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bouncyClick: '',
            src: '',
            p: ''
        }
    }

    render() {
        return (
            <a className={'bouncy-btn'} href={void (0)} onClick={this.props.bouncyClick}>
                <img src={this.props.src} alt={'Icon'}/>
                <p>
                    {this.props.p}
                </p>
            </a>
        );
    }
}

export default BouncyBtn;