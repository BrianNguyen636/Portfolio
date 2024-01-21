import React from "react";
import NavBar from '../components/NavBar'
import ProjectCard from "../components/ProjectCard";
import './Projects.css'
import {PROJECTS as ProjectList} from '../components/ProjectList'


export default function Projects() {
    return (
        <div>
            <NavBar/>
            <br/>

            <div id="projectMain">
                <div id="projectText">
                    <h2>A look at my previous work.</h2>
                    <br/>
                </div>
                <div id = "projectList">
                    {ProjectList.map((proj) => {
                        return (
                            <div key={proj.title}>
                                <ProjectCard 
                                    title = {proj.title} 
                                    tags = {proj.tags} 
                                    body = {proj.body} 
                                    image = {proj.image}
                                    link = {proj.link}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    );
}