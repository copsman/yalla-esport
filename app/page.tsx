"use client";

import { Row, Col, Card, Typography, Button, List } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { events, news } from '../components/data/homeData';
import { CSSProperties } from 'react';

const { Title, Text } = Typography;

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={heroSectionStyle}>
        <Image
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ borderRadius: '8px' }}
        />
        <div style={heroContentStyle}>
          <Title level={1} style={{ color: 'white' }}>Welcome to Desert Aurora Hackathon</Title>
          <Text style={{ color: 'white' }}>Catch all the latest updates and live action from the esports world.</Text>
          <br />
          <div style={buttonContainerStyle}>
            <Link href="/live" passHref>
              <Button type="primary" size="large" style={{ marginTop: '20px' }}>Watch Live</Button>
            </Link>
            <Link href="/tickets" passHref>
              <Button size="large" style={{ marginTop: '20px', marginLeft: '10px' }}>Buy Tickets</Button>
            </Link>
            <Link href="/marketplace" passHref>
              <Button size="large" style={{ marginTop: '20px', marginLeft: '10px' }}>Marketplace</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Current and Upcoming Events Section */}
      <Card title="Current and Upcoming Events" style={{ marginBottom: '40px' }}>
        <Row gutter={16}>
          {events.map((event) => (
            <Col key={event.id} span={8}>
              <Card
                hoverable
                cover={<Image alt={event.title} src={event.image} layout="responsive" width={500} height={300} style={{ borderRadius: '8px 8px 0 0' }} />}
              >
                <Title level={4}>{event.title}</Title>
                <Text>{event.date}</Text>
                <p>{event.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* News Section */}
      <Card title="Latest News">
        <List
          itemLayout="vertical"
          dataSource={news}
          renderItem={article => (
            <List.Item
              key={article.id}
              extra={<Image width={272} height={150} alt={article.title} src={article.image} style={{ borderRadius: '8px' }} />}
            >
              <List.Item.Meta
                title={<a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>}
                description={article.date}
              />
              <Text>{article.summary}</Text>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

// CSS-in-JS styling for hero section
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  height: '95vh', // Adjust height to fit screen
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '8px',
  marginBottom: '40px',
};

const heroContentStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
};

export default HomePage;
