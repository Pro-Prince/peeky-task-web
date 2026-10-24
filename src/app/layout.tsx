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
  metadataBase: new URL("https://peeky-task.vercel.app"),
  title: "Peeky Task - Minimalist Floating Task Widget for Windows 10 & 11",
  description:
    "A minimalist, screen-edge floating daily task and to-do widget for Windows 10 and 11. 100% offline, zero telemetry, and always within reach.",
  keywords: [
    "peeky task",
    "todo app for windows",
    "floating task widget",
    "windows 11 tasks",
    "desktop todo list",
    "offline task manager",
    "minimalist to do list",
    "screen edge tasks",
    "always on top tasks",
    "windows to-do widget"
  ],
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "Peeky Task - Daily to-dos for Windows that live on the edge",
    description:
      "A minimalist floating daily task and to-do widget for Windows 10 & 11. Screen-edge docking, markdown checklists, and 100% offline privacy.",
    url: "https://peeky-task.vercel.app",
    siteName: "Peeky Task",
    images: [
      {
        url: "/media/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peeky Task - Floating daily task widget for Windows 10 & 11",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peeky Task - Daily to-dos for Windows that live on the edge",
    description:
      "A minimalist floating daily task and to-do widget for Windows 10 & 11. Screen-edge docking, markdown checklists, and 100% offline privacy.",
    images: ["/media/og-image.png"],
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
      <head>
        {/* Preload critical video & laptop mockup for instant playback and pre-rendered appearance */}
        <link rel="preload" href="/media/windows-laptop-front-view-mockup.png" as="image" />
        <link rel="preload" href="/media/screenshots/hero-video-first-frame.png" as="image" />
        <link rel="preload" href="/media/video/peeky-task-video.mp4" as="video" type="video/mp4" />
        {/* Preload key showcase screenshots */}
        <link rel="preload" href="/media/screenshots/app-view.png" as="image" />
        <link rel="preload" href="/media/screenshots/deck-view.png" as="image" />
        <link rel="preload" href="/media/screenshots/click-to-edit.png" as="image" />
        <link rel="preload" href="/media/screenshots/deck-peeked-3.png" as="image" />
        <link rel="preload" href="/media/screenshots/note-expanded-4.png" as="image" />
        <link rel="preload" href="/media/screenshots/manager-dark-2.png" as="image" />
        <link rel="preload" href="/media/screenshots/settings-2.png" as="image" />
        <link rel="preload" href="/media/screenshots/licence-2.png" as="image" />
      </head>
      <body className="bg-paper-bg text-ink flex min-h-full flex-col overflow-x-hidden font-sans">
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
