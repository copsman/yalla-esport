"use client";

import { Table, Typography } from 'antd';

const { Title } = Typography;

const columns = [
    {
        title: 'Match',
        dataIndex: 'match',
        key: 'match',
        render: (text: any) => <span style={{ color: '#333', fontFamily: 'Roboto, sans-serif' }}>{text}</span>,
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: (text: any) => <span style={{ color: '#666', fontFamily: 'Roboto, sans-serif' }}>{text}</span>,
    },
    {
        title: 'Teams',
        dataIndex: 'teams',
        key: 'teams',
        render: (teams: any) => (
            <span style={{ color: '#333', fontFamily: 'Roboto, sans-serif' }}>
                {teams.map((team: any, index: any) => (
                    <span key={index} style={{ marginRight: '10px' }}>
                        <img src={team.icon} alt={team.name} style={{ width: '24px', height: '24px', marginRight: '5px' }} />
                        {team.name}
                        {index === 0 && <span style={{ margin: '0 10px', color: '#ff0000' }}>VS</span>}
                    </span>
                ))}
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        match: 'ESL Pro League Finals',
        date: '2024-07-15',
        teams: [
            { name: 'Natus Vincere', icon: 'https://static.hltv.org/images/team/logo/4608' },
            { name: 'G2 Esports', icon: 'https://static.hltv.org/images/team/logo/5995' },
        ],
    },
    {
        key: '2',
        match: 'IEM Katowice Semis',
        date: '2024-06-10',
        teams: [
            { name: 'Astralis', icon: 'https://static.hltv.org/images/team/logo/6665' },
            { name: 'Team Vitality', icon: 'https://static.hltv.org/images/team/logo/9565' },
        ],
    },
    {
        key: '3',
        match: 'BLAST Premier Quarters',
        date: '2024-05-05',
        teams: [
            { name: 'FaZe Clan', icon: 'https://static.hltv.org/images/team/logo/6667' },
            { name: 'Ninjas in Pyjamas', icon: 'https://static.hltv.org/images/team/logo/4411' },
        ],
    },
];

const UpcomingMatches = () => (
    <div style={{ marginTop: '40px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <Title level={2} style={{ color: '#333', marginBottom: '20px', fontFamily: 'Roboto, sans-serif' }}>Upcoming Matches</Title>
        <Table columns={columns} dataSource={data} pagination={false} style={{ color: '#333' }} />
    </div>
);

export default UpcomingMatches;
