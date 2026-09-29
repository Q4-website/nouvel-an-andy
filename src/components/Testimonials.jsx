import React from 'react';
import { Star, CheckCircle2, Sparkles, Quote } from 'lucide-react';
import { REVIEWS } from '../data/products';

export default function Testimonials() {
  return (
    <section id="reviews" className="testimonials-section">
      <div className="testimonials-inner">
        <div className="section-eyebrow center">
          <Sparkles size={14} /> TÉMOIGNAGES CLIENTS
        </div>
        <h2 className="section-title center">Ils célèbrent 2027 avec nous</h2>
        <p className="section-subtitle center">
          Découvrez les retours de nos clients séduits par la qualité de nos coffrets et décorations du Nouvel An.
        </p>

        <div className="reviews-grid">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-header">
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#fbbf24" stroke="#fbbf24" />
                  ))}
                </div>
                <Quote size={20} className="review-quote-icon" />
              </div>

              <h4 className="review-title">« {rev.title} »</h4>
              <p className="review-comment">{rev.comment}</p>

              <div className="review-product-tag">
                Article : <strong>{rev.product}</strong>
              </div>

              <div className="review-footer">
                <div>
                  <span className="reviewer-name">{rev.name}</span>
                  <span className="reviewer-location">{rev.city}</span>
                </div>
                <div className="verified-badge">
                  <CheckCircle2 size={13} color="#10b981" />
                  <span>Achat Vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
