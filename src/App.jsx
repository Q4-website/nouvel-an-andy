import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgrammePage from './pages/ProgrammePage';
import TicketsPage from './pages/TicketsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { playChimeSound } from './utils/audio';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const [cartItems, setCartItems] = useState([
    {
      id: 'pass-prestige',
      name: 'Pass Soirée Prestige 2027',
      price: 65000,
      quantity: 1,
      image: '/assets/gala_party.jpg'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigatePage = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFormula = (formula) => {
    playChimeSound();
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === formula.id);
      if (existing) {
        return prev.map((item) =>
          item.id === formula.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: formula.id,
          name: formula.name,
          price: formula.price,
          quantity: 1,
          image: formula.image
        }
      ];
    });
    setIsCartOpen(true);
  };

  const handleBookFormulaFromHero = (formData) => {
    playChimeSound();
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === 'pass-prestige');
      if (existing) {
        return prev.map((item) =>
          item.id === 'pass-prestige' ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: 'pass-prestige',
          name: 'Pass Soirée Prestige 2027',
          price: 65000,
          quantity: 1,
          image: '/assets/gala_party.jpg'
        }
      ];
    });
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="app-root theme-bleu-nuit">
      {/* Global Header with Multi-Page Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Dynamic Page Views */}
      <main className="main-content">
        {currentPage === 'home' && (
          <HomePage
            onBookFormula={handleBookFormulaFromHero}
            onSelectFormula={handleSelectFormula}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigatePage={handleNavigatePage} />
        )}

        {currentPage === 'programme' && (
          <ProgrammePage onNavigatePage={handleNavigatePage} />
        )}

        {currentPage === 'tickets' && (
          <TicketsPage onSelectFormula={handleSelectFormula} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Minimalist Footer */}
      <Footer onNavigatePage={handleNavigatePage} />

      {/* Slide-in Shopping Cart Drawer in FCFA */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        soundEnabled={true}
      />
    </div>
  );
}
