function ProjectCard({project}) {
    return (
        <div>
            <h3> {project.name} </h3>
            <p>{project.description}</p>
            <span><a target='_blank' href={project.github}>GitHub</a> | <a target='_blank' href={project.video}>Demo</a></span>
        </div>
    )
}

export default ProjectCard