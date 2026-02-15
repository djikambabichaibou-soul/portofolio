import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/layout/Header";
import Preloader from "@/components/ui/Preloader";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
});

// Assuming we might need to use a CDN or local file for Clash Display if not in Google Fonts
// For now, I will use a placeholder or localFont strategy.
// Since I cannot download files easily from external unexpected sources, I will simulate it 
// or use a Google Font alternative 'Outfit' which is similar, OR assume the user has the font.
// Let's use 'Outfit' as a high-quality alternative if Clash isn't available, but I'll try to define it locally 
// hoping we can add the file later or link it. 
// Actually, 'Outfit' is on Google Fonts and is very premium/modern.
import { Outfit } from "next/font/google";
const clash = Outfit({ subsets: ["latin"], variable: "--font-clash" }); // Using Outfit as Clash Display proxy for now

export const metadata: Metadata = {
    title: "Digital Architect | High-End Portfolio",
    description: "Digital Architect & Strategic Software Engineer specializing in premium high-end experiences.",
    keywords: ["Portfolio", "Software Engineer", "Digital Architect", "Web Development", "Next.js", "React"],
    authors: [{ name: "Digital Architect" }],
    openGraph: {
        title: "Digital Architect | Portfolio",
        description: "High-end digital experiences and strategic software engineering.",
        url: "https://your-portfolio-url.com",
        siteName: "Digital Architect Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Architect | Portfolio",
        description: "High-end digital experiences and strategic software engineering.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    themeColor: "#050505",
    width: "device-width",
    initialScale: 1,
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetbrains.variable} ${clash.variable} font-sans bg-obsidian text-off-white antialiased`}
            >
                <LanguageProvider>
                    <Preloader />
                    <SmoothScroll>
                        <Header />

                        {children}
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}
