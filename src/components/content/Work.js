import React from 'react';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioClick: '',
            projectsClick: ''
        }
    }

    render() {
        return (
            <section className={'container my-work'}>
                <div className={'row'}>
                    <div className={'seven columns'}>
                        <h2>
                            Portfolio
                        </h2>
                        <p>
                            I started building websites in my early teens, by joining my interest in design with
                            learning basic css.
                        </p>
                        <p>
                            Today I have expanded that interest to include front end web development with React, Sass,
                            and Wordpress (among others), as well as working towards becoming a full stack developer
                            through my software engineering courses at University of Gothenburg, where I am currently
                            studying a bachelor's degree.
                        </p>
                        <ul>
                            <li>
                                <i>My long time love:&emsp;</i>
                                <b>Minimalist design</b>
                            </li>
                            <li>
                                <i>My current favourite topic:&emsp;</i>
                                <b>Animation and UI micro interactions</b>
                            </li>
                            <li>
                                <i>Something new I've learnt recently:&emsp;</i>
                                <b>How to build an android app</b>
                            </li>
                            <li>
                                <i>Something I'm looking forward to learning:&emsp;</i>
                                <b>How to program in Python</b>
                            </li>
                        </ul>
                    </div>
                    <div className={'five columns'}>
                        <h2>
                            Projects
                        </h2>
                        <p>
                            I feel very lucky to be passionate about the field I work in. This also carries over onto my
                            free time, and the projects I do for fun.
                        </p>
                        <p>
                            Having spent a big part of my 20's volunteering, it feels natural to want to find ways of
                            using my 'tech-savvy' for things other than helping my mum set up her printer.
                        </p>
                        <p>
                            I am constantly looking for ways to get more involved in issues I care about, and welcome
                            any
                            suggestions.
                        </p>
                    </div>
                </div>
                <div className={'row'}>
                    <button className={'seven columns'} onClick={this.props.portfolioClick}>
                        View my portfolio
                    </button>
                    <button className={'five columns'} onClick={this.props.projectsClick}>
                        Read about my projects
                    </button>
                </div>
            </section>
        );
    }
}

export default Work;