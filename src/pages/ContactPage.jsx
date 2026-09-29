import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="page-wrapper page-fade-in light-theme-page">
      <section className="light-page-header">
        <div className="page-header-container">
          <h1 className="page-title">Contact & Accès Cotonou</h1>
          <p className="page-desc">
            Pour toute demande d'information, réservation de table VIP ou commande d'entreprise.
          </p>
        </div>
      </section>

      <section className="light-contact-section">
        <div className="contact-section-container">
          <div className="contact-two-cols">
            {/* Info Cards */}
            <div className="contact-details-col">
              <h2 className="contact-col-title">Coordonnées du Gala 2027</h2>
              <p className="contact-col-intro">
                Notre équipe est à votre disposition 7j/7 pour vous accompagner dans la préparation de votre réveillon.
              </p>

              <div className="contact-info-cards-list">
                <div className="light-contact-card">
                  <div className="card-icon-circle icon-indigo">
                    <MapPin size={20} />
                  </div>
                  <div className="card-texts">
                    <strong>Palais des Congrès de Cotonou</strong>
                    <p>Boulevard de la Marina, Cotonou, République du Bénin</p>
                  </div>
                </div>

                <div className="light-contact-card">
                  <div className="card-icon-circle icon-purple">
                    <Phone size={20} />
                  </div>
                  <div className="card-texts">
                    <strong>Téléphone & WhatsApp (Bénin)</strong>
                    <p>+229 01 40 00 27 • +229 97 20 27 00</p>
                  </div>
                </div>

                <div className="light-contact-card">
                  <div className="card-icon-circle icon-cyan">
                    <Mail size={20} />
                  </div>
                  <div className="card-texts">
                    <strong>Email de Contact</strong>
                    <p>contact@nouvelan2027.bj • vip@nouvelan2027.bj</p>
                  </div>
                </div>

                <div className="light-contact-card">
                  <div className="card-icon-circle icon-emerald">
                    <Clock size={20} />
                  </div>
                  <div className="card-texts">
                    <strong>Horaires de Réception</strong>
                    <p>Mardi 31 décembre dès 20h00 jusqu'à 05h00 le 1er janvier</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="contact-form-col">
              <div className="light-form-card">
                <h3 className="form-title">Envoyez-nous un Message</h3>

                {sent ? (
                  <div className="form-success-box">
                    <CheckCircle2 size={24} color="#16a34a" />
                    <div>
                      <strong>Message bien envoyé !</strong>
                      <p>Notre conciergerie à Cotonou vous répondra sous 24h.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="light-contact-form">
                    <div className="form-field">
                      <label>Nom complet</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Aurel Gbaguidi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Adresse Email (.bj ou autre)</label>
                      <input
                        type="email"
                        required
                        placeholder="aurel@domaine.bj"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Téléphone (Bénin)</label>
                      <input
                        type="tel"
                        placeholder="+229 XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Votre message</label>
                      <textarea
                        rows={4}
                        placeholder="Précisez votre demande, nombre d'invités ou question..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="light-form-submit-btn">
                      Envoyer ma demande
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
