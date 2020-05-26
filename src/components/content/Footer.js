import React from 'react';
import BouncyBtn from "../buttons/BouncyBtn";
import LetterIcon from "../../images/letter.svg";
import QuestionIcon from "../../images/question.svg";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: this.getYear(),
        }
    }

    getYear() {
        let currently = new Date();
        let year = currently.getFullYear();

        return (year);
    }

    openContactForm() {
        alert('Hello world!');
    }

    openFaq() {
        alert('Hello world!');
    }

    render() {
        return (
            <footer>
                <section className={'container'}>
                    <div className={'row'}>
                        <div className={'four columns bouncy-container'}>
                            <BouncyBtn bouncyClick={this.openContactForm} src={LetterIcon} p={'Contact me'}/>
                            <BouncyBtn bouncyClick={this.openFaq} src={QuestionIcon} p={'FAQ'}/>
                        </div>
                        <div className={'four columns'}>
                            <ul>
                                <li>
                                    page author&emsp;<b>Liv Alterskjaer</b>
                                </li>
                                <li>
                                    e-mail&emsp;<b>hello@pixelberry.se</b>
                                </li>
                                <li>
                                    location&emsp;<b>Gothenburg, Sweden</b>
                                </li>
                            </ul>
                        </div>
                        <div className={'four columns'}>
                            <ul>
                                <li>
                                    zen-dude illustration credit <a href={'https://www.ls.graphics/illustrations'}>Lstore
                                    Graphics</a>
                                </li>
                                <li>
                                    &copy; {this.state.year} Pixelberry
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }

}

export default Footer;