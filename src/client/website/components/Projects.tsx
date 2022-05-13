import '../styles/Projects.css'
import {ProjectContainer} from "./ProjectContainer";
import {ProjectObject} from "../objects/ProjectObject";

export const Projects = () => {
    const projects = [
        {
            name: "RaptureAPI",
            source: "https://github.com/PhoenixxFTW/RaptureAPI",
            description: "A custom Among Us Server made in Java. This was originally meant to be an entire API along with a custom server",
            stack: ['Java', 'Netty', 'Log4J']
        },
        {
            name: "DayM Afterlife",
            source: "somewhere",
            description: "taaa daaaa",
            stack: []
        },
        {
            name: "Other project 1",
            source: "somewhere",
            description: "taaa daaaa",
            stack: []
        },
        {
            name: "Other project 2",
            source: "somewhere",
            description: "taaa daaaa",
            stack: []
        }
    ];

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>

            <div className='projects_grid'>
                {
                    projects.map((project) => (
                        <ProjectContainer key={projects.toString()} project={new ProjectObject(project.name, project.source, project.description, project.stack)}/>)
                    )
                }
            </div>
        </section>
    )
}
