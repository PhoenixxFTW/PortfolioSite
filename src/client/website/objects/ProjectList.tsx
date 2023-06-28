type ResourceData = {
    url: string;
    description: string;
}

export interface ProjectObject {
    name: string;
    description: string;
    source: string;
    stack: string[];
    resources: ResourceData[];
}

export const ProjectList:ProjectObject[] = [
    {
        name: "Hydra IDE",
        source: "https://github.com/PhoenixxFTW/Hydra",
        description: "A custom IDE designed to make correlations and parameterization easier and more efficient for LoadRunner Vugen Scripts.",
        stack: ['Java', 'JavaFX', 'JFoenix', "RichTextFX"],
        resources: [
            {
                url: "hydra/Hydra_1.png",
                description: "First image"
            },
            {
                url: "hydra/Hydra_2.png",
                description: "Second Image"
            },
            {
                url: "hydra/Hydra_3.png",
                description: "Third Image"
            },
            {
                url: "hydra/Hydra_4.png",
                description: "First image"
            },
            {
                url: "hydra/Hydra_5.png",
                description: "Second Image"
            },
            {
                url: "hydra/Hydra_6.png",
                description: "Third Image"
            }
        ]
    },
    {
        name: "Rapture Framework",
        source: "https://github.com/PhoenixxFTW/RaptureFramework",
        description: "A Java NIO socket based game server framework built using Netty. Used to quickly create custom servers for multiplayer games.",
        stack: ['Java', 'Netty', 'Log4J'],
        resources: [
            {
                url: "rapture_framework/Rapture_1.png",
                description: "First image"
            },
            {
                url: "rapture_framework/Rapture_2.png",
                description: "Second Image"
            },
            {
                url: "rapture_framework/Rapture_3.png",
                description: "Third Image"
            }
        ]
    },
    {
        name: "Impostors MC",
        source: "https://github.com/PhoenixxFTW",
        description: "A clone of the very popular game AmongUs, built into Minecraft. This plugin was made for the Socksfor1 server and was very popular for months.",
        stack: ['Java', 'Paper', 'Spring', 'Redis', 'MongoDB'],
        resources: []
    },
    {
        name: "Voxel API",
        source: "https://github.com/PhoenixxFTW",
        description: "A voxel model engine built straight into Minecraft. Allows players to create models by building them with blocks in the game and animate them in-game as well.",
        stack: ['Java', 'Forge', 'ProGuard'],
        resources: []
    },
    {
        name: "DayM (1.7.10 / 1.16)",
        source: "https://gitlab.com/PhoenixxFTW",
        description:
            "A popular Minecraft 1.7.10 mod based off of DayZ",
        stack: ['Java', 'Forge', 'MySQL'],
        resources: []
    },
    {
        name: "RedZone MC",
        source: "https://gitlab.com/PhoenixxFTW",
        description:
            "A Minecraft 1.7.10 mod based off of Call of Duty and PUBG. Consists of multiple different game-modes such as TDM, FFA, and battle royale." +
            " Mod as a built in match-making system, friends system, and much more.",
        stack: ['Java', 'Kryonet', 'DiscordRPC'],
        resources: []
    },
    {
        name: "Phoenix Social Network",
        source: "https://github.com/PhoenixxFTW/SocialNetworking",
        description: "Basic Social Networking platform made for students using JavaFX for the frontend, Kryonet for the networking, and MySQL for data storage.",
        stack: ['Java', 'Kryonet', 'JavaFX', 'MySQL'],
        resources: []
    }
];