"use client";

import { Row, Col, Card, Typography, Button } from 'antd';
import Link from 'next/link';
import { teams } from '../../components/data/teams';

const { Title, Text } = Typography;

const TeamsPage: React.FC = () => {
    return (
        <div>
            <Title level={1}>Teams</Title>
            <Row gutter={16} style={{ marginTop: 20 }}>
                {teams.map((team) => (
                    <Col key={team.name} span={8}>
                        <Card
                            hoverable
                            cover={<img alt={team.name} src={team.logo} style={{ borderRadius: '8px 8px 0 0', width: '100%', height: '200px', objectFit: 'cover' }} />}
                            actions={[
                                <Link href={`/teams/${team.name.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                                    <Button type="primary">View Team</Button>
                                </Link>,
                            ]}
                        >
                            <Card.Meta
                                title={team.name}
                                description={
                                    <>
                                        <p><strong>Country:</strong> {team.country}</p>
                                        <p><strong>Rank:</strong> {team.rank}</p>
                                        <p><strong>Followers:</strong> {team.followers.toLocaleString()}</p>
                                        <p>{team.description}</p>
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

export default TeamsPage;
