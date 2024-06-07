import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "./Providers";

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

          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
        </Providers>

      </body>
    </html>
  );
}
