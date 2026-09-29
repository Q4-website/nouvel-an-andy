import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar({ currentPage, onNavigatePage, cartCount, onOpenCart }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programme', label: 'Programme' },
    { id: 'tickets', label: 'Billetterie' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="light-header">
      <div className="header-container">
        {/* Brand with Gradient Icon (Reference style) */}
        <div className="brand-logo" onClick={() => onNavigatePage('home')}>
          <div className="brand-icon-box">
            <span>27</span>
          </div>
          <div className="brand-name-wrap">
            <span className="brand-title">welcome2027</span>
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
