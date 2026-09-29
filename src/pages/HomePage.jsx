import React from 'react';
import Hero from '../components/Hero';
import EditorialStorySection from '../components/EditorialStorySection';
import ParallaxGalaBanner from '../components/ParallaxGalaBanner';
import EditorialGastronomySection from '../components/EditorialGastronomySection';
import EditorialFormulasList from '../components/EditorialFormulasList';
import ParallaxBookingBanner from '../components/ParallaxBookingBanner';
import HomeFaq from '../components/HomeFaq';

export default function HomePage({ onSelectFormula, onNavigatePage }) {
  return (
    <div className="page-fade-in light-theme-page">
      {/* 1. Hero : Grand compte à rebours clé et image 2027 au complet */}
      <Hero
        onExplore={() => onNavigatePage('about')}
        onNavigateTickets={() => onNavigatePage('tickets')}
      />

      {/* 2. Section Éditoriale 1 : Grande photo de célébration & récit de la nuit (sans cards) */}
      <EditorialStorySection onLearnMore={() => onNavigatePage('about')} />

      {/* 3. Section Parallax 1 : Feu d'artifice & embrasement du ciel à Cotonou */}
      <ParallaxGalaBanner onExploreTickets={() => onNavigatePage('tickets')} />

      {/* 4. Section Éditoriale 2 : Grande photo Champagne & Haute Gastronomie (sans cards) */}
      <EditorialGastronomySection onNavigateProgramme={() => onNavigatePage('programme')} />

      {/* 5. Liste Éditoriale des Formules : Présentation horizontale luxury en FCFA (sans cards) */}
      <EditorialFormulasList onSelectFormula={onSelectFormula} />

      {/* 6. Section Parallax 2 : Ambiance festive & Réservation VIP */}
      <ParallaxBookingBanner onExploreTickets={() => onNavigatePage('tickets')} />

      {/* 7. Questions Fréquentes */}
      <HomeFaq />
    </div>
  );
}
