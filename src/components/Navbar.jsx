import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar({ currentPage, onNavigatePage, cartCount, onOpenCart }) {
  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'programme', label: 'Programme' },
    { id: 'tickets', label: 'Billetterie' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="light-header">
      <div className="header-container">
        {/* Brand without 27 icon */}
        <div className="brand-logo" onClick={() => onNavigatePage('home')}>
          <div className="brand-name-wrap">
            <span className="brand-title">2027 au Bénin</span>
          </div>
        </div>

        {/* Minimal Navigation Links */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onNavigatePage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button: Rounded Purple Pill (Reference 'Login' button style) */}
        <div className="header-actions">
          <button className="login-pill-btn" onClick={onOpenCart} aria-label="Panier">
            <ShoppingBag size={15} />
            <span>Panier ({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
