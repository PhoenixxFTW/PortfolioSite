import '../styles/ProjectView.css'
import { useLocation } from "react-router-dom";
import {ProjectList, ProjectObject} from "../objects/ProjectList";
import {ProjectContainer} from "./ProjectContainer";

export const ProjectView = () => {
    const location = useLocation();
    // Have to ignore this otherwise it'll break
    // @ts-ignore
    const project = location.state.project as ProjectObject;

    return (
        <div className='project-view'>
            <h1 id='name' className='text'>{project.name}.</h1>
            <p id='stack' className='text'>{project.stack.toString()}</p>
            <p id='description' className='text'>{project.description}</p>
            <div className='images_grid'>
                {
                    project.resources.map((data, index) => (
                        <img key={index} src={process.env.PUBLIC_URL + '/projects/' + data.url} alt={data.description} className='image' />
                        )
                    )
                }
{/*                project.resources.map((project, index) => (
                    <ProjectContainer key={project.name} project={project}/>)
                )
                <img src={process.env.PUBLIC_URL + '/projects/rapture_framework/Rapture_1.png'} alt="logo1" className='image' />
                <img src={process.env.PUBLIC_URL + '/projects/rapture_framework/Rapture_2.png'} alt="logo2" className='image' />
                <img src={process.env.PUBLIC_URL + '/projects/rapture_framework/Rapture_3.png'} alt="logo3" className='image' />*/}
            </div>
        </div>
    )
}