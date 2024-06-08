"use client";

import { Row, Col, Card, Typography } from 'antd';

const { Title } = Typography;

const news = [
    {
        title: 'New Champion Crowned',
        summary: 'Natus Vincere wins the ESL Pro League Finals in an exhilarating match.',
        image: 'https://source.unsplash.com/random/200x200?esports1',
    },
    {
        title: 'Upcoming Tournaments',
        summary: 'Stay tuned for the latest upcoming tournaments in your region.',
        image: 'https://source.unsplash.com/random/200x200?esports2',
    },
    {
        title: 'Player Spotlight',
        summary: 'A deep dive into the career of s1mple, one of the top players in CS:GO.',
        image: 'https://source.unsplash.com/random/200x200?esports3',
    },
    {
        title: 'IEM Katowice Overview',
        summary: 'The latest updates and highlights from IEM Katowice 2024.',
        image: 'https://source.unsplash.com/random/200x200?esports4',
    },
    {
        title: 'FaZe Clan Strategies',
        summary: 'Breaking down FaZe Clan’s strategies for the upcoming BLAST Premier.',
        image: 'https://source.unsplash.com/random/200x200?esports5',
    },
    {
        title: 'The Rise of Astralis',
        summary: 'How Astralis became a dominant force in the CS:GO scene.',
        image: 'https://source.unsplash.com/random/200x200?esports6',
    },
];

const News = () => (
    <div style={{ marginTop: '40px' }}>
        <Title level={2} style={{ color: '#00ff00', marginBottom: '20px', fontFamily: 'Press Start 2P, cursive' }}>Latest News</Title>
        <Row gutter={[16, 16]}>
            {news.map((item, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                    <Card
                        cover={<img alt={item.title} src={item.image} />}
                        style={{ backgroundColor: '#333', border: '1px solid #444' }}
                        bodyStyle={{ color: '#fff', fontFamily: 'Press Start 2P, cursive' }}
                    >
                        <Card.Meta title={item.title} description={item.summary} />
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
);

export default News;
