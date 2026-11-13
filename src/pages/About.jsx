
import React from 'react';
import PageTransition from '../components/PageTransition';
import AboutSection from '../components/AboutSection';

export default function About() {
  return (
    <PageTransition>
      <div className="pt-4 pb-12 md:pt-6 md:pb-16">
        <AboutSection isFullPage={true} />
      </div>
    </PageTransition>
  );
}
