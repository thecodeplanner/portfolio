import ProjectImage from './ProjectImage'
import React, {useState} from "react"


function ProjectCard({project}) {

    return (
        <div>
            <h2> {project.name} </h2>
            <p className='description'>{project.description}</p>
            <p><a target='_blank' href={project.github}>GitHub</a> | <a target='_blank' href={project.video}>Demo</a></p>
            <img className='screenshots' src={project.image[0]}></img>
            <img className='screenshots' src={project.image[1]}></img>
            <img className='screenshots' src={project.image[2]}></img>
            
        </div>
    )
}

export default ProjectCard