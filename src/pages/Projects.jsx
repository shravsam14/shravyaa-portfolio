
import React from 'react';
import PageTransition from '../components/PageTransition';
import ProjectsSection from '../components/ProjectsSection';

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-6 pb-10 md:pt-16 md:pb-24">
        <ProjectsSection isFullPage={true} />
      </div>
    </PageTransition>
  );
}
