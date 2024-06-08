"use client";

import { Row, Col, Card, Button, Typography, notification } from 'antd';
import { useState } from 'react';
import { marketplaceItems } from '../../components/data/marketplaceData';

const { Title, Text } = Typography;

const MarketplacePage: React.FC = () => {
    const [balance, setBalance] = useState<number>(1000); // Mock user balance in tokens
    const [purchasedItems, setPurchasedItems] = useState<string[]>([]);

    const openNotification = (type: 'success' | 'error', message: string, description: string) => {
        notification[type]({
            message: message,
            description: description,
        });
    };

    const handlePurchase = (itemId: number, price: number) => {
        if (balance >= price) {
            setBalance(balance - price);
            setPurchasedItems([...purchasedItems, itemId.toString()]);
            openNotification('success', 'Purchase Successful', `You have purchased the item. New balance: ${balance - price} tokens.`);
        } else {
            openNotification('error', 'Purchase Failed', 'Insufficient balance to purchase this item.');
        }
    };

    return (
        <div>
            <Title level={1}>Marketplace</Title>
            <Text>Your balance: {balance} tokens</Text>

            <Row gutter={16} style={{ marginTop: 20 }}>
                {marketplaceItems.map((item) => (
                    <Col key={item.id} span={8}>
                        <Card
                            hoverable
                            cover={<img alt={item.name} src={item.image} style={{ borderRadius: '8px 8px 0 0', width: '100%', height: 'auto' }} />}
                            actions={[
                                <Button
                                    type="primary"
                                    onClick={() => handlePurchase(item.id, item.price)}
                                    disabled={purchasedItems.includes(item.id.toString())}
                                >
                                    {purchasedItems.includes(item.id.toString()) ? 'Purchased' : `Buy for ${item.price} tokens`}
                                </Button>,
                            ]}
                        >
                            <Card.Meta
                                title={item.name}
                                description={<Text>{item.description}</Text>}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MarketplacePage;
