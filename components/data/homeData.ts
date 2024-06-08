export interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
}

export interface News {
    id: number;
    title: string;
    date: string;
    summary: string;
    link: string;
    image: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: "CS:GO Major Championship",
        date: "June 20-25, 2024",
        description: "The biggest tournament of the year with the best teams from around the world.",
        image: "/Birthday_2015_Cologne.jpg",
    },
    {
        id: 2,
        title: "DreamHack Masters",
        date: "July 15-18, 2024",
        description: "An annual event featuring top-tier competition in various esports titles.",
        image: "/DreamHack_Masters_allmode.png",
    },
    {
        id: 3,
        title: "ESL One Cologne",
        date: "August 5-8, 2024",
        description: "One of the most prestigious tournaments in the CS:GO calendar.",
        image: "/ESL_One.png",
    },
    // Add more events as needed
];

export const news: News[] = [
    {
        id: 1,
        title: "Team Vitality Wins the CS:GO Major",
        date: "June 25, 2024",
        summary: "In an intense final match, Team Vitality emerged victorious in the CS:GO Major Championship.",
        link: "https://example.com/news/vitality-wins-major",
        image: "https://images.unsplash.com/photo-1596495577886-44d77e1c6a55",
    },
    {
        id: 2,
        title: "FaZe Clan Signs New Star Player",
        date: "June 10, 2024",
        summary: "FaZe Clan announces the signing of a new star player to their CS:GO roster.",
        link: "https://example.com/news/faze-new-player",
        image: "https://images.unsplash.com/photo-1539783851821-2adf1993fe8d",
    },
    {
        id: 3,
        title: "G2 Esports Secures Spot in DreamHack Masters",
        date: "May 28, 2024",
        summary: "G2 Esports secures their place in the upcoming DreamHack Masters after a series of impressive performances.",
        link: "https://example.com/news/g2-dreamhack",
        image: "https://images.unsplash.com/photo-1602332097540-d22a27b6b59a",
    },
    // Add more news articles as needed
];
