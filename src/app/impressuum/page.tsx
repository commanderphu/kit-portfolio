"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";


export default function Impressum() {
    const [isBooting, setIsBooting] = useState(true);

    // Bootscreen für 3 Sekunden anzeigen
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBooting(false);
        }, 500); // Bootscreen für 3 Sekunden
        return () => clearTimeout(timer);
    }, []);

    if (isBooting) {
        return (
            <div className="min-h-screen text-orange-400 font-mono flex flex-col justify-center items-center text-center px-4">
                <p className="text-sm md:text-lg animate-pulse">[BOOT] Initialisiere Impressum...</p>
                <p className="mt-2 text-gray-400">› Lade Module: [██▒▒▒▒▒▒▒▒]</p>
                <p className="mt-2 text-gray-400">› Authentifiziere User: joshua.kuhrau</p>
                <p className="mt-2 text-gray-400">› Impressum geladen ✓</p>
                <p className="mt-4">system@kuhrau:~$ <span className="text-white">startx</span></p>
            </div>
        );
    }

    return (
        <div className="flex flex-1 items-center justify-center">
            <Card className="bg-[#2f2f2f]/90 w-full max-w-md">
                <CardContent className="p-6">
                    <h1 className="text-2xl font-bold mb-4 text-orange-400 text-center">Impressum</h1>
                    <p className="text-gray-300 mb-6 text-center">curl https://einfachnurphu.io/impressum</p>
                    <ul className="space-y-3">
                        <li>Joshua Phu Kuhrau</li>
                        <li>Adresse: Dietzstr.1,56073 Koblenz </li>
                        <li>E-Mail:<a href="mailto:joshua@phuonline.de" className="text-orange-300 hover:text-orange-400"> </a></li>
                        <li>Telefon: 0162 265424</li>
                        <li>USt-IdNr.: DE123456789</li>
                        <li>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Joshua Phu Kuhrau</li>
                        <li>Haftungsausschluss: Alle Inhalte wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Haftung übernommen.</li>
                        <li>Externe Links: Für den Inhalt externer Links wird keine Haftung übernommen. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</li>
                        <li>Urheberrecht: Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</li>
                        <li>Datenschutz: Personenbezogene Daten werden nur im Rahmen der gesetzlichen Bestimmungen erhoben und verarbeitet. Eine Weitergabe an Dritte erfolgt nicht ohne ausdrückliche Zustimmung.</li>
                        <li>Änderungen: Das Impressum kann jederzeit ohne vorherige Ankündigung geändert werden. Es gilt die jeweils aktuelle Version auf dieser Seite.</li>
                    </ul>
                    <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Joshua Phu Kuhrau</p>
                    <p className="text-sm text-gray-500">Letzte Aktualisierung: {new Date().toLocaleDateString()}</p>
                </CardContent>
            </Card>
        </div>
    );
}   
                        