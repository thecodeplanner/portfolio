import { projectArray } from './data.js'
import ProjectCard from './ProjectCard.js'

function Project() {

    const project = projectArray.map((proj) => {
        return (
            <ProjectCard key={proj.name} project={proj} />
        )
    })
   

    
    return (
        <div className='ui raised segment ' style={{backgroundColor:'#eabf9f'}}>
            <p className='intro'>Below are a few of my projects I've created that share my interests. With my love for health and wellness combined with a focus on building clean and minimalistic web applications, I strive to work for a company whose mission aligns with my passions. Please feel free to view my GitHub repositories and demo videos to learn more about each app.</p>
            {project}
        </div>
    )
}

export default Project