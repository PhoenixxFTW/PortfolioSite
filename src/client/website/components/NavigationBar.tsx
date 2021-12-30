import '../styles/NavigationBar.css'
import {Link} from "react-scroll";

export const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link>
                </li>

                <li>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link>
                </li>


                <li>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Skills</Link>
                </li>
            </ul>
        </nav>
    )
}