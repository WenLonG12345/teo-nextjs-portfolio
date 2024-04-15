import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "./globals.css";
import Footer from "@/components/Footer";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teo | Front End Engineer",
  description:
    "Dive into Teo's world—a Frontend Engineer crafting seamless user experiences. With expertise in Next.js, React, Redux, and Tailwind CSS, Teo delivers captivating interfaces. Explore Teo's projects and mastery in JavaScript and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={josefinSans.className}>
        <MantineProvider>
          <NavBar />
          <div className="min-h-[calc(100svh-100px)]">{children}</div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
