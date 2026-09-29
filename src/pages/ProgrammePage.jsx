import React from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { SCHEDULE_ITEMS } from '../data/products';

export default function ProgrammePage({ onNavigatePage }) {
  return (
    <div className="page-wrapper page-fade-in light-theme-page">
      <section className="light-page-header">
        <div className="page-header-container">
          <h1 className="page-title">Déroulement de la Nuit du Réveillon</h1>
          <p className="page-desc">
            Le programme exclusif du grand gala de la Saint-Sylvestre au Palais des Congrès de Cotonou.
          </p>
        </div>
      </section>

      <section className="light-timeline-section">
        <div className="timeline-section-container">
          <div className="timeline-cards-list">
            {SCHEDULE_ITEMS.map((item, idx) => (
              <div key={idx} className="light-timeline-card">
                <div className="timeline-hour-pill">
                  <Clock size={16} />
                  <span>{item.time}</span>
                </div>
                <div className="timeline-details">
                  <h3 className="timeline-event-title">{item.title}</h3>
                  <p className="timeline-event-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-action-card">
            <Sparkles size={28} className="action-sparkle-icon" />
            <h3>Préparez vos tenues de soirée pour 2027</h3>
            <p>Les réservations pour le dîner gastronomique et les tables VIP se clôturent dès que la capacité est atteinte.</p>
            <button
              className="timeline-action-btn"
              onClick={() => onNavigatePage('tickets')}
            >
              Réserver Votre Place (dès 65 000 FCFA)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
