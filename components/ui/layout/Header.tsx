"use client";

import { useEffect, useState } from 'react';
import { Menu, Dropdown, Avatar, Typography } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Header: React.FC = () => {
    const pathname = usePathname();
    const [current, setCurrent] = useState<string>(pathname);
    const [balance, setBalance] = useState<number>(1000); // Mock user token balance

    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

    const menu = (
        <Menu>
            <Menu.Item key="balance">
                <Text>Balance: {balance} tokens</Text>
            </Menu.Item>
            <Menu.Item key="logout">
                <a href="/logout">Logout</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div style={headerStyle}>
            <div style={logoContainerStyle}>
                <Avatar src="/Compass-Camel-01.webp" alt="Logo" style={logoStyle} />
                {/* <img src="/Compass-Camel-01.webp" alt="Logo" style={logoStyle} /> */}
                <Text style={titleStyle}>Desert Aurora</Text>
            </div>
            <Menu theme="dark" mode="horizontal" selectedKeys={[current]} style={menuStyle}>
                <Menu.Item key="/" onClick={() => setCurrent('/')}>
                    <Link href="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="/teams" onClick={() => setCurrent('/teams')}>
                    <Link href="/teams">Teams</Link>
                </Menu.Item>
                <Menu.Item key="/players" onClick={() => setCurrent('/players')}>
                    <Link href="/players">Players</Link>
                </Menu.Item>
                <Menu.Item key="/live" onClick={() => setCurrent('/live')}>
                    <Link href="/live">Live</Link>
                </Menu.Item>
                <Menu.Item key="/marketplace" onClick={() => setCurrent('/marketplace')}>
                    <Link href="/marketplace">Marketplace</Link>
                </Menu.Item>
                <Menu.Item key="/tickets" onClick={() => setCurrent('/tickets')}>
                    <Link href="/tickets">Buy Tickets</Link>
                </Menu.Item>
            </Menu>
            <Dropdown overlay={menu} trigger={['click']}>
                <Avatar style={avatarStyle} icon={<UserOutlined />} />
            </Dropdown>
        </div>
    );
};

export default Header;

// CSS-in-JS styles for header components
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#001529',
    padding: '0 20px',
};

const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
};

const logoStyle = {
    marginRight: '10px',
    borderRadius: '50%',
};

const titleStyle = {
    color: 'white',
    fontSize: '20px',
};

const menuStyle = {
    flex: 1,
    justifyContent: 'center',
};

const avatarStyle = {
    cursor: 'pointer',
};
