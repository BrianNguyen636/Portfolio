import React from "react";
import NavBar from '../components/NavBar'
import './About.css'

export default function About() {
    return (
        <div>
            <NavBar/>
            <br></br>
            <div id="aboutMain">
                <div className="card" style={{float:"left",padding:"20px",marginRight:"70px"}} id="aboutPortrait">
                    <img src = './fightstick.jpg'
                    alt="My 3rd place at a local fighting game tournament"
                    id="portrait"
                    title="Me (right) at a local fighting game tournament getting 3rd place"
                    />
                </div>
                <div className = "card" id="aboutCard">
                    <h3 className="card-header">About Me</h3>
                    <div id="aboutBody">
                        <p>
                            I'm a fresh graduate with a Bachelors degree in Computer Science. 
                            <br/>
                            I am passionate about both front-end and back-end development, and I like to develop games with my free-time.
                            <br/>
                            Actively seeking an <b className="text-info">internship / entry-level position</b>, and I am willing to relocate anywhere in the U.S.
                        </p>
                    </div>
                    <br/>
                    <h3 className = "card-header">Skills</h3>
                        <ul className="list">
                            <li>Python, Java</li>
                            <li>HTML, CSS, Javascript</li>
                            <li>React, Express, REST</li>
                            <li>SQL, AWS</li>
                            <li>English, Vietnamese, Japanese</li>
                        </ul>
                </div>
            </div>

        </div>
    );
}