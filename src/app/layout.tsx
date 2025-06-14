import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Phu Bein | Dein IT-Held",
  description: "Dein Freund und Helfer in der digitalen Welt"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#232223] bg-[url('/background/code-pattern.png')] bg-cover bg-fixed text-white font-['FiraCode Nerd Font',monospace]`}
      >
          <nav className="bg-[#1e1e1e]/80 backdrop-blur text-white shadow px-6 py-4 flex flex-wrap justify-between items-center sticky top-0 z-50">
            <div className="text-xl font-bold text-orange-400">einfachnurphu@localhost</div>
            <div className="space-x-4 text-sm mt-2 md:mt-0">
              <a href="/" className="hover:text-orange-400">Home</a>
              <a href="/portfolio" className="hover:text-orange-400">Portfolio</a>
              <a href="/kontakt" className="hover:text-orange-400">Kontakt</a>
              <a href="https://linktr.ee/einfachnurphu" className="hover:text-orange-400">Linktree_Socials</a>
            </div>
        
          </nav>
          {children}
          <footer className="mt-10 py-6 text-center text-sm text-gray-500 bg-[#1e1e1e]/80">
            <p>© {new Date().getFullYear()} JPB - Joshua Phu Bein</p>
            <p>
              <Link href="/impressum" className="text-orange-400 hover:underline">
                Impressum | Datenschutz
              </Link>
            </p>
          </footer>
      </body>
    </html>
  );
}
