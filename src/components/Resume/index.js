import React from 'react'

import './styles.css'

export default function Resume() {
    return (
        <React.Fragment>
            <section id="resume">
                <div className="container-resume">
                    <div className="container-education">
                        <div className="header-education">
                            <h1>Education</h1>
                        </div>
                        <div className="main-education">
                            <h2>University</h2>
                            <p>
                                <strong>Unicesumar</strong>

                            </p>
                            <p>
                                <span>Software Engineering </span><em> Abril 2018</em>
                            </p>

                            <p>
                                <strong>Anchieta Anhanguera</strong>

                            </p>
                            <p>
                                <span>Analysis and Systems Development</span><em> Abril 2011</em>
                            </p>
                        </div>

                    </div>



                </div>
                <div className="container-work">
                    <h1>Works</h1>
                    <div className="main-work">
                        <div className="work">
                            <h3>ITeam</h3>
                            <p>
                                <strong>Front-End Developer</strong>

                            </p>
                            <p>
                                <span>Front-End developer working remotely in the E-Saj project</span><em> Março 2020</em>
                            </p>
                        </div>
                        <div className="work">
                            <h3>Portobello América</h3>
                            <p>
                                <strong>Full Stack Developer</strong>

                            </p>
                            <p>
                                <span>Full Stack Developer in Portobello América</span><em> Março 2020</em>
                            </p>
                        </div>

                        <div className="work">
                            <h3>Tech6</h3>
                            <p>
                                <strong>Full Stack Developer</strong>

                            </p>
                            <p>
                                <span>Full Stack Developer in Tech6 project IntelliAgent(USA)</span><em> Junho 2019</em>
                            </p>
                        </div>

                        <div className="work">
                            <h3>Making</h3>
                            <p>
                                <strong>Full Stack Developer</strong>

                            </p>
                            <p>
                                <span>Full Stack Developer in Making </span><em> Setembro 2018</em>
                            </p>
                        </div>

                        <div className="work">
                            <h3>PWX Cloud</h3>
                            <p>
                                <strong>Full Stack Developer</strong>

                            </p>
                            <p>
                                <span>Full Stack Developer in PWX </span><em> Janeiro 2018</em>
                            </p>
                        </div>

                        <div className="work">
                            <h3>Linx Systems</h3>
                            <p>
                                <strong>Backend Developer</strong>

                            </p>
                            <p>
                                <span>Backend developer in Linx Systems </span><em> Junho 2017</em>
                            </p>
                        </div>


                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}