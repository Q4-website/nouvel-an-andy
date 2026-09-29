import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles, ShoppingBag } from 'lucide-react';

export default function FlashDealCountdown({ onQuickAdd, onNavigateCatalog }) {
  // 6 hour rolling flash deal timer
  const [dealTime, setDealTime] = useState({ hours: 5, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setDealTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="deals" className="flash-deal-section">
      <div className="flash-deal-banner">
        <div className="flash-deal-content">
          <div className="flash-badge">
            <Flame size={16} className="flame-icon" /> VENTE FLASH DU RÉVEILLON 2027
          </div>
          <h2 className="flash-title">
            Pack Prestige : Cuvée 2027 & Boule Magique à -30%
          </h2>
          <p className="flash-desc">
            Offre limitée pour fêter le passage vers la nouvelle année. Stock réservé aux 100 premières commandes de la soirée.
          </p>

          <div className="flash-stock-meter">
            <div className="stock-info">
              <span>Déjà 82 coffrets commandés sur 100</span>
              <span className="stock-urgent">Plus que 18 disponibles !</span>
            </div>
            <div className="stock-progress-track">
              <div className="stock-progress-bar" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>

        {/* Live Timer Box */}
        <div className="flash-timer-box">
          <div className="timer-box-header">
            <Clock size={16} /> Temps restant avant expiration
          </div>
          <div className="flash-time-digits">
            <div className="digit-unit">
              <span className="digit">{String(dealTime.hours).padStart(2, '0')}</span>
              <span className="unit">Heures</span>
            </div>
            <span className="colon">:</span>
            <div className="digit-unit">
              <span className="digit">{String(dealTime.minutes).padStart(2, '0')}</span>
              <span className="unit">Min</span>
            </div>
            <span className="colon">:</span>
            <div className="digit-unit">
              <span className="digit">{String(dealTime.seconds).padStart(2, '0')}</span>
              <span className="unit">Sec</span>
            </div>
          </div>
          <button
            className="flash-cta-btn"
            onClick={() => onQuickAdd('champagne-cuvee-2027')}
          >
            <ShoppingBag size={18} /> Profiter de l'Offre à 129 €
          </button>
        </div>
      </div>
    </section>
  );
}
