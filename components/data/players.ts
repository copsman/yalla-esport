export interface Highlight {
    title: string;
    description: string;
    date: string;
}

export interface Player {
    name: string;
    photo: string;
    team: string;
    country: string;
    role: string;
    rating: number;
    followers: number;
    highlights: Highlight[]; // Add highlights to the player data
}

export const players: Player[] = [
    {
        name: "ZywOo",
        photo: "/zywoo_cs2-640x640.jpg",
        team: "Team Vitality",
        country: "France",
        role: "AWPer",
        rating: 1.30,
        followers: 500000,
        highlights: [
            { title: "MVP of the Tournament", description: "Named MVP for his outstanding performance in the finals.", date: "June 2024" },
            { title: "Record-breaking Kills", description: "Set a new record for the most kills in a single match.", date: "May 2024" },
        ],
    },
    {
        name: "s1mple",
        photo: "/S1mple-Image.png",
        team: "Natus Vincere",
        country: "Ukraine",
        role: "Rifler",
        rating: 1.35,
        followers: 600000,
        highlights: [
            { title: "Clutch King", description: "Clutched several crucial rounds to secure victory.", date: "June 2024" },
            { title: "Highest Accuracy", description: "Achieved the highest accuracy rate in the tournament.", date: "May 2024" },
        ],
    },
    {
        name: "NiKo",
        photo: "/Niko-Profile-Image.png",
        team: "FaZe Clan",
        country: "Bosnia and Herzegovina",
        role: "Entry Fragger",
        rating: 1.28,
        followers: 450000,
        highlights: [
            { title: "Entry Frag Master", description: "Consistently secured first kills in key rounds.", date: "April 2024" },
            { title: "Aggressive Playstyle", description: "Known for his aggressive and high-impact plays.", date: "March 2024" },
        ],
    },
    {
        name: "KennyS",
        photo: "/kennyS-featured-image-e1674510055698.png",
        team: "G2 Esports",
        country: "France",
        role: "Sniper",
        rating: 1.25,
        followers: 400000,
        highlights: [
            { title: "Sniper Ace", description: "Pulled off a spectacular ace with his sniper rifle.", date: "February 2024" },
            { title: "Clutch Plays", description: "Known for his clutch plays in high-pressure situations.", date: "January 2024" },
        ],
    },
    // Add more players as needed
];
