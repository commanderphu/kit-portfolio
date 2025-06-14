"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [booting, setBooting] = useState(false);
  const [finished, setFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    audioRef.current = new Audio("/boot.mp3");
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch(console.error);
    setBooting(true);

    setTimeout(() => {
      setBooting(false);
      setFinished(true);
    }, 3000);
  };

  if (!booting && !finished) {
    return (
      <div className="min-h-screen 
       text-orange-400 font-mono flex flex-col justify-center items-center text-center px-4">
        <p className="mb-6">Bereit zum Starten?</p>
        <button
          onClick={handleStart}
          className="px-6 py-2 bg-orange-400 text-black rounded hover:bg-orange-500 transition"
        >
          Init Nerd Environment 🚀
        </button>
      </div>
    );
  }

  if (booting) {
    return (
      <div className="min-h-screen  text-orange-400 font-mono flex flex-col justify-center items-center text-center px-4">
        <p className="text-sm md:text-lg animate-pulse">[BOOT] Initialisiere Nerd Environment...</p>
        <p className="mt-2 text-gray-400">› Lade Module: [██▒▒▒▒▒▒▒▒]</p>
        <p className="mt-2 text-gray-400">› Authentifiziere User: joshua.bein</p>
        <p className="mt-2 text-gray-400">› Nerd Font geladen ✓</p>
        <p className="mt-4">system@bein:~$ <span className="text-white">startx</span></p>
      </div>
    );
  }

  // finale Ansicht nach Bootscreen
  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center text-center p-8 font-mono">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-400">Willkommen bei Joshua Bein</h1>
      <p className="text-gray-300 mb-10 max-w-xl">
        Fachinformatiker, Nerd, Systemtüftler – hier findest du mein Portfolio, Projekte und Kontaktmöglichkeiten.
      </p>
      <Link href="/portfolio">
        <Button className="bg-[#ff9100] text-black hover:bg-orange-500 px-6 py-3 text-lg">Zum Portfolio 🚀</Button>
      </Link>
    </div>
  );
}
