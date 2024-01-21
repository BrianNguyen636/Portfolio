import React from "react";
import NavBar from '../components/NavBar'
import './Experience.css'
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
    return (
        <div>
            <NavBar/>
            <br/>
            <div id="experience">
                <h1>Work Experiences:</h1>
                <hr></hr>
                <div id="list">
                    <ExperienceCard 
                    title = "Computer Science Mentor"
                    time = "Jan 2023 - March 2023"
                    logo = "./UW.png"
                    company = "University of Washington Tacoma"
                    roles = {["Provided technical support to students in one-on-one tutoring sessions.",
                    "Supported up to 14 different classes in the Computer Science Major."]}
                    />
                    <ExperienceCard 
                    title = "Computer Science Teacher Assistant"
                    time = "Sep 2022 - Jan 2023"
                    logo = "./UW.png"
                    company = "University of Washington Tacoma"
                    roles = {["Proctored lab sessions of up to 20 students every week.",
                    "Graded projects and held online support sessions for troubleshooting issues with students."]}
                    />
                </div>
                <h1>Community Experiences:</h1>
                <hr></hr>
                <div id="list">
                    <ExperienceCard 
                    title = "President and Founder"
                    time = "Sep 2022 - Dec 2023"
                    logo = "./WGA FGC logo.png"
                    company = "UWT Fighting Game Club"
                    roles = {["Fostered a dedicated community at my college campus with weekly meetings.",
                    "Designed advertising materials for the club utilizing photo-editing software such as Gimp.",
                    "Handled paperwork, advertising, event organization, and coordination."]}
                    />
                    <ExperienceCard 
                    title = "Multi-cultural Ambassador"
                    time = "Dec 2020"
                    logo = "./kakehashi.png"
                    company = "Kakehashi Project"
                    roles = {["Served as a multi-cultural ambassador between Japan and the U.S. in this exchange program.",
                    "Presented multiple speeches in front of schools and representatives about the culture of both Japan and the U.S.",
                    "Wrote and delivered multiple speeches in Japanese."]}
                    />
                </div>
            </div>
        </div>
    );
}