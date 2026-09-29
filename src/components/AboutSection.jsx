import React from 'react';
import { ArrowRight, Sparkles, Utensils, Music, GlassWater, Award } from 'lucide-react';

export default function AboutSection({ onLearnMore }) {
  return (
    <section id="about" className="light-about-section">
      <div className="about-section-container">
        <div className="about-section-header">
          <h2 className="about-main-title">
            Une Nuit Magique au Cœur de Cotonou
          </h2>
          <p className="about-lead-text">
            Le gala du Nouvel An 2027 réunit gastronomie d'exception, scénographie lumineuse immersive et artistes renommés pour un passage inoubliable vers la nouvelle année.
          </p>
        </div>

        <div className="about-features-row">
          <div className="about-feature-box">
            <div className="box-icon-wrap icon-purple">
              <Utensils size={22} />
            </div>
            <h3>Gastronomie 5 Services</h3>
            <p>Menu de fête concocté par des maîtres cuisiniers mêlant saveurs locales et grands classiques.</p>
          </div>

          <div className="about-feature-box">
            <div className="box-icon-wrap icon-blue">
              <GlassWater size={22} />
            </div>
            <h3>Champagne Millésime 2027</h3>
            <p>Une cuvée spécialement embouteillée pour porter un toast éclatant aux 12 coups de minuit.</p>
          </div>

          <div className="about-feature-box">
            <div className="box-icon-wrap icon-pink">
              <Music size={22} />
            </div>
            <h3>Concert & Bal Live</h3>
            <p>Orchestre philharmonique et DJs pour faire danser l’assemblée jusqu’au petit matin.</p>
          </div>

          <div className="about-feature-box">
            <div className="box-icon-wrap icon-cyan">
              <Award size={22} />
            </div>
            <h3>Service Conciergerie VIP</h3>
            <p>Voiturier, tables privatives avec maître d'hôtel et sécurité internationale renforcée.</p>
          </div>
        </div>

        <div className="about-more-action">
          <button className="about-explore-btn" onClick={onLearnMore}>
            <span>En savoir plus sur l'événement</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
