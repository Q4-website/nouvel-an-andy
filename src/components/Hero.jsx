import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function Hero({ onExplore, onNavigateTickets }) {
  // Countdown to January 1, 2027 00:00:00
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2027-01-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="welcome-hero-section">
      <div className="welcome-hero-container">
        {/* Left Side: Typography, Prominent Key Countdown & CTA (NO FORM) */}
        <div className="welcome-hero-content">
          <h1 className="welcome-main-title">
            <span className="title-lead">Let’s</span>
            <span className="title-accent">Welcome 2027</span>
          </h1>

          <p className="welcome-subtext">
            Happy New Year! Let’s toast to yesterday’s achievements and tomorrow’s bright future. Célébrez le passage vers 2027 avec la plus grande soirée de prestige à Cotonou.
          </p>

          {/* PROMINENT KEY ELEMENT: The Grand Countdown to 2027 */}
          <div className="key-countdown-card">
            <div className="countdown-card-header">
              <Clock size={16} className="clock-icon" />
              <span>COMPTE À REBOURS OFFICIEL • NOUVEL AN 2027</span>
            </div>

            <div className="countdown-timer-display">
              <div className="timer-unit">
                <span className="timer-val">{timeLeft.days}</span>
                <span className="timer-lbl">JOURS</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="timer-val">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="timer-lbl">HEURES</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="timer-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="timer-lbl">MINUTES</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit highlight-unit">
                <span className="timer-val highlight-val">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="timer-lbl">SECONDES</span>
              </div>
            </div>
          </div>

          {/* Action Button (Inspired by the purple rounded button 'More') */}
          <div className="welcome-cta-row">
            <button className="welcome-pill-btn" onClick={onNavigateTickets}>
              <span>Découvrir les Formules (FCFA)</span>
              <ArrowRight size={16} />
            </button>
            <button className="welcome-ghost-btn" onClick={onExplore}>
              En savoir plus
            </button>
          </div>
        </div>

        {/* Right Side: High-Resolution 3D Metallic 2027 Foliage & Water Artwork */}
        <div className="welcome-hero-artwork">
          <div className="artwork-wrapper">
            <img
              src="/assets/welcome_2027.jpg"
              alt="Welcome 2027 3D Artwork"
              className="artwork-image"
            />
            {/* Soft decorative floating lotus flowers matching artwork */}
            <div className="floating-lotus lotus-1">
              <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                <path d="M20 5C22 13 28 17 35 20C28 23 22 27 20 35C18 27 12 23 5 20C12 17 18 13 20 5Z" fill="#f472b6" opacity="0.9" />
                <circle cx="20" cy="20" r="4" fill="#fde047" />
              </svg>
            </div>
            <div className="floating-lotus lotus-2">
              <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
                <path d="M20 5C22 13 28 17 35 20C28 23 22 27 20 35C18 27 12 23 5 20C12 17 18 13 20 5Z" fill="#fb7185" opacity="0.85" />
                <circle cx="20" cy="20" r="3" fill="#fde047" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
