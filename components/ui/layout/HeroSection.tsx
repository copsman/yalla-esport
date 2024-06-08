"use client";

import { Layout, Typography, Button, Row, Col } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const HeroSection = () => (
    <Content style={{
        height: '60vh',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?esports)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '20px',
        borderBottom: '4px solid #ff0000'
    }}>
        <Row justify="center">
            <Col>
                <Title style={{ color: '#ff0000', fontSize: '48px', textShadow: '2px 2px 4px #000', fontFamily: 'Press Start 2P, cursive' }}>Welcome to EsportPro</Title>
                <Text style={{ color: '#ffffff', fontSize: '24px', textShadow: '1px 1px 2px #000', fontFamily: 'Press Start 2P, cursive' }}>Your hub for all esports action</Text>
                <br />
                <Button type="primary" size="large" style={{ marginTop: '20px', fontWeight: 'bold', backgroundColor: '#ff0000', borderColor: '#ff0000' }}>Join Now</Button>
            </Col>
        </Row>
    </Content>
);

export default HeroSection;
