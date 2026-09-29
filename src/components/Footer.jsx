import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Footer({ onNavigatePage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="footer" className="light-site-footer">
      <div className="footer-top-container">
        <div className="footer-columns-grid">
          {/* Brand Col */}
          <div className="footer-brand-column">
            <div className="footer-brand-title">
              <span className="brand-logo-text">welcome2027</span>
              <span className="brand-country-pill">BÉNIN</span>
            </div>
            <p className="footer-brand-description">
              Le rendez-vous officiel des célébrations du Nouvel An 2027 à Cotonou. Une expérience d'exception entre prestige, culture et gastronomie.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Navigation</h4>
            <ul className="footer-nav-links-list">
              <li><button onClick={() => onNavigatePage('home')}>Home</button></li>
              <li><button onClick={() => onNavigatePage('about')}>About</button></li>
              <li><button onClick={() => onNavigatePage('programme')}>Programme 2027</button></li>
              <li><button onClick={() => onNavigatePage('tickets')}>Billetterie en FCFA</button></li>
              <li><button onClick={() => onNavigatePage('contact')}>Contact & Accès</button></li>
            </ul>
          </div>

          {/* Conciergerie */}
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Conciergerie Bénin</h4>
            <p className="footer-info-p">contact@nouvelan2027.bj</p>
            <p className="footer-info-p">+229 01 40 00 27</p>
            <p className="footer-info-p">+229 97 20 27 00</p>
            <p className="footer-info-p">Palais des Congrès, Cotonou</p>
          </div>

          {/* Newsletter */}
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Newsletter 2027</h4>
            <p className="footer-info-p">Recevez en avant-première les annonces du programme et les offres spéciales.</p>

            {subscribed ? (
              <div className="newsletter-subscribed">
                <Check size={16} /> Inscription validée !
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <input
                  type="email"
                  placeholder="votre@email.bj"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-email-input"
                />
                <button type="submit" className="newsletter-btn" aria-label="Envoyer">
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p>© 2027 Célébration du Nouvel An Bénin. Tous droits réservés.</p>
          <div className="footer-legal-tags">
            <span>Cotonou, République du Bénin</span>
            <span>•</span>
            <span>Tarifs en Francs CFA (FCFA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
