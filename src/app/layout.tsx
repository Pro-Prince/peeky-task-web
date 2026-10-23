import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ScrollRevealProvider } from "@/components/ScrollRevealProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const excalifont = localFont({
  src: "../../public/fonts/Excalifont_Regular.woff2",
  variable: "--font-excalifont",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peekytask.in"),
  title: "Peeky Task - Minimalist Floating Task Widget for Windows 10 and 11",
  description: "A fast, distraction-free daily task app for Windows that lives right on the edge of your screen. 100% offline, zero telemetry, and never clutters your workflow.",
  keywords: [
    "peeky task",
    "todo app for windows",
    "floating task widget",
    "windows 11 tasks",
    "desktop todo list",
    "offline task manager",
    "minimalist to do list",
    "always on top tasks"
  ],
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "Peeky Task - Floating daily task widget for Windows",
    description: "Capture your top priorities and keep them in view. Lives quietly on the edge of your screen.",
    url: "https://peekytask.in",
    siteName: "Peeky Task",
    images: [{ url: "/media/og-image.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${excalifont.variable} h-full antialiased`}
    >
      <body className="bg-paper-bg text-ink flex min-h-full flex-col overflow-x-hidden font-sans">
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
