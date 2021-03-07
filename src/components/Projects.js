import { projectArray } from './data.js'
import ProjectCard from './ProjectCard.js'

function Project() {

    const project = projectArray.map((proj) => {
        return (
            <ProjectCard key={proj.name} project={proj} />
        )
    })
   

    
    return (
        <div className='projects'>
            <h1> Check out my work!</h1>
            {project}
        
            
        </div>
    )
}

export default Project