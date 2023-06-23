export interface ProjectObject {
    id: number,
    name: string;
    description: string;
    source: string;
    stack: string[];
}

export const ProjectList:ProjectObject[] = [
    {
        id: 1,
        name: "Rapture Framework",
        source: "https://github.com/PhoenixxFTW/RaptureFramework",
        description: "A Java NIO socket based game server framework built using Netty. Used to quickly create custom servers for multiplayer games",
        stack: ['Java', 'Netty', 'Log4J']
    },
    {
        id: 2,
        name: "Voxel API",
        source: "https://github.com/PhoenixxFTW",
        description: "A voxel model engine built straight into Minecraft. Allows players to create models by building them with blocks in the game and animate them in-game as well.",
        stack: ['Java', 'Forge', 'ProGuard']
    },
    {
        id: 3,
        name: "RedZone MC",
        source: "https://gitlab.com/PhoenixxFTW",
        description: "A Minecraft 1.7.10 mod based off of Call of Duty and PUBG. Consists of multiple different game-modes such as TDM, FFA, and battle royale." +
            " Mod as a built in match-making system, friends system, and much more.",
        stack: ['Java', 'Kryonet', 'DiscordRPC']
    },
    {
        id: 4,
        name: "Impostors MC",
        source: "https://github.com/PhoenixxFTW",
        description: "A clone of the very popular game AmongUs, built into Minecraft. This plugin was made for the Socksfor1 server and was very popular for months.",
        stack: ['Java', 'Spigot', 'Spring', 'Lombok']
    },
    {
        id: 5,
        name: "Phoenix Social Network",
        source: "https://github.com/PhoenixxFTW/SocialNetworking",
        description: "Basic Social Networking platform made for students using JavaFX for the frontend, Kryonet for the networking, and MySQL for data storage.",
        stack: ['Java', 'Kryonet', 'JavaFX', 'MySQL']
    }
];