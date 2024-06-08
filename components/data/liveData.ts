export interface Team {
    name: string;
    logo: string;
    description: string;
    country: string;
    rank: number;
    followers: number;
}

export interface Player {
    name: string;
    photo: string;
    team: string;
    country: string;
    role: string;
    rating: number;
    followers: number;
}

export interface MatchDetails {
    title: string;
    description: string;
    date: string;
    team1: Team;
    team2: Team;
    score: string;
    map: string;
    highlights: Highlight[]; // Array of match highlights
}

export interface Highlight {
    timestamp: string; // Timestamp of the highlight
    description: string; // Description of the highlight
}

export const topTeam: Team = {
    name: "Team Vitality",
    logo: "/Team_Vitality_logo.svg.png",
    description: "A top-tier team known for their strategic gameplay and strong presence in the CS:GO scene.",
    country: "France",
    rank: 1,
    followers: 1250000,
};

export const topPlayer: Player = {
    name: "ZywOo",
    photo: "/zywoo_cs2-640x640.jpg",
    team: "Team Vitality",
    country: "France",
    role: "AWPer",
    rating: 1.30,
    followers: 500000,
};

export const matchDetails: MatchDetails = {
    title: "Championship Finals",
    description: "The final showdown between the top teams in the league. Witness the best CS2 gameplay.",
    date: "June 15, 2024",
    team1: {
        name: "Team Vitality",
        logo: "/Team_Vitality_logo.svg.png",
        description: "Team Vitality has dominated the CS2 scene with their tactical prowess and teamwork.",
        country: "France",
        rank: 1,
        followers: 1250000,
    },
    team2: {
        name: "FaZe Clan",
        logo: "/Faze_Clan.svg.png",
        description: "FaZe Clan is known for their aggressive playstyle and impressive individual talent.",
        country: "United States",
        rank: 3,
        followers: 2000000,
    },
    score: "16-14",
    map: "Mirage",
    highlights: [
        { timestamp: "05:30", description: "First blood drawn by Team Vitality." },
        { timestamp: "15:45", description: "Incredible clutch by ZywOo to win the round." },
        { timestamp: "25:00", description: "FaZe Clan executes a flawless site take." },
        { timestamp: "35:15", description: "Triple kill by ropz secures the round for FaZe Clan." },
        { timestamp: "45:30", description: "Final decisive round won by Team Vitality." },
    ],
};
