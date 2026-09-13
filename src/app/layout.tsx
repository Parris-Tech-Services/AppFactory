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
          src="https://cdn.jsdelivr.net/gh/joshualparris/JoshHub@7b6ec3907b27924dbe1d64c9ece4e439e6de8de7/public/podcast-dock.js"
          data-topics="software"
          data-label="🎧 Listen to a different software-building podcast"
          defer
        />
      </body>
    </html>
  );
}
