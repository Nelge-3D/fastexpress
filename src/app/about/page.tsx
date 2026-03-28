import { Suspense } from 'react';
import AboutClient from '@/app/about/about-client';

export default function AboutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Chargement...</div>
      </div>
    }>
      <AboutClient />
    </Suspense>
  );
}