
import React from 'react';
import PageTransition from '../components/PageTransition';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-4 pb-12 md:pt-6 md:pb-16">
        <ContactSection isFullPage={true} />
      </div>
    </PageTransition>
  );
}
