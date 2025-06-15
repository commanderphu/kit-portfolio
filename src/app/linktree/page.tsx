"use strict";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaFacebook,FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa"; // Importiere die benötigten Icons
import { FaXTwitter } from "react-icons/fa6"; // Importiere Twitter Icon aus FontAwesome 6
export default function Linktree() {
    const USERNAME = process.env.USERNAME
    const DISCORD_USER_ID = process.env.DISCORD_USER_ID; 
const links = [
    { name:"Facebook", url: `https://www.facebook.com/${USERNAME}`, icon: <FaFacebook className="inline-block mr-2 text-[#3360ff]" /> },
    { name: "GitHub", url: `https://github.com/${USERNAME}` , icon: <FaGithub className="inline-block mr-2 text-[#fafbfc]" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/joshuaphu", icon: <FaLinkedin className="inline-block mr-2 text-[#3360ff]" /> },
    { name: "YouTube", url: `https://www.youtube.com/@${USERNAME}`, icon: <FaYoutube className="inline-block mr-2 text-[#ee0f0f]" /> },
    { name: "Twitter", url: "https://twitter.com/einfachnurphu", icon: <FaXTwitter className="inline-block mr-2 text-[#fff]" /> },
    { name: "Instagram", url: "https://www.instagram.com/einfachnurphu", icon: <FaInstagram className="inline-block mr-2 text-[#ff0069]" /> },
    { name: "Discord", url: `https://discord.com/users/${DISCORD_USER_ID}`, icon: <FaDiscord className="inline-block mr-2 text-[#5865F2]" /> }
];

return (
    <div className="flex-1 flex items-center justify-center  text-white p-4">
        <Card className="bg-[#2f2f2f] w-full max-w-md">
            <CardContent className="p-6">
                <h1 className="text-2xl font-bold mb-4 text-orange-400 text-center">LinkTree</h1>
                <p className="text-gray-300 mb-6 text-center">curl https://einfachnurphu.io/$link</p>
                <ul className="space-y-3">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-orange-300 hover:text-orange-400 transition-colors text-center p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#2f2f2f] border border-transparent hover:border-orange-400" 
                            >
                               {link.icon} {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
);
}