import React from 'react';

class BouncyBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            src: '',
            p: ''
        }
    }

    render() {
        return (
            <a className={'bouncy-btn'} href={this.props.link}>
                <img src={this.props.src} alt={'Icon'}/>
                <p>
                    {this.props.p}
                </p>
            </a>
        );
    }
}

export default BouncyBtn;