import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import "./globals.css";
import Uii from "@/providers/Uii";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutProvider from "@/providers/LayoutProvider";
import 'remixicon/fonts/remixicon.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Events by FF",
  description:
    "Bodacius World Changing Website. This website will bring revolutions to the world. Only this Website can save the earth from upcoming threats. Even Loki use this website to manage the threads of reality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-200 h-screen">
          <Uii>
            <LayoutProvider>{children}</LayoutProvider>
          </Uii>
        </body>
      </html>
    </ClerkProvider>
  );
}
