import { projectArray } from './data.js'
import ProjectCard from './ProjectCard.js'

function Project() {

    const project = projectArray.map((proj) => {
        return (
            <ProjectCard key={proj.name} project={proj} />
        )
    })
   

    
    return (
        <>
        <div className='ui raised segment ' style={{backgroundColor:'#eabf9f'}}>
            <div className='intro'>
                <h1 className='title'>Check out my work!</h1>
                <p className='intro' >Below are a few projects I created that show more about me and my interests. With my love for health and wellness combined with a focus on building clean and minimalistic web applications, I strive to work for a company whose mission aligns with my passions. <br></br><br></br> Please feel free to view my GitHub repositories and demo videos to learn more about each application.</p>
            </div>
            </div>
            {project}
        
        </>
    )
}

export default Project