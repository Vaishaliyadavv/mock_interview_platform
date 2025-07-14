import type {Metadata} from "next";
import {Mona_Sans} from "next/font/google";
import "./globals.css";
import React from "react";
import {Toaster} from "sonner";

const monaSans = Mona_Sans({
    variable: "--font-mona-sans", subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "MockMate",
    description: "An AI-powered app for practicing mock interviews with voice input and instant feedback — helping you prep smarter and speak with confidence.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en" className="dark">
    <body
        className={`${monaSans.className} antialiased pattern`}>
    {children}
    <Toaster/>
    </body>
    </html>);
}
