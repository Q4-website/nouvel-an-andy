import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function EditorialGastronomySection({ onNavigateProgramme }) {
  const points = [
    'Menu 5 services conçu par une brigade de maîtres cuisiniers renommés',
    'Cuvée de champagne millésimée 2027 servie fraîche à discrétion',
    'Alliance subtile de saveurs nobles béninoises et de haute cuisine internationale',
    'Buffet de mignardises et chocolats fins jusqu\'à l\'aube'
  ];

  return (
    <section className="editorial-gastronomy-section">
      <div className="editorial-container reversed">
        {/* Left: Text & Features list without boxed cards */}
        <div className="editorial-text-col">
          <h2 className="editorial-heading">
            Haute Gastronomie & Champagne Millésimé
          </h2>
          <p className="editorial-lead">
            Une expérience culinaire d'exception orchestrée pour éveiller vos sens dès les premières heures de la fête.
          </p>

          <ul className="editorial-features-list">
            {points.map((pt, idx) => (
              <li key={idx} className="editorial-feature-item">
                <div className="feature-check-circle">
                  <Check size={14} />
                </div>
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          <div className="editorial-action-row">
            <button className="editorial-link-btn" onClick={onNavigateProgramme}>
              <span>Voir le menu complet du dîner</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right: Large Champagne & Flutes Photo */}
        <div className="editorial-image-col">
          <img
            src="/assets/champagne.jpg"
            alt="Champagne Cuvée Prestige 2027"
            className="editorial-large-img"
          />
          <span className="editorial-img-caption">
            Service de sommellerie d'élite & flûtes de cristal
          </span>
        </div>
      </div>
    </section>
  );
}
