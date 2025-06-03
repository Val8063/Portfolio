import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rueda Valentin | Portfolio Futuriste",
  description:
    "Portfolio futuriste de Rueda Valentin, étudiant à Epitech et développeur web passionné",
  keywords: [
    "portfolio",
    "développeur",
    "web",
    "Epitech",
    "React",
    "Next.js",
    "futuriste",
  ],
  authors: [{ name: "Rueda Valentin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} font-sans antialiased overflow-x-hidden w-full min-h-screen scrollbar-thin scrollbar-track-background scrollbar-thumb-primary/50 hover:scrollbar-thumb-primary`}
        style={{ cursor: 'auto' }} // Restaurer le curseur par défaut pour éviter des problèmes sur mobile
      >
        {/* Effet de scanlines pour l'ambiance futuriste */}
        <div className="scanlines"></div>
        
        {/* Utilisation du composant ClientOnly pour éviter les erreurs d'hydratation */}
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
