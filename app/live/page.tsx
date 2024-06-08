"use client";

import { Row, Col, Card, Typography, List } from 'antd';
import { topPlayer, topTeam, matchDetails } from '../../components/data/liveData';
import TwitchEmbed from '@/components/ui/layout/TwitchEmbed';

const { Title, Text } = Typography;

const LivePage: React.FC = () => {
    return (
        <div>
            <Title level={1}>Live Esports Action</Title>

            {/* Twitch Embed and Highlights Section */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                {/* Twitch Embed */}
                <div style={{ flex: 2, position: 'relative' }}>
                    <TwitchEmbed channel="esl_csgo" />
                </div>

                {/* Match Highlights */}
                <Card title="Match Highlights (AI)" style={{ flex: 1, maxHeight: '500px', overflowY: 'scroll' }}>
                    <List
                        itemLayout="horizontal"
                        dataSource={matchDetails.highlights}
                        renderItem={highlight => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<Text strong>{highlight.timestamp}</Text>}
                                    description={highlight.description}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>

            {/* Top Team and Top Player Sections */}
            <Row gutter={16} style={{ marginTop: 20 }}>
                <Col span={12}>
                    <Card title="Top Team" bordered={false}>
                        <img src={topTeam.logo} alt={`${topTeam.name} logo`} style={{ width: '100%', borderRadius: '8px' }} />
                        <Title level={4}>{topTeam.name}</Title>
                        <Text>{topTeam.description}</Text>
                        <p>Country: {topTeam.country}</p>
                        <p>Rank: {topTeam.rank}</p>
                        <p>Followers: {topTeam.followers.toLocaleString()}</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Top Player" bordered={false}>
                        <img src={topPlayer.photo} alt={`${topPlayer.name}`} style={{ width: '100%', borderRadius: '8px' }} />
                        <Title level={4}>{topPlayer.name}</Title>
                        <Text>Role: {topPlayer.role}</Text>
                        <p>Team: {topPlayer.team}</p>
                        <p>Country: {topPlayer.country}</p>
                        <p>Rating: {topPlayer.rating}</p>
                        <p>Followers: {topPlayer.followers.toLocaleString()}</p>
                    </Card>
                </Col>
            </Row>

            {/* Match Details Section */}
            <Card title="Match Details" style={{ marginTop: 20 }}>
                <Row gutter={16} align="middle">
                    <Col span={11}>
                        <Card bordered={false}>
                            <img src={matchDetails.team1.logo} alt={`${matchDetails.team1.name} logo`} style={{ width: '100%', borderRadius: '8px' }} />
                            <Title level={4}>{matchDetails.team1.name}</Title>
                            <Text>{matchDetails.team1.description}</Text>
                            <p>Country: {matchDetails.team1.country}</p>
                            <p>Rank: {matchDetails.team1.rank}</p>
                            <p>Followers: {matchDetails.team1.followers.toLocaleString()}</p>
                        </Card>
                    </Col>
                    <Col span={2} style={{ textAlign: 'center' }}>
                        <Title level={2}>VS</Title>
                    </Col>
                    <Col span={11}>
                        <Card bordered={false}>
                            <img src={matchDetails.team2.logo} alt={`${matchDetails.team2.name} logo`} style={{ width: '100%', borderRadius: '8px' }} />
                            <Title level={4}>{matchDetails.team2.name}</Title>
                            <Text>{matchDetails.team2.description}</Text>
                            <p>Country: {matchDetails.team2.country}</p>
                            <p>Rank: {matchDetails.team2.rank}</p>
                            <p>Followers: {matchDetails.team2.followers.toLocaleString()}</p>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <Col span={24}>
                        <Title level={4}>Match Score</Title>
                        <p>{matchDetails.team1.name} {matchDetails.score} {matchDetails.team2.name}</p>
                        <p>Map: {matchDetails.map}</p>
                        <p>Date: {matchDetails.date}</p>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default LivePage;
