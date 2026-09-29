import React, { useState } from 'react';
import { Check, ShoppingBag, Sparkles } from 'lucide-react';
import { FORMULAS } from '../data/products';

export default function TicketsPage({ onSelectFormula }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? FORMULAS
    : FORMULAS.filter((f) => f.category === filter);

  return (
    <div className="page-wrapper page-fade-in light-theme-page">
      <section className="light-page-header">
        <div className="page-header-container">
          <h1 className="page-title">Billetterie & Coffrets Réveillon 2027</h1>
          <p className="page-desc">
            Tarifs officiels en FCFA. Choisissez votre pass soirée, votre table privative ou votre coffret de célébration.
          </p>
        </div>
      </section>

      <section className="light-catalog-section">
        <div className="catalog-container">
          {/* Category Filter Pills */}
          <div className="filter-pills-row">
            <button
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Toutes les Offres
            </button>
            <button
              className={`filter-pill ${filter === 'pass' ? 'active' : ''}`}
              onClick={() => setFilter('pass')}
            >
              Pass Soirée
            </button>
            <button
              className={`filter-pill ${filter === 'vip' ? 'active' : ''}`}
              onClick={() => setFilter('vip')}
            >
              Prestige VIP
            </button>
            <button
              className={`filter-pill ${filter === 'coffret' ? 'active' : ''}`}
              onClick={() => setFilter('coffret')}
            >
              Coffrets Cadeaux
            </button>
          </div>

          {/* Cards Grid */}
          <div className="formulas-cards-grid">
            {filteredItems.map((item) => (
              <article key={item.id} className="light-formula-card">
                <div className="card-media-wrapper">
                  <img src={item.image} alt={item.name} className="card-media-img" />
                </div>

                <div className="card-content">
                  <h3 className="card-item-title">{item.name}</h3>
                  <p className="card-item-subtitle">{item.subtitle}</p>

                  <div className="card-pricing-block">
                    <span className="card-fcfa-price">
                      {item.price.toLocaleString('fr-FR')} FCFA
                    </span>
                    <span className="card-tax-tag">TTC</span>
                  </div>

                  <ul className="card-perks-list">
                    {item.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={16} className="perk-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="card-buy-btn"
                    onClick={() => onSelectFormula(item)}
                  >
                    <ShoppingBag size={16} />
                    <span>{item.btnText}</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
