import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "Card header",
            content: "Card content"
        }
    }

    render() {
        return (
            <div className={'card four columns'}>
                <h2>
                    {this.state.header}
                </h2>
                <p>
                    {this.state.content}
                </p>
            </div>
        );
    }
}

export default Card;