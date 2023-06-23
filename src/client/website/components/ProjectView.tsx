import '../styles/ProjectView.css'
import { useLocation } from "react-router-dom";
import { ProjectObject } from "../objects/ProjectList";

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
                <img src={process.env.PUBLIC_URL + '/projects/rapture_framework/Rapture_1.png'} alt="logo1" className='image' />
                <img src={process.env.PUBLIC_URL + '/projects/rapture_framework/Rapture_2.png'} alt="logo2" className='image' />
                <img src={process.env.PUBLIC_URL + '/projects/rapture_framework/Rapture_3.png'} alt="logo3" className='image' />
            </div>
        </div>
    )
}