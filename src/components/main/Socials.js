import React from 'react';
import Github from '../../images/icons/icon_github.svg';
import CodePen from '../../images/icons/icon_codepen.svg';
import Dribbble from '../../images/icons/icon_dribbble.svg';
import Instagram from '../../images/icons/icon_instagram.svg';
import Linkedin from '../../images/icons/icon_linkedin.svg';
import Facebook from '../../images/icons/icon_facebook.svg';

class Socials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socials: [
                {
                    link: 'https://github.com/liivmarii',
                    icon: Github
                },
                {
                    link: 'https://codepen.io/liivmarii',
                    icon: CodePen
                },
                {
                    link: 'https://www.instagram.com/livmarii/',
                    icon: Instagram
                },
                {
                    link: 'https://www.linkedin.com/in/liv-alterskjaer-b09b40196/',
                    icon: Linkedin
                }
            ]
        }
    }

    render() {
        return (
            <div className={'socials row'}>
                {this.state.socials.map((socials, index) => (
                    <div className={'three columns'}>
                        <a key={index.toString()} href={socials.link}>
                            <img src={socials.icon}/>
                        </a>
                    </div>
                ))}
            </div>
        );
    }
}

export default Socials;