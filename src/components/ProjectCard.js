
function ProjectCard({project}) {

    return (
        <div className=' projects ui raised segment' style={{backgroundColor:'#eabf9f'}} >
            <h2 className='proj-name'> {project.name} </h2>
            <p className='text-content'><a className='link' target='_blank' href={project.github}>GitHub</a> | <a className='link' target='_blank' href={project.video}>Demo</a></p>
            <p className='description'>{project.description}</p>
            <img className='screenshots' src={project.image[0]}></img>
            <img className='screenshots' src={project.image[1]}></img>
            <img className='screenshots' src={project.image[2]}></img>      
        </div>
    )
}

export default ProjectCard