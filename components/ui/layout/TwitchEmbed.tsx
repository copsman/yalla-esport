"use client";

interface TwitchEmbedProps {
    channel: string;
}

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({ channel }) => {
    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
                src={`https://player.twitch.tv/?channel=${channel}&parent=localhost`}
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                height="100%"
                width="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
            ></iframe>
        </div>
    );
};

export default TwitchEmbed;
