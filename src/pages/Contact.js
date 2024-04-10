import {React, useRef} from "react";
import NavBar from '../components/NavBar'
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm(
            'service_2ph5v4c','template_6a24qv2', form.current, {
                publicKey: '1Pp4U1ZKVFQ7z7HT5',
            }
        )
        .then(() => {
            alert('Email successfully sent!');
        }, (error) => {
            alert('Email failed...' , error.text);
        });
    }
    return (
        <div>
            <NavBar/>
            <div id="contactMain">
                <br/><br/>
                <h2 style={{textAlign:"center"}}>Like what you see?</h2>
                <br></br>
                <div className = "card" id="formCard">
                    <h3 className="card-header">Contact Me</h3>
                    {/* <form action="https://formsubmit.co/0dcfea91625437078565348294267901" method="POST"> */}
                    <form ref = {form} onSubmit={sendEmail}>
                        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
                            <div style={{marginRight:30}}>
                                <label for="nameInput" class="form-label mt-4">Name:</label>
                                <input type="text" class="form-control" id="nameInput" placeholder="Enter your name" required name="from_name"/>
                            </div>
                            <div>
                                <label for="emailInput" class="form-label mt-4">Email address:</label>
                                <input type="email" class="form-control" id="emailInput" placeholder="Enter your email" required name="from_email"/>
                            </div>

                        </div>
                        <br/>
                        {/* <div>
                            <label for="subjectInput" class="form-label mt-4">Subject:</label>
                            <input type="text" class="form-control" id="subjectInput" required name="Subject"/>
                        </div> */}
                        <br/>
                        Message:
                        <textarea class="form-control" id="textInput" rows="4" required name="message"/>
                        <br/>
                        <button className="btn btn-primary" id="submitButton" type="submit">Send</button>
                        <br/><br/>
                        <div>Or email me at <b className="text-info">briannguyen636@gmail.com</b></div>
                    </form>

                </div>


            </div>
        </div>
    );
}

