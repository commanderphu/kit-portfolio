"use client";

import { useEffect, useState } from "react";

const logSteps = [
  "› Initialisiere Nerd Font...",
  "› Lade Komponenten: React, Next.js, Docker",
  "› Verbinde mit Terminal-Interface...",
  "› Git Repos synchronisieren...",
  "› Nerd-Wallpaper anwenden...",
  "› Startbefehl wird vorbereitet...",
  "› Finalisiere Setup...",
  "✓ System bereit.",
];

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const barLength = 24;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + Math.floor(Math.random() * 10) + 5, 100);
      });

      setLogIndex((prev) => {
        if (prev < logSteps.length - 1) return prev + 1;
        return prev;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const filled = Math.floor((progress / 100) * barLength);
  const bar = `[${"█".repeat(filled)}${"░".repeat(barLength - filled)}] ${progress}%`;

  return (
    <div className="min-h-screen bg-[#232223] text-orange-400 font-mono flex flex-col items-center justify-center text-center p-6">
      <p className="text-lg animate-pulse mb-4">[BOOT] Initialisiere Nerd Environment...</p>

      <pre className="text-md text-gray-300 tracking-widest mb-2">{bar}</pre>

      <div className="text-sm text-gray-400">
        <p>{logSteps[logIndex]}</p>
      </div>

      <p className="mt-6 text-sm text-gray-600">system@bein:~$ please_wait --nerd</p>
    </div>
  );
}
