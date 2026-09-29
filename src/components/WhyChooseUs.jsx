import React from 'react';
import { Truck, Gift, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const perks = [
    {
      icon: <Truck size={28} className="perk-icon" />,
      title: 'Livraison Express Réveillon',
      description: 'Expédié sous 24h avec garantie d’arrivée avant le 31 décembre pour vos festivités.'
    },
    {
      icon: <Gift size={28} className="perk-icon" />,
      title: 'Écrin Cadeau Velours & Or',
      description: 'Chaque commande est emballée dans nos boîtes signatures scellées à la cire dorée.'
    },
    {
      icon: <ShieldCheck size={28} className="perk-icon" />,
      title: 'Artisanat Alpin Certifié',
      description: 'Matériaux nobles, verre borosilicate résistant et finitions minutieuses à la main.'
    },
    {
      icon: <Clock size={28} className="perk-icon" />,
      title: 'Conciergerie Fêtes 7j/7',
      description: 'Notre équipe dédiée vous accompagne pour vos commandes privées et livraisons d’urgence.'
    }
  ];

  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="section-eyebrow center">
          <Sparkles size={14} /> L’EXPÉRIENCE SNOW TOWN
        </div>
        <h2 className="section-title center">Pourquoi nous confier vos fêtes 2027</h2>

        <div className="perks-grid">
          {perks.map((perk, idx) => (
            <div key={idx} className="perk-card">
              <div className="perk-icon-wrapper">{perk.icon}</div>
              <h3 className="perk-title">{perk.title}</h3>
              <p className="perk-desc">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
