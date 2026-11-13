
import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import SkillsSection from '../components/SkillsSection';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <PageTransition>
      <main className="w-full">
        {/* 1. Main hero + short introduction */}
        <Hero />

        {/* 2. Skills and technologies */}
        <SkillsSection />

        {/* 3. Experience and education */}
        <Timeline />
      </main>
    </PageTransition>
  );
}
