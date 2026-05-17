import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css'; // Ensure your tailwind config is active

export const metadata: Metadata = {
  title: 'Rodan School | Empowering Minds',
  description: 'A dynamic, whole-child educational environment in Lagos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        {/* Main acts as the semantic wrapper for the page content, pushing the footer down */}
        <main className="flex-grow pt-20"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}