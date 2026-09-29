import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Quels sont les moyens de paiement acceptés pour la billetterie ?',
      a: 'Tous les paiements s\'effectuent en Francs CFA (FCFA) en toute sécurité : Mobile Money Bénin (MTN Moov), Cartes bancaires Visa et Mastercard internationales, ou virement bancaire.'
    },
    {
      q: 'Comment et quand recevrai-je mes accès pour le réveillon ?',
      a: 'Dès validation de votre commande, vous recevez un e-billet sécurisé avec QR code unique par email et SMS. Des bracelets de prestige nominatifs sont également retirables sur place au Palais des Congrès dès le 29 décembre.'
    },
    {
      q: 'Quel est le code vestimentaire (dress code) requis ?',
      a: 'Une tenue de soirée stricte est exigée : smoking, costume sombre ou tenue traditionnelle de gala haut de gamme. L\'organisation se réserve le droit d\'entrée pour préserver le prestige de l\'événement.'
    },
    {
      q: 'Un parking sécurisé est-il disponible au Palais des Congrès ?',
      a: 'Oui, un vaste parking fermé et sous vidéosurveillance continue est mis à disposition avec service voiturier dédié pour les détenteurs de Pass Prestige et Tables VIP.'
    }
  ];

  return (
    <section className="home-faq-section">
      <div className="home-section-container">
        <div className="section-title-wrap">
          <h2 className="home-section-heading">Questions Fréquentes</h2>
          <p className="home-section-lead">
            Tout ce que vous devez savoir pour préparer votre venue au grand réveillon 2027 à Cotonou.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
