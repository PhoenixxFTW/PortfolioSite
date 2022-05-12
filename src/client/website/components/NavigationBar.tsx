import {Link} from "react-scroll";

export const NavigationBar = () => {
    return (
        <header>
            <nav className={"navList"} style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <ul style={{
                    listStyle: "none",
                    float: "left"
                }}>
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
        </header>
    )
}