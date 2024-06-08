"use client";

import { Typography } from 'antd';

const { Title } = Typography;

const TwitchStream = () => (
    <div style={{ marginTop: '40px', width: '100%', textAlign: 'center' }}>
        <Title level={2} style={{ color: '#333', marginBottom: '20px' }}>Live Stream</Title>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#f9f9f9', borderRadius: '8px' }}>
            <iframe
                src="https://player.twitch.tv/?channel=esl_csgo&parent=localhost" // Replace with your Twitch channel and adjust the "parent" parameter
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    </div>
);

export default TwitchStream;
