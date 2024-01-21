import React from 'react';
import './ExperienceCard.css'

export default function ExperienceCard(experience) {

    return (
        <div className= 'card' id='experienceCard' >
            <h3 className='card-header'>
                {experience.title} 
                <div style={{float:"right"}}> {experience.time} </div>
            </h3>
            <div id='experienceBody'>
                <h5 className='text-info'>{experience.company}</h5>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <img id='thumb' src={experience.logo} alt={experience.company}></img>
                    <p>
                        Responsibilities:
                        {experience.roles.map((role) => {
                            return (<li>{role}</li>);
                        })}
                    </p>
                </div>
            </div>
        </div>

    );
}