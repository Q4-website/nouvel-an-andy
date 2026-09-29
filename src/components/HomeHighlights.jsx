import React from 'react';
import { Sparkles, ShieldCheck, UtensilsCrossed, Music2 } from 'lucide-react';

export default function HomeHighlights() {
  const highlights = [
    {
      icon: <Sparkles size={24} />,
      iconClass: 'icon-purple',
      title: 'Scénographie Féerique',
      desc: 'Le Palais des Congrès de Cotonou transformé par des jeux de lumières, projections immersives et décors futuristes.'
    },
    {
      icon: <UtensilsCrossed size={24} />,
      iconClass: 'icon-pink',
      title: 'Haute Gastronomie',
      desc: 'Menu dégustation 5 services créé par une brigade de chefs réputés alliant saveurs béninoises et haute table.'
    },
    {
      icon: <Music2 size={24} />,
      iconClass: 'icon-blue',
      title: 'Prestations Live',
      desc: 'Orchestres symphoniques, artistes prestigieux et DJs de renommée internationale pour enflammer la piste.'
    },
    {
      icon: <ShieldCheck size={24} />,
      iconClass: 'icon-cyan',
      title: 'Service VIP & Sécurité',
      desc: 'Accueil protocolaire, service voiturier privé, espaces lounges réservés et sécurité maximale assurée.'
    }
  ];

  return (
    <section className="home-highlights-section">
      <div className="home-section-container">
        <div className="section-title-wrap">
          <h2 className="home-section-heading">L'Excellence du Réveillon 2027</h2>
          <p className="home-section-lead">
            Quatre piliers d'exception pour faire de votre passage à 2027 le plus beau souvenir de l'année.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <div className={`highlight-icon-box ${item.iconClass}`}>
                {item.icon}
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
