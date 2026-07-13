import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Plus_Jakarta_Sans, Lexend } from "next/font/google";
import './globals.css'; // Ensure your tailwind config is active

export const metadata: Metadata = {
  title: 'Rodan School | Empowering Minds',
  description: 'A dynamic, whole-child educational environment in Lagos.',
};

// 1. Configure Plus Jakarta Sans
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// 2. Configure Lexend
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-lexend",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"className={`${plusJakarta.variable} ${lexend.variable}`}>
      <body className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        {/* Main acts as the semantic wrapper for the page content, pushing the footer down */}
        <main className="flex-grow mt-20"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}