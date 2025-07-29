"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [booting, setBooting] = useState(false);
  const [finished, setFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(console.error);
    }
    setBooting(true);

    setTimeout(() => {
      setBooting(false);
      setFinished(true);
    }, 3000);
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-4 font-mono bg-transparent">
      <audio ref={audioRef} src="/boot.mp3" preload="auto" />
      {!booting && !finished && (
        <>
          <p className="mb-6 text-orange-400">Bereit zum Starten?</p>
          <button
            onClick={handleStart}
            className="px-6 py-2 bg-orange-400 text-black rounded hover:bg-orange-500 transition"
          >
            Init Nerd Environment 🚀
          </button>
        </>
      )}
      {booting && (
        <>
          <p className="text-sm md:text-lg animate-pulse text-orange-400">[BOOT] Initialisiere Nerd Environment...</p>
          <p className="mt-2 text-gray-400">› Lade Module: [██▒▒▒▒▒▒▒▒]</p>
          <p className="mt-2 text-gray-400">› Authentifiziere User: joshua.kuhrau</p>
          <p className="mt-2 text-gray-400">› Nerd Font geladen ✓</p>
          <p className="mt-4 text-orange-400">system@kuhrau:~$ <span className="text-white">startx</span></p>
        </>
      )}
      {finished && (
        <>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-400">Willkommen bei Joshua Kuhrau</h1>
          <p className="text-gray-300 mb-10 max-w-xl">
            Fachinformatiker, Nerd, Systemtüftler – hier findest du mein Portfolio, Projekte und Kontaktmöglichkeiten.
          </p>
          <Link href="/portfolio">
            <Button className="bg-[#ff9100] text-black hover:bg-orange-500 px-6 py-3 text-lg">Zum Portfolio 🚀</Button>
          </Link>
        </>
      )}
    </div>
  );
}
