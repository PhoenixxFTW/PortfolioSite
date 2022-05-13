import '../styles/Projects.css'
import {FC} from "react";
import GitHubIcon from '@material-ui/icons/GitHub'
import {ProjectObject} from "../objects/ProjectObject";

export const ProjectContainer : FC<{ readonly project: ProjectObject}> = (props) => {

    return (
        <div className='project'>
        <h3>{props.project.getName}</h3>

        <p className='project_description'>{props.project.getDescription}</p>
        {
            props.project.getStack && (
            <ul className='project_stack'>
                {
                    props.project.getStack.map((item) => (
                    <li key={props.project.getStack.toString()} className='stack-item'>
                        {item}
                    </li>
                ))
                }
            </ul>
        )
        }

        {props.project.getSource && (
            <a
                href={props.project.getSource}
                aria-label='source code'
                className='link link--icon'
            >
                <GitHubIcon />
            </a>
        )}
    </div>
    )
}