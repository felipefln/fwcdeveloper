import React from 'react'
import './styles.css'

export default function ContactUs() {
    return (
        <React.Fragment>
            <section id="contactUs">
                <div className="container-contact">
                    <h2>Contact Us</h2>
                    <div className="contact-form">
                        <h6>Have a question or want to work together?</h6>
                        <form>
                            <input type="text" placeholder="Name"></input>
                            <input type="email" placeholder="E-mail"></input>
                            <textarea type="text" placeholder="Message"></textarea>
                        </form>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}