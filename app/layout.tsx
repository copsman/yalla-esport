import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import NavbarHeader from "@/components/ui/layout/navbar/NavbarHeader";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Yalla-Esport",
  description: "Yalla-Esport hackathon project",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Providers>
          <main className="purple-dark min-h-screen flex flex-col items-center text-foreground bg-background">
            <NavbarHeader />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
