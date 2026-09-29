import React from 'react';
import { Award, Sparkles, MapPin, Shield, ArrowRight } from 'lucide-react';

export default function AboutPage({ onNavigatePage }) {
  return (
    <div className="page-wrapper page-fade-in light-theme-page">
      <section className="light-page-header">
        <div className="page-header-container">
          <h1 className="page-title">Le Grand Réveillon du Bénin 2027</h1>
          <p className="page-desc">
            Une nuit féerique sur les rives de l'océan Atlantique à Cotonou.
          </p>
        </div>
      </section>

      <section className="light-about-full-section">
        <div className="about-full-container">
          <div className="about-full-row">
            <div className="about-full-media">
              <img
                src="/assets/toast.jpg"
                alt="Toast du Nouvel An Cotonou"
                className="about-photo-primary"
              />
              <img
                src="/assets/champagne.jpg"
                alt="Champagne Cuvée 2027"
                className="about-photo-secondary"
              />
            </div>

            <div className="about-full-description">
              <h2 className="about-inner-heading">Un Événement Unique à Cotonou</h2>
              <p className="about-text-p">
                Organisée chaque année sous le signe du raffinement, la Célébration du Nouvel An rassemble familles, décideurs et visiteurs du Bénin et d’ailleurs pour saluer les réussites passées et inaugurer l'année 2027.
              </p>
              <p className="about-text-p">
                Au programme : haute gastronomie, accords mets et champagnes de prestige, prestations musicales acoustiques et grand spectacle pyrotechnique au bord de l’océan.
              </p>

              <div className="about-perks-grid">
                <div className="about-perk-item">
                  <Award size={22} className="perk-icon-color" />
                  <div>
                    <strong>Haute Gastronomie</strong>
                    <span>Menu 5 services par des chefs renommés</span>
                  </div>
                </div>

                <div className="about-perk-item">
                  <Sparkles size={22} className="perk-icon-color" />
                  <div>
                    <strong>Scénographie 2027</strong>
                    <span>Jeux de lumières et décompte spectaculaire</span>
                  </div>
                </div>

                <div className="about-perk-item">
                  <MapPin size={22} className="perk-icon-color" />
                  <div>
                    <strong>Palais des Congrès</strong>
                    <span>Cadre sécurisé et prestigieux à Cotonou</span>
                  </div>
                </div>

                <div className="about-perk-item">
                  <Shield size={22} className="perk-icon-color" />
                  <div>
                    <strong>Accueil VIP</strong>
                    <span>Service voiturier et conciergerie dédiée</span>
                  </div>
                </div>
              </div>

              <button
                className="about-cta-action-btn"
                onClick={() => onNavigatePage('tickets')}
              >
                <span>Accéder à la Billetterie (FCFA)</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
