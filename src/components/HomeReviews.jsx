import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function HomeReviews() {
  const reviews = [
    {
      author: 'Patrick A.',
      city: 'Cotonou',
      role: 'Participant Réveillon 2026',
      text: 'Une organisation millimétrée et un feu d\'artifice à couper le souffle. Le passage vers la nouvelle année était tout simplement magique.'
    },
    {
      author: 'Claudine M.',
      city: 'Porto-Novo',
      role: 'Table VIP Entreprise',
      text: 'La gastronomie et le service étaient dignes des plus grands palaces. Nos invités et partenaires étaient émerveillés.'
    },
    {
      author: 'Stéphane K.',
      city: 'Cotonou',
      role: 'Pass Soirée Prestige',
      text: 'L\'ambiance musicale et la scénographie lumineuse dépassaient toutes les attentes. Incomparable au Bénin !'
    }
  ];

  return (
    <section className="home-reviews-section">
      <div className="home-section-container">
        <div className="section-title-wrap">
          <h2 className="home-section-heading">Ce Qu'en Disent Nos Invités</h2>
          <p className="home-section-lead">
            Retour sur les moments inoubliables vécus lors de nos éditions de prestige.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="home-review-card">
              <div className="review-quote-icon">
                <Quote size={22} />
              </div>
              <div className="review-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="review-text">« {rev.text} »</p>
              <div className="review-author-wrap">
                <strong className="review-author-name">{rev.author}</strong>
                <span className="review-author-meta">{rev.role} • {rev.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
