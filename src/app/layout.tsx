import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import "./globals.css";
import Script from "next/script";

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
        <Script
          src="https://cloud.umami.is/script.js"
          strategy="afterInteractive"
          data-website-id="__UMAMI_WEBSITE_ID__"
          data-do-not-track="true"
          data-performance="true"
          data-domains="parris-tech-services.github.io,app-factory-gamma.vercel.app"
          data-tag="AppFactory"
        />
      </body>
    </html>
  );
}
