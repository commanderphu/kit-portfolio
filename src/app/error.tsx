"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function ErrorPage() { 
        return (
        <div className="flex min-h-screen items-center justify-center">
        <Card className="bg-[#2f2f2f]/90 w-full max-w-md">
            <CardContent className="p-6">
            <h1 className="text-xl font-semibold mb-4 text-orange-400 text-center">500 - Interner Serverfehler</h1>
            <p className="text-gray-300 mb-6 text-center">Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später erneut.</p>
            <Link href="/portfolio">
                <Button className="bg-[#ff9100] text-black hover:bg-orange-500 w-full">Zurück zur Startseite 🚀</Button>
            </Link>
            </CardContent>
        </Card>
        </div>
    );
}
