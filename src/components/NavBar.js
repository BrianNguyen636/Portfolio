import React from 'react';
import './NavBar.css'

export default function NavBar() {
    return (
        <div className = "navbar bg-primary" id='navbar'>
            <div className = "container">
                <a href = '/Portfolio/' id='Nav'> <b>Home</b></a>
                <a href = '/Portfolio/about' id='Nav'> <b>About Me</b></a>
                <a href = '/Portfolio/projects' id='Nav'> <b>My Projects</b></a>
                <a href = '/Portfolio/experience' id='Nav'> <b>Experience</b></a>
                <a href = '/Portfolio/contact' id='Nav'> <b>Contact Me</b></a>
                <a href = "https://github.com/BrianNguyen636" target='_blank' id = 'Nav'>
                        <img id="navIcon" src = "./github.png" alt='Github'/>
                </a>
                <a href = "https://www.linkedin.com/in/brian-nguyen-b4ba47222/" target='_blank' id = 'Nav'>
                        <img id="navIcon" src = "./linkedin.png" alt='Linkedin'/>
                </a>
            </div>
        </div>
    )
}