import '../styles/Projects.css'
import {ProjectContainer} from "./ProjectContainer";
import {ProjectObject} from "../objects/ProjectObject";

export const Projects = () => {
    const projects = [
        {
            name: "Rapture Framework",
            source: "https://github.com/PhoenixxFTW/RaptureFramework",
            description: "A Java NIO socket based game server framework built using Netty. Used to quickly create custom servers for multiplayer games",
            stack: ['Java', 'Netty', 'Log4J']
        },
        {
            name: "Voxel API",
            source: "https://github.com/PhoenixxFTW",
            description: "A voxel model engine built straight into Minecraft. Allows players to create models by building them with blocks in the game and animate them in-game as well.",
            stack: ['Java', 'Forge', 'ProGuard']
        },
        {
            name: "RedZone MC",
            source: "https://gitlab.com/PhoenixxFTW",
            description: "A Minecraft 1.7.10 mod based off of Call of Duty and PUBG. Consists of multiple different game-modes such as TDM, FFA, and battle royale." +
                " Mod as a built in match-making system, friends system, and much more.",
            stack: ['Java', 'Kryonet', 'DiscordRPC']
        },
        {
            name: "Impostors MC",
            source: "https://github.com/PhoenixxFTW",
            description: "A clone of the very popular game AmongUs, built into Minecraft. This plugin was made for the Socksfor1 server and was very popular for months.",
            stack: ['Java', 'Spigot', 'Spring', 'Lombok']
        },
        {
            name: "Phoenix Social Network",
            source: "https://github.com/PhoenixxFTW/SocialNetworking",
            description: "Basic Social Networking platform made for students using JavaFX for the frontend, Kryonet for the networking, and MySQL for data storage.",
            stack: ['Java', 'Kryonet', 'JavaFX', 'MySQL']
        }
    ];

    return (
        <section id='projects' className='section projects'>
            <h2 id='section_title'>Projects</h2>

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
