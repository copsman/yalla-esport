import { GeistSans } from "geist/font/sans";
import "./globals.css";
import './antd-overrides.css';
import { Providers } from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import NavbarHeader from "@/components/ui/layout/navbar/NavbarHeader";
import Footer from "@/components/ui/layout/footer/Footer";
import Header from "@/components/ui/layout/Header";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Yalla-Esport",
  description: "Yalla-Esport hackathon project",
  image: "/Compass-Camel-01.webp",
};


const layoutStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  minHeight: '100vh', // Ensure full height for the layout
};

const mainStyle = {
  flex: 1,
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center', // Center content horizontally
  justifyContent: 'center', // Center content vertically
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Layout>
          <Header />
          <Content style={{ padding: '20px', minHeight: '80vh' }}>
            {children}
          </Content>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
