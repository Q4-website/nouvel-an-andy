import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HomeHighlights from '../components/HomeHighlights';
import HomeScheduleTeaser from '../components/HomeScheduleTeaser';
import CtaBanner from '../components/CtaBanner';
import FormulasSection from '../components/FormulasSection';
import HomeReviews from '../components/HomeReviews';
import HomeFaq from '../components/HomeFaq';

export default function HomePage({ onSelectFormula, onNavigatePage }) {
  return (
    <div className="page-fade-in light-theme-page">
      {/* Hero en thème clair avec compte à rebours clé et image 3D complète */}
      <Hero
        onExplore={() => onNavigatePage('about')}
        onNavigateTickets={() => onNavigatePage('tickets')}
      />

      {/* Points forts de l'expérience */}
      <HomeHighlights />

      {/* Présentation du Réveillon */}
      <AboutSection onLearnMore={() => onNavigatePage('about')} />

      {/* Déroulement de la soirée express */}
      <HomeScheduleTeaser onNavigateProgramme={() => onNavigatePage('programme')} />

      {/* Bannière Call-to-action */}
      <CtaBanner onExplore={() => onNavigatePage('tickets')} />

      {/* Formules de billetterie en FCFA */}
      <FormulasSection onSelectFormula={onSelectFormula} />

      {/* Avis et Témoignages */}
      <HomeReviews />

      {/* Questions Fréquentes */}
      <HomeFaq />
    </div>
  );
}
