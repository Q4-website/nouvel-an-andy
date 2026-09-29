import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ParallaxBookingBanner({ onExploreTickets }) {
  return (
    <section className="parallax-booking-section">
      <div className="parallax-overlay">
        <div className="parallax-inner-content">
          <h2 className="parallax-title">
            Une Soirée Exclusive, des Accès Limités
          </h2>
          <p className="parallax-text">
            Pour assurer l'intimité, l'excellence du service et le confort de chaque convive, le nombre de places est strictement limité. Assurez dès à présent vos accès pour célébrer 2027 à Cotonou.
          </p>
          <div className="parallax-cta-wrap">
            <button className="welcome-pill-btn" onClick={onExploreTickets}>
              <span>Consulter toutes les offres en FCFA</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
