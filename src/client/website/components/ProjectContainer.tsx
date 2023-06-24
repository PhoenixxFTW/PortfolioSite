import '../styles/Projects.css'
import { FC } from "react";
import GitHubIcon from '@material-ui/icons/GitHub'
import { ProjectObject } from "../objects/ProjectList";
import { Link } from 'react-router-dom';

export const ProjectContainer : FC<{ readonly project: ProjectObject}> = (props) => {
    return (
        //`/ProjectView/${props.project.name}`
        <Link to={`/ProjectView/${props.project.name}`} state={{project: props.project}}>
            <div className='project' /*onClick={() => navigate(`/ProjectView/${props.project.name}`, { state: { project: props.project } })}*/>
                <h3 id='project_name'>{props.project.name}</h3>

                <p className='project_description'>{props.project.description}</p>
                {
                    props.project.stack && (
                    <ul className='project_stack'>
                        {
                            props.project.stack.map((item, index) => (
                                <li key={index} /*key={props.project.stack.toString()}*/ className='stack-item'>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                    )
                }

                {/*FIXME There's an error here: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.*/}
                {props.project.source && (
                    <a href={props.project.source} aria-label='source code' className='link link--icon'>
                        <GitHubIcon />
                    </a>
                )}
            </div>
        </Link>
    )
}