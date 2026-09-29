import React from 'react';
import { Check, ShoppingBag, Sparkles } from 'lucide-react';
import { FORMULAS } from '../data/products';

export default function FormulasSection({ onSelectFormula }) {
  const topFormulas = FORMULAS.slice(0, 3);

  return (
    <section id="billetterie" className="light-formulas-section">
      <div className="formulas-section-container">
        <div className="formulas-section-header">
          <h2 className="formulas-title">
            Formules & Accès au Gala 2027
          </h2>
          <p className="formulas-subtitle">
            Réservez vos places en toute sécurité. Retrait des accès à Cotonou ou livraison express.
          </p>
        </div>

        <div className="formulas-cards-grid">
          {topFormulas.map((item) => (
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
  );
}
