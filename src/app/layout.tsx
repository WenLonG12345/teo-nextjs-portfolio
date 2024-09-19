import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

import "./styles/app.css";
import clsx from "clsx";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          outfit.className,
          "dark:bg-[#1b202b] dark:text-[#A0AEC0]"
        )}
      >
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Header />
          <div className="min-h-[calc(100svh-100px)]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
