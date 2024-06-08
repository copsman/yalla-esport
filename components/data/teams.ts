export interface Highlight {
    title: string;
    description: string;
    date: string;
}

export interface Team {
    name: string;
    logo: string;
    description: string;
    country: string;
    rank: number;
    followers: number;
    highlights: Highlight[]; // Add highlights to the team data
}

export const teams: Team[] = [
    {
        name: "Team Vitality",
        logo: "/Team_Vitality_logo.svg.png",
        description: "A top-tier team known for their strategic gameplay and strong presence in the CS:GO scene.",
        country: "France",
        rank: 1,
        followers: 1250000,
        highlights: [
            { title: "Championship Win", description: "Secured the championship with a dominating performance.", date: "June 2024" },
            { title: "Perfect Season", description: "Completed a flawless season without losing a single match.", date: "May 2024" },
        ],
    },
    {
        name: "FaZe Clan",
        logo: "/Faze_Clan.svg.png",
        description: "FaZe Clan is known for their aggressive playstyle and impressive individual talent.",
        country: "United States",
        rank: 3,
        followers: 2000000,
        highlights: [
            { title: "Comeback Victory", description: "Overcame a significant deficit to win the finals.", date: "April 2024" },
            { title: "Top Fraggers", description: "Recorded the highest number of kills in the tournament.", date: "March 2024" },
        ],
    },
    {
        name: "Natus Vincere",
        logo: "/Natus_Vincere_2021_allmode.png",
        description: "Natus Vincere, also known as Na'Vi, excels in executing tactical strategies.",
        country: "Ukraine",
        rank: 2,
        followers: 1800000,
        highlights: [
            { title: "Dominant Performance", description: "Swept through the competition without dropping a map.", date: "February 2024" },
            { title: "Player of the Year", description: "Their captain was named player of the year for his leadership.", date: "January 2024" },
        ],
    },
    // Add more teams as needed
];
