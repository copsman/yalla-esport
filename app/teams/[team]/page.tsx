"use client";

import { useParams } from 'next/navigation';
import { Card, Typography, Row, Col, List, Avatar } from 'antd';
import { teams } from '../../../components/data/teams';
import { players } from '../../../components/data/players';

const { Title, Text } = Typography;

const TeamDetailPage: React.FC = () => {
    const { team } = useParams();
    const teamSlug = team as string;

    const teamData = teams.find(t => t.name.toLowerCase().replace(/\s+/g, '-') === teamSlug);
    const teamPlayers = players.filter(p => p.team === teamData?.name);

    if (!teamData) {
        return <Text>Team not found</Text>;
    }

    return (
        <div>
            <Title level={1}>{teamData.name}</Title>
            <Row gutter={16} style={{ marginBottom: '40px' }}>
                <Col span={8}>
                    <img src={teamData.logo} alt={teamData.name} style={{ borderRadius: '8px', width: '100%' }} />
                </Col>
                <Col span={16}>
                    <Card>
                        <p><strong>Country:</strong> {teamData.country}</p>
                        <p><strong>Rank:</strong> {teamData.rank}</p>
                        <p><strong>Followers:</strong> {teamData.followers.toLocaleString()}</p>
                        <p>{teamData.description}</p>
                    </Card>
                </Col>
            </Row>

            <Title level={2}>Player Line-Up</Title>
            <Row gutter={16}>
                {teamPlayers.map(player => (
                    <Col key={player.name} span={6}>
                        <Card>
                            <Avatar src={player.photo} size={64} />
                            <Title level={4}>{player.name}</Title>
                            <p><strong>Role:</strong> {player.role}</p>
                            <p><strong>Rating:</strong> {player.rating}</p>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Title level={2} style={{ marginTop: '40px' }}>Highlights</Title>
            <List
                itemLayout="vertical"
                dataSource={teamData.highlights}
                renderItem={highlight => (
                    <List.Item>
                        <List.Item.Meta
                            title={highlight.title}
                            description={highlight.date}
                        />
                        <Text>{highlight.description}</Text>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default TeamDetailPage;
