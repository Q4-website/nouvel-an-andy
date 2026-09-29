import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EditorialStorySection({ onLearnMore }) {
  return (
    <section className="editorial-story-section">
      <div className="editorial-container">
        {/* Left: Grande Image sans card ni container complexe */}
        <div className="editorial-image-col">
          <img
            src="/assets/toast.jpg"
            alt="Toast de célébration à Cotonou"
            className="editorial-large-img"
          />
          <span className="editorial-img-caption">
            Palais des Congrès de Cotonou • Soirée de Gala 2027
          </span>
        </div>

        {/* Right: Récit typographique & Chiffres clés */}
        <div className="editorial-text-col">
          <h2 className="editorial-heading">
            Une Nuit Magique au Cœur de Cotonou
          </h2>
          <p className="editorial-lead">
            L'art de célébrer le Nouvel An au plus haut sommet de raffinement et de convivialité.
          </p>
          <p className="editorial-paragraph">
            Le 31 décembre 2026, la capitale économique du Bénin s'illumine pour accueillir le plus prestigieux rassemblement festif de l'année. Une scénographie monumentale, un orchestre philharmonique et une ambiance féerique réunissent personnalités, familles et partenaires d'affaires pour franchir le cap de 2027 dans un éclat sans précédent.
          </p>

          {/* Chiffres clés en pure typographie, sans cards */}
          <div className="editorial-stats-row">
            <div className="editorial-stat-item">
              <span className="stat-number">1 500</span>
              <span className="stat-label">Invités attendus</span>
            </div>
            <div className="editorial-stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Services de gala</span>
            </div>
            <div className="editorial-stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Sécurité & voituriers</span>
            </div>
            <div className="editorial-stat-item">
              <span className="stat-number">05h00</span>
              <span className="stat-label">Fin de nuit dansante</span>
            </div>
          </div>

          <div className="editorial-action-row">
            <button className="editorial-link-btn" onClick={onLearnMore}>
              <span>Découvrir l'histoire du gala</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
