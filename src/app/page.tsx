"use client";

// Nerdy Portfolio Website für Joshua Bein
// Stil: Catppuccin + Orange Akzent (#ff9100) + dunkler Hintergrund (#232223)

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

export default function Portfolio() {
  const skills = [
    { name: "Windows & AD", level: 90 },
    { name: "Linux & Docker", level: 65 },
    { name: "React & Node.js", level: 50 },
    { name: "CI/CD & GitLab", level: 70 },
    { name: "IT-Support & Troubleshooting", level: 95 }
  ];

  const projects = [
    {
      title: "Portfolio Terminal Edition",
      description: "Ein nerdiges CLI-inspiriertes Portfolio mit Tailwind & React."
    },
    {
      title: "DevOps für GameDev",
      description: "CI/CD-Systeme mit GitLab & Docker für Indie-Studios eingerichtet."
    }
  ];

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    const response = await fetch("https://formspree.io/f/mrbqjqav", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      alert("🛰️ Nachricht erfolgreich übermittelt. Antwort kommt via Hyperchannel.");
      if (formRef.current) {
        formRef.current.reset();
      }
    } else {
      alert("🚨 Fehler beim Senden. Gremlin im Kabel?");
    }
  };

  return (
    <div className="min-h-screen bg-[#232223] text-white font-mono">
      <nav className="bg-[#1e1e1e] text-white shadow px-6 py-4 flex justify-between sticky top-0 z-50">
        <div className="text-xl font-bold text-orange-400">joshua.bein@localhost</div>
        <div className="space-x-4 text-sm">
          <a href="#about" className="hover:text-orange-400">Über_mich</a>
          <a href="#skills" className="hover:text-orange-400">Skills</a>
          <a href="#projects" className="hover:text-orange-400">Projekte</a>
          <a href="#contact" className="hover:text-orange-400">Kontakt</a>
        </div>
      </nav>

      <header className="text-center py-10 px-6">
        <h1 className="text-4xl font-bold">Joshua Bein</h1>
        <p className="text-orange-400">sudo apt-get install it-support</p>
        <p className="mt-2 text-sm text-gray-400">Code. Support. Coffee. Repeat.</p>
      </header>

      <section id="about" className="max-w-3xl mx-auto px-4">
        <Card className="bg-[#2f2f2f] mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-400">Über mich</h2>
            <p>
              👨‍💻 Fachinformatiker für Systemintegration mit Fokus auf Support, Netzwerke und DevOps.
              Nerd mit Herz für Technik, CLI und Benutzerfreundlichkeit.
            </p>
          </CardContent>
        </Card>

        <Card id="skills" className="bg-[#2f2f2f] mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-400">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <p className="text-sm mb-1">{skill.name}</p>
                  <Progress value={skill.level} className="bg-[#1e1e1e] text-[#ff9100]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card id="projects" className="bg-[#2f2f2f] mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-400">Projekte</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.title} className="border-b border-[#3a3a3a] pb-2">
                  <p className="text-lg font-medium text-white">{project.title}</p>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card id="contact" className="bg-[#2f2f2f]">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-400">Kontaktformular</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Dein Name" className="bg-[#1e1e1e] text-white placeholder-gray-400" required />
              <Input name="email" type="email" placeholder="Deine E-Mail" className="bg-[#1e1e1e] text-white placeholder-gray-400" required />
              <Textarea name="message" placeholder="Deine Nachricht" className="bg-[#1e1e1e] text-white placeholder-gray-400" required />
              <Button type="submit" className="bg-[#ff9100] text-black hover:bg-orange-500">Senden 🚀</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
