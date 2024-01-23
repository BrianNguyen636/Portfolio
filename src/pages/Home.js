import React from "react";
import NavBar from '../components/NavBar'
import './Home.css'


export default function Home() {
    return (
        <div>
            <NavBar/>
            <br></br>
            <div id="homeMain">
                <div className="card" id = "homePortrait">
                    <img src = './picture.jpg'
                    alt="Me doing a thumbs up in front of the life-size Gundam Unicorn"
                    id="portrait"
                    title="Myself in front of the life-sized Gundam Unicorn at Tokyo"
                    />
                </div>
                <div id="homeText">
                    <h1>Hey, I'm Brian Nguyen</h1>
                    <h2 className="text-primary" style={{textIndent:"30px"}}>   Software Engineer </h2>
                    <h3 style={{wordSpacing:"3px"}}>I'm a Front and Back-end Developer with experience working with Web APIs, Databases, and Cloud Services.</h3>
                    <br/>
                    <a className="btn btn-primary" href="/Portfolio/contact">Contact Me</a>
                </div>
            </div>
        </div>
    );
}