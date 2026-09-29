import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ParallaxGalaBanner({ onExploreTickets }) {
  return (
    <section className="parallax-gala-section">
      <div className="parallax-overlay">
        <div className="parallax-inner-content">
          <h2 className="parallax-title">
            Minuit à Cotonou : L'Embrasement du Ciel
          </h2>
          <p className="parallax-text">
            À minuit précis, un spectacle pyrotechnique monumental illuminera l'océan Atlantique et le ciel de Cotonou. Vibrez au son du compte à rebours collectif et célébrez les premières secondes de 2027 dans une émotion inoubliable.
          </p>
          <div className="parallax-cta-wrap">
            <button className="welcome-pill-btn" onClick={onExploreTickets}>
              <span>Réserver vos accès au Gala (FCFA)</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
