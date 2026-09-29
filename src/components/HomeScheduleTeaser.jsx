import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function HomeScheduleTeaser({ onNavigateProgramme }) {
  const steps = [
    {
      hour: '20h00',
      title: 'Accueil Tapis Rouge & Cocktail',
      desc: 'Flûtes de champagne et bouchées fines sous les jeux de lumières d\'accueil.'
    },
    {
      hour: '21h30',
      title: 'Grand Dîner de Gala 5 Services',
      desc: 'Dégustation festive animée par le grand ensemble musical acoustique.'
    },
    {
      hour: '23h59',
      title: 'Grand Compte à Rebours & Féerie',
      desc: 'Illumination monumentale et feux d\'artifice féeriques pour accueillir 2027.'
    },
    {
      hour: '00h30',
      title: 'Soirée Dansante & Bal de Minuit',
      desc: 'Sets enflammés des DJs et ambiance prestige jusqu\'aux premières lueurs.'
    }
  ];

  return (
    <section className="home-schedule-section">
      <div className="home-section-container">
        <div className="section-title-wrap">
          <h2 className="home-section-heading">Le Déroulement de la Nuit</h2>
          <p className="home-section-lead">
            Un timing millimétré du 31 décembre au 1er janvier au Palais des Congrès de Cotonou.
          </p>
        </div>

        <div className="schedule-cards-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="home-schedule-card">
              <div className="home-schedule-hour">
                <Clock size={15} />
                <span>{step.hour}</span>
              </div>
              <h3 className="home-schedule-title">{step.title}</h3>
              <p className="home-schedule-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="schedule-action-center">
          <button className="welcome-pill-btn" onClick={onNavigateProgramme}>
            <span>Consulter le programme complet</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
