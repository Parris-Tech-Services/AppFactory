import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "AppFactory",
  description: "A guided AI app-building command centre for safe project planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <AppShell>{children}</AppShell>
        <script
          src="https://cdn.jsdelivr.net/gh/joshualparris/JoshHub@ebb0d17495c92d3ce09df1fd1bdb5d4c2056914d/public/podcast-launcher-v3.js"
          data-topics="software"
          data-label="🎧 Listen to a different software-building podcast"
          data-launcher-label="🎧 Podcasts"
          defer
        />
      </body>
    </html>
  );
}