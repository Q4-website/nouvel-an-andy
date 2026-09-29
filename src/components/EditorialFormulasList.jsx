import React from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { FORMULAS } from '../data/products';

export default function EditorialFormulasList({ onSelectFormula }) {
  const items = FORMULAS.slice(0, 3);

  return (
    <section className="editorial-formulas-section">
      <div className="editorial-container single-col">
        <div className="section-title-wrap">
          <h2 className="home-section-heading">Formules & Accès Officiels en FCFA</h2>
          <p className="home-section-lead">
            Réservations ouvertes pour le grand gala du 31 décembre 2026 au Palais des Congrès.
          </p>
        </div>

        {/* Liste luxury éditoriale horizontale sans cards */}
        <div className="luxury-formulas-table">
          {items.map((item) => (
            <div key={item.id} className="luxury-formula-row">
              <div className="formula-media-thumb">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="formula-main-info">
                <h3 className="formula-row-title">{item.name}</h3>
                <p className="formula-row-subtitle">{item.subtitle}</p>
                <div className="formula-row-features">
                  {item.features.slice(0, 3).map((feat, i) => (
                    <span key={i} className="formula-inline-feat">
                      <Check size={13} className="feat-check" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="formula-price-cta">
                <div className="formula-amount-wrap">
                  <span className="formula-amount">
                    {item.price.toLocaleString('fr-FR')} FCFA
                  </span>
                  <span className="formula-ttc">TTC / Accès Officiel</span>
                </div>
                <button
                  className="welcome-pill-btn small-pill"
                  onClick={() => onSelectFormula(item)}
                >
                  <ShoppingBag size={15} />
                  <span>Réserver</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
