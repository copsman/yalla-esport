"use client";

import { Row, Col, Card, Typography } from 'antd';

const { Title } = Typography;

const teams = [
    {
        name: 'Natus Vincere',
        region: 'Europe',
        image: 'https://static.hltv.org/images/team/logo/4608',
    },
    {
        name: 'G2 Esports',
        region: 'Europe',
        image: 'https://static.hltv.org/images/team/logo/5995',
    },
    {
        name: 'Astralis',
        region: 'Europe',
        image: 'https://static.hltv.org/images/team/logo/6665',
    },
    {
        name: 'Team Vitality',
        region: 'Europe',
        image: 'https://static.hltv.org/images/team/logo/9565',
    },
    {
        name: 'FaZe Clan',
        region: 'Europe',
        image: 'https://static.hltv.org/images/team/logo/6667',
    },
    {
        name: 'Ninjas in Pyjamas',
        region: 'Europe',
        image: 'https://static.hltv.org/images/team/logo/4411',
    },
];

const Teams = () => (
    <div style={{ marginTop: '40px' }}>
        <Title level={2} style={{ color: '#00ff00', marginBottom: '20px', fontFamily: 'Press Start 2P, cursive' }}>Top Teams</Title>
        <Row gutter={[16, 16]}>
            {teams.map((team, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                    <Card
                        cover={<img alt={team.name} src={team.image} style={{ height: '100px', objectFit: 'contain' }} />}
                        style={{ backgroundColor: '#333', border: '1px solid #444' }}
                        bodyStyle={{ color: '#fff', textAlign: 'center', fontFamily: 'Press Start 2P, cursive' }}
                    >
                        <Card.Meta title={team.name} description={`Region: ${team.region}`} />
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
);

export default Teams;
