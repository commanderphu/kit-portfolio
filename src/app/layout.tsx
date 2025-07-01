import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";


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
  description: "Dein Freund und Helfer in der digitalen Welt",

};

const Links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/linktree", label: "Linktree" },
];

const Names = [
  { name:"Joshua Phu", surname:"Kuhrau", nickname:"einfachnurphu", initials:"JPK" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-[#232223] bg-[url('/background/code-pattern.png')] bg-cover bg-fixed text-white font-['FiraCode Nerd Font',monospace]`}
      >
          <nav className="bg-[#1e1e1e]/80 backdrop-blur text-white shadow px-6 py-4 flex flex-wrap justify-between items-center sticky top-0 z-50">
            <div className="text-xl font-bold text-orange-400">einfachnurphu@localhost</div>
            <div className="space-x-4 text-sm mt-2 md:mt-0">
              {Links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))} 
            </div>
        
          </nav>
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <footer className="mt-2 py-5 text-center text-sm text-gray-500 bg-[#1e1e1e]/80">
            <p>© {new Date().getFullYear()} | {Names.map((name) =>
            (`${name.initials} -  ${name.name} ${name.surname} ` )
            )}   </p>
            <p>
              <Link href="/impressum" className="text-orange-400 hover:underline">
                Impressum | Datenschutz
              </Link>
            </p>
          </footer>
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}
