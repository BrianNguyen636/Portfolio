import React from 'react';
import './ProjectCard.css'

export default function ProjectCard(Project) {

    return (
        <a className= 'card' id='projectCard' href = {Project.link}>
            <h3 className='card-header'>{Project.title}</h3>
            <div id='projectBody'>
                <img id='projectThumb' src = {Project.image} alt='Project Screenshot'/>
                <p>
                    <b className='text-info'>{Project.tags}</b>
                    <br/>
                    <br/>
                    <div style={{fontSize:"16px"}}>
                        {Project.body.map((e) => {
                            return (<li>{e}</li>);
                        })}
                    </div>
                </p>
            </div>
        </a>

    );
}