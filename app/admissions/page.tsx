import { Metadata } from 'next';
import AdmissionsHero from '@/components/AdmissionsHero';
import AdmissionsSteps from '@/components/AdmissionsSteps';
import PreFooterCTA from '@/components/PreFooterCTA';
export const metadata: Metadata = {
  title: 'Admissions | Rodan School',
  description: 'Begin your adventure at Rodan. Join a community where learning is active, joyful, and deeply engaging.',
};

export default function Admissions() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <main className="flex-grow">
        <AdmissionsHero />
        <AdmissionsSteps />
        <PreFooterCTA />
      </main>
    </div>
  );
}