"use client";

import { useParams } from 'next/navigation';
import { Card, Typography, Row, Col, Avatar, List } from 'antd';
import { players } from '../../../components/data/players';

const { Title, Text } = Typography;

const PlayerDetailPage: React.FC = () => {
    const { player } = useParams();
    const playerSlug = player as string;

    const playerData = players.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === playerSlug);

    if (!playerData) {
        return <Text>Player not found</Text>;
    }

    return (
        <div>
            <Title level={1}>{playerData.name}</Title>
            <Row gutter={16} style={{ marginBottom: '40px' }}>
                <Col span={8}>
                    <Avatar src={playerData.photo} size={128} style={{ marginBottom: '20px' }} />
                </Col>
                <Col span={16}>
                    <Card>
                        <p><strong>Team:</strong> {playerData.team}</p>
                        <p><strong>Role:</strong> {playerData.role}</p>
                        <p><strong>Rating:</strong> {playerData.rating}</p>
                        <p><strong>Followers:</strong> {playerData.followers.toLocaleString()}</p>
                        <p>Some impressive statistics about the player's performance could go here.</p>
                    </Card>
                </Col>
            </Row>
            <Title level={2}>Highlights</Title>
            <List
                itemLayout="vertical"
                dataSource={playerData.highlights}
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

export default PlayerDetailPage;
