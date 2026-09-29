import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CtaBanner from '../components/CtaBanner';
import FormulasSection from '../components/FormulasSection';

export default function HomePage({ onSelectFormula, onNavigatePage }) {
  return (
    <div className="page-fade-in light-theme-page">
      {/* Hero with Light Theme, 3D 2027 Artwork & Key Visible Countdown (NO FORM) */}
      <Hero
        onExplore={() => onNavigatePage('about')}
        onNavigateTickets={() => onNavigatePage('tickets')}
      />

      {/* About Section Teaser */}
      <AboutSection onLearnMore={() => onNavigatePage('about')} />

      {/* Vibrant Purple/Indigo Gradient CTA Banner */}
      <CtaBanner onExplore={() => onNavigatePage('tickets')} />

      {/* Top 3 E-Commerce Formulas & Ticketing in FCFA */}
      <FormulasSection onSelectFormula={onSelectFormula} />
    </div>
  );
}
