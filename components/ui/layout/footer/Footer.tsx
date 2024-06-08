"use client";

import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
    return (
        <AntFooter style={{ textAlign: 'center', padding: '10px' }}>
            <div>
                <img src="/logos/sponsor1.png" alt="Sponsor 1" style={{ height: 40, margin: '0 10px' }} />
                <img src="/logos/sponsor2.png" alt="Sponsor 2" style={{ height: 40, margin: '0 10px' }} />
                {/* Add more sponsor logos as needed */}
            </div>
            <div style={{ marginTop: '10px' }}>
                © 2024 Esports Website. All rights reserved.
            </div>
        </AntFooter>
    );
};

export default Footer;
