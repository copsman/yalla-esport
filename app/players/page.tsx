"use client";

import { Row, Col, Card, Typography, Button } from 'antd';
import Link from 'next/link';
import { players } from '../../components/data/players';

const { Title, Text } = Typography;

const PlayersPage: React.FC = () => {
    return (
        <div>
            <Title level={1}>Players</Title>
            <Row gutter={16} style={{ marginTop: 20 }}>
                {players.map((player) => (
                    <Col key={player.name} span={8}>
                        <Card
                            hoverable
                            cover={<img alt={player.name} src={player.photo} style={{ borderRadius: '8px 8px 0 0', width: '100%', height: '200px', objectFit: 'cover' }} />}
                            actions={[
                                <Link href={`/players/${player.name.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                                    <Button type="primary">View Player</Button>
                                </Link>,
                            ]}
                        >
                            <Card.Meta
                                title={player.name}
                                description={
                                    <>
                                        <p><strong>Team:</strong> {player.team}</p>
                                        <p><strong>Role:</strong> {player.role}</p>
                                        <p><strong>Rating:</strong> {player.rating}</p>
                                        <p><strong>Followers:</strong> {player.followers.toLocaleString()}</p>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PlayersPage;
