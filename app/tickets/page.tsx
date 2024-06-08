"use client";

import { Row, Col, Card, Button, Typography, notification } from 'antd';
import { useState } from 'react';
import { ticketEvents } from '../../components/data/ticketData';

const { Title, Text } = Typography;

const TicketsPage: React.FC = () => {
    const [balance, setBalance] = useState<number>(1000); // Mock user balance in tokens
    const [purchasedTickets, setPurchasedTickets] = useState<string[]>([]);

    const openNotification = (type: 'success' | 'error', message: string, description: string) => {
        notification[type]({
            message: message,
            description: description,
        });
    };

    const handlePurchase = (eventId: number, price: number, method: 'tokens' | 'money') => {
        if (method === 'tokens' && balance >= price) {
            setBalance(balance - price);
            setPurchasedTickets([...purchasedTickets, eventId.toString()]);
            openNotification('success', 'Purchase Successful', `You have purchased a ticket using tokens. New balance: ${balance - price} tokens.`);
        } else if (method === 'money') {
            setPurchasedTickets([...purchasedTickets, eventId.toString()]);
            openNotification('success', 'Purchase Successful', 'You have purchased a ticket using real money.');
        } else {
            openNotification('error', 'Purchase Failed', 'Insufficient token balance to purchase this ticket.');
        }
    };

    return (
        <div>
            <Title level={1}>Buy Tickets</Title>
            <Text>Your balance: {balance} tokens</Text>

            <Row gutter={16} style={{ marginTop: 20 }}>
                {ticketEvents.map((event) => (
                    <Col key={event.id} span={8}>
                        <Card
                            hoverable
                            cover={<img alt={event.name} src={event.image} style={{ borderRadius: '8px 8px 0 0', width: '100%', height: 'auto' }} />}
                            actions={[
                                <Button
                                    type="primary"
                                    onClick={() => handlePurchase(event.id, event.priceInTokens, 'tokens')}
                                    disabled={purchasedTickets.includes(event.id.toString())}
                                >
                                    {purchasedTickets.includes(event.id.toString()) ? 'Ticket Purchased' : `Buy for ${event.priceInTokens} tokens`}
                                </Button>,
                                <Button
                                    type="default"
                                    onClick={() => handlePurchase(event.id, event.priceInMoney, 'money')}
                                    disabled={purchasedTickets.includes(event.id.toString())}
                                >
                                    {purchasedTickets.includes(event.id.toString()) ? 'Ticket Purchased' : `Buy for $${event.priceInMoney}`}
                                </Button>,
                            ]}
                        >
                            <Card.Meta
                                title={event.name}
                                description={<Text>{event.date}</Text>}
                            />
                            <p>{event.description}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TicketsPage;
