import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner({ onExplore }) {
  return (
    <section className="light-cta-banner">
      <div className="cta-banner-content">
        <h2 className="cta-banner-heading">
          Prêt à accueillir 2027 avec éclat ?
        </h2>
        <p className="cta-banner-text">
          Réservez votre table VIP ou votre pass prestige pour vivre la plus belle fête de l'année au Bénin.
        </p>
        <button className="cta-banner-action-btn" onClick={onExplore}>
          <span>Découvrir la Billetterie en FCFA</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
