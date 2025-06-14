"use client";

// Nerdy Portfolio Website für Joshua Bein – jetzt mit Code-Notebook-Background & mobile optimiert

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FaWindows, FaLinux, FaReact, FaGitAlt, FaTools } from "react-icons/fa";


export default function Portfolio() {
    const [isBooting, setIsBooting] = useState(true);

      // Bootscreen für 3 Sekunden anzeigen
     useEffect(() => {
          const timer = setTimeout(() => {
              setIsBooting(false);
          }
          , 500); // Bootscreen für 3 Sekunden
          return () => clearTimeout(timer);
      }, []);
  if (isBooting) {
      return (
      <div className="min-h-screen text-orange-400 font-mono flex flex-col justify-center items-center text-center px-4">
            <p className="text-sm md:text-lg animate-pulse">[BOOT] Initialisiere Portfolio...</p>
            <p className="mt-2 text-gray-400">› Lade Module: [██▒▒▒▒▒▒▒▒]</p>
            <p className="mt-2 text-gray-400">› Authentifiziere User: joshua.bein</p>
            <p className="mt-2 text-gray-400">› Portfolio geladen ✓</p>
            <p className="mt-4">system@bein:~$ <span className="text-white">startx</span></p>
      </div>
      );
  }
  
  const skills = [
    { name: "Windows & AD", level: 90, icon: <FaWindows className="text-blue-400" /> },
    { name: "Linux & Docker", level: 65, icon: <FaLinux className="text-yellow-400" /> },
    { name: "React & Node.js", level: 50, icon: <FaReact className="text-cyan-400" /> },
    { name: "CI/CD & GitLab", level: 70, icon: <FaGitAlt className="text-orange-400" /> },
    { name: "IT-Support & Troubleshooting", level: 95, icon: <FaTools className="text-gray-300" /> }
  ];

  const projects = [
    {
      title: "Portfolio Terminal Edition",
      description: "Ein nerdiges CLI-inspiriertes Portfolio mit Tailwind & React.",
      link: "https://github.com/commanderphu/kit-portfolio"
    },
    {
      title: "Manga Dictionary Frontend",
      description: "Eine Manga Bibliothek Web-App zur Verwaltung der Mangas",
      link: "https://github.com/commanderphu/manga-inventory-38"
    },
    {
      title: "DevOps für GameDev",
      description: "CI/CD-Systeme mit GitLab & Docker für Indie-Studios eingerichtet."
    }
  ];

  return (
    <>
      <header className="text-center py-10 px-6 bg-[#232223]/80">
        <h1 className="text-4xl font-bold">Joshua Phu Bein</h1>
        <p className="text-orange-400">sudo apt-get install it-support</p>
        <p className="mt-2 text-sm text-gray-400">Code. Support. Coffee. Repeat.</p>
      </header>

      <section id="about" className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#2f2f2f]/90 flex items-center justify-center">
          <CardContent className="p-6 text-center">
            <img
              src="/logo.png"
              alt="Joshua Phu Bein"
              className="w-28 h-28 rounded-full mx-auto mb-4 border border-orange-400"
            />
            <p className="text-sm text-gray-400">Profilbild – nerd approved</p>
          </CardContent>
        </Card>

        <Card className="bg-[#2f2f2f]/90">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-400">Über mich</h2>
            <p>
              👨‍💻 Fachinformatiker für Systemintegration mit Fokus auf Support, Netzwerke und DevOps.
              Nerd mit Herz für Technik, CLI und Benutzerfreundlichkeit.
            </p>
          </CardContent>
        </Card>

        <Card id="skills" className="bg-[#2f2f2f]/90">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-400">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-3">
                  <div className="text-lg">{skill.icon}</div>
                  <div className="w-full">
                    <p className="text-sm mb-1">{skill.name}</p>
                    <div className="h-2 w-full bg-[#1e1e1e] rounded">
                      <div
                        className="h-2 rounded bg-[#ff9100]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card id="projects" className="bg-[#2f2f2f]/90">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-400">Projekte</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.title} className="border-b border-[#3a3a3a] pb-2">
                  <a href={project.link}><p className="text-lg font-medium text-white">{project.title}</p></a>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>


      </section>
    </>
  );
}
