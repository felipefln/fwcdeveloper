import React from 'react'
import logo from '../../assets/logo.png'
import './styles.css'
import { FaLinkedin, FaGithub, FaSkype, FaArrowCircleDown } from 'react-icons/fa'

export default function Header() {
    return (
        <React.Fragment>
            <section id="home">
                <div className="container-header">
                    <div className="header-fixed">
                        <div className="logo">
                            <img src={logo}></img>
                        </div>
                        <nav className="navigation">
                            <a href="#">Home</a>
                            <a href="#about">About</a>
                            <a href="#resume">Resume</a>
                            <a href="#contactUs">ContactUs</a>
                        </nav>
                    </div>

                    <div className="infos">
                        <div>
                            <h1>I am Felipe Weiduschadt de Carvalho</h1>
                            <h3>I am a Full Stack Developer. I like backend, i like frontend, i like development software</h3>
                        </div>
                        <div className="container-icons">
                            <a href="#">
                                <FaLinkedin />
                            </a>
                            <a href="#">
                                <FaGithub />
                            </a>
                            <a href="#">
                                <FaSkype />
                            </a>
                        </div>
                    </div>
                    <p className="scrollDown">
                        <a href="#" className="scroll">
                            <FaArrowCircleDown />
                        </a>
                    </p>

                </div>

            </section>
        </React.Fragment>
    )
}