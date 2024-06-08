export interface TicketEvent {
    id: number;
    name: string;
    date: string;
    description: string;
    image: string;
    priceInMoney: number; // Price in real money
    priceInTokens: number; // Price in tokens
}

export const ticketEvents: TicketEvent[] = [
    {
        id: 1,
        name: "CS:GO Major Championship Finals",
        date: "June 20, 2024",
        description: "Watch the top teams battle it out in the grand finals of the CS:GO Major Championship.",
        image: "/Birthday_2015_Cologne.jpg",
        priceInMoney: 50,
        priceInTokens: 500,
    },
    {
        id: 2,
        name: "Fortnite World Cup",
        date: "July 15, 2024",
        description: "Experience the excitement of the Fortnite World Cup live.",
        image: "/Fortnite_untitled-page_2019-02-20-1920x1080-286cafdc5dd09f5b9446db80f3a5915d94656973.png",
        priceInMoney: 40,
        priceInTokens: 400,
    },
    {
        id: 3,
        name: "Valorant Champions Tour",
        date: "August 5, 2024",
        description: "Join the intense action at the Valorant Champions Tour.",
        image: "/Valorant_Champions_Tour_logo.png",
        priceInMoney: 45,
        priceInTokens: 450,
    },
    // Add more events as needed
];
