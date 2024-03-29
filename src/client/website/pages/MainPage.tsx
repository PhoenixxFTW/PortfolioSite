import '../styles/MainPage.css'
import {About} from "../components/About";
import {Projects} from "../components/Projects";

export const MainPage = () => {
    return (
        <div className={"mainPage"}>
            <div className="spacer layer1" />
            {/*<NavigationBar/>
            <h1 id={"name"} className={"text"}>Hi, I'm Jay.</h1>
            <h1 id={"position"} className={"text"}>A Full-Stack Developer</h1>
            <p id={"description"} className={"text"}>
                I'm a software engineer from Ontario Canada and I have over 5 years of experience in designing and
                developing unique and innovative software applications. I can do everything from modding games to
                creating fullstack applications.
            </p>*/}
            <About/>
            <Projects/>
            <div className="spacer layer2" />
        </div>
    )
}