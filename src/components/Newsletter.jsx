import React, { useState } from 'react';
import { Mail, Gift, Check, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ffd700', '#60a5fa', '#ffffff']
    });

    setSubscribed(true);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        <div className="newsletter-icon-wrap">
          <Gift size={32} />
        </div>
        <div className="section-eyebrow center gold">
          <Sparkles size={14} /> CLUB PRIVÉ DU NOUVEL AN
        </div>
        <h2 className="newsletter-title">
          Recevez -15% sur votre première commande
        </h2>
        <p className="newsletter-desc">
          Inscrivez-vous à nos lettres d’hiver pour débloquer en avant-première nos éditions limitées du Réveillon 2027.
        </p>

        {subscribed ? (
          <div className="newsletter-success">
            <Check size={20} className="success-icon" />
            <div>
              <strong>Votre code VIP est activé :</strong>
              <div className="vip-code-tag">NOUVELAN2027</div>
              <p className="vip-sub">Utilisez-le dès maintenant dans votre panier pour obtenir -15% !</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-wrap">
              <Mail size={18} className="mail-icon" />
              <input
                type="email"
                placeholder="Votre adresse email pour recevoir l'offre..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
            </div>
            <button type="submit" className="newsletter-submit-btn">
              <span>Obtenir mon code</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
