"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
export default function Kontakt() {
  const formRef = useRef<HTMLFormElement>(null);
    const [isBooting, setIsBooting] = useState(true);
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
      formRef.current.reset();
    } else {
      alert("🚨 Fehler beim Senden. Gremlin im Kabel?");
    }
  };

  
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
            <p className="text-sm md:text-lg animate-pulse">[BOOT] Initialisiere Kontaktformular...</p>
            <p className="mt-2 text-gray-400">› Lade Module: [██▒▒▒▒▒▒▒▒]</p>
            <p className="mt-2 text-gray-400">› Authentifiziere User: joshua.bein</p>
            <p className="mt-2 text-gray-400">› Kontaktformular geladen ✓</p>
            <p className="mt-4">system@bein:~$ <span className="text-white">startx</span></p>
      </div>
      );
  }

return (
    <div className="flex min-h-screen items-center justify-center">
        <Card id="contact" className="bg-[#2f2f2f]/90 w-full max-w-md">
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-orange-400 text-center">Kontaktformular</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                    <Input name="name" placeholder="Dein Name" className="bg-[#1e1e1e] text-white placeholder-gray-400" required />
                    <Input name="email" type="email" placeholder="Deine E-Mail" className="bg-[#1e1e1e] text-white placeholder-gray-400" required />
                    <Textarea name="message" placeholder="Deine Nachricht" className="bg-[#1e1e1e] text-white placeholder-gray-400" required />
                    <Button type="submit" className="bg-[#ff9100] text-black hover:bg-orange-500">Senden 🚀</Button>
                </form>
            </CardContent>
        </Card>
    </div>
);
}