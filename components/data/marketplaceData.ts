export interface MarketplaceItem {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number; // Price in tokens
}

export const marketplaceItems: MarketplaceItem[] = [
    {
        id: 1,
        name: "AWP | Dragon Lore",
        description: "A legendary sniper rifle skin for the AWP in CS:GO.",
        image: "/53e3a7a23f47500e6e1651c084bc1fcf.webp",
        price: 1000,
    },
    {
        id: 2,
        name: "Raven Skin",
        description: "A popular and intimidating outfit in Fortnite.",
        image: "/Raven_(New_Featured)_-_Outfit_-_Fortnite.webp",
        price: 800,
    },
    {
        id: 3,
        name: "Prime Vandal",
        description: "A sleek and powerful rifle skin in Valorant.",
        image: "/valorant-prime-vandal-weapon-skin.png",
        price: 950,
    },
    {
        id: 4,
        name: "Karambit | Fade",
        description: "A stunning knife skin with a gradient finish in CS:GO.",
        image: "/360fx360f.png",
        price: 1200,
    },
    {
        id: 5,
        name: "Omen's Classic",
        description: "Omen's iconic sidearm skin in Valorant.",
        image: "/valorant-soul-silencer-ghost-weapon-skin.png",
        price: 400,
    },
    {
        id: 6,
        name: "Galaxy Wrap",
        description: "A stunning galaxy-themed wrap for your weapons in Fortnite.",
        image: "/Star_Scout_(Featured)_-_Wrap_-_Fortnite.webp",
        price: 500,
    },
    // Add more items as needed
];
