import React from 'react'
import './styles.css'
import picture from '../../assets/pic.png'

export default function About() {
    return (
        <React.Fragment>
            <section id="about">
                <div className="container-about">
                    <div className="card">
                        <img src={picture} className="picture" alt="Picture-Felipe"></img>
                    </div>
                    <div className="about-info">
                        <h3>About Me</h3>
                        <p>I have finished my B.E. in Computer Science and have been working in industry for past few years,
                            I have finished my B.E. in Computer Science and have been working in industry for past few years</p>

                        <h3>Contact Details</h3>
                        <p className="address">
                            <span>Felipe Weiduschadt de Carvalho</span>

                        </p>
                        <p>
                            <span>Armação do Pântano do Sul, Florianópolis, Santa Catarina, Brazil</span>
                        </p>
                        <p>
                            <span>55 048 99817-0729</span>
                        </p>
                        <p>
                            <span>felipe.carvalhofln@gmail.com</span>
                        </p>
                    </div>


                </div>
                <div className="container-skills">
                    <h1>Skills</h1>
                    <div className="bar-skills">
                        <h6>HTML</h6>
                        <div className="line line1">90%</div>
                        <h6>CSS</h6>
                        <div className="line line2">65%</div>
                        <h6>JavaScript</h6>
                        <div className="line line3">80%</div>
                        <h6>ReactJS</h6>
                        <div className="line line4">80%</div>
                        <h6>Angular2+</h6>
                        <div className="line line5">50%</div>
                        <h6>Django</h6>
                        <div className="line line6">90%</div>
                        <h6>Django Rest Framework</h6>
                        <div className="line line7">90%</div>
                        <h6>Flask</h6>
                        <div className="line line8">70%</div>
                        <h6>Python</h6>
                        <div className="line line9">80%</div>
                        <h6>SQL</h6>
                        <div className="line line10">70%</div>
                        <h6>No-SQL</h6>
                        <div className="line line11">50%</div>
                        <h6>AWS</h6>
                        <div className="line line12">50%</div>
                        <h6>GIT/GIT FLOW</h6>
                        <div className="line line13">90%</div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}