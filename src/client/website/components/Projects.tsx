import '../styles/Projects.css'
import { ProjectContainer } from "./ProjectContainer";
import { ProjectList } from "../objects/ProjectList";

export const Projects = () => {

    return (
        <section id='projects' className='section projects'>
            <h2 id='section_title'>Projects</h2>

            <div className='projects_grid'>
                {
                    ProjectList.map((project, index) => (
                        <ProjectContainer key={project.name} project={project}/>)
                    )
                }
            </div>
        </section>
    )
}
