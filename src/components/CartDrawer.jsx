import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationSound } from '../utils/audio';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  soundEnabled
}) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 75000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const discountAmount = appliedDiscount ? Math.round((subtotal * appliedDiscount.percent) / 100) : 0;
  const shippingCost = subtotal >= freeShippingThreshold || cartItems.length === 0 ? 0 : 3000;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'BENIN2027') {
      setAppliedDiscount({ code: 'BENIN2027', percent: 10, label: 'Remise Bénin 2027 (-10%)' });
      setCouponCode('');
    } else if (code === 'COTONOU15') {
      setAppliedDiscount({ code: 'COTONOU15', percent: 15, label: 'VIP Cotonou (-15%)' });
      setCouponCode('');
    } else {
      setCouponError('Code invalide. Essayez BENIN2027 ou COTONOU15');
    }
  };

  const handleCheckout = () => {
    if (soundEnabled) {
      playCelebrationSound();
    }
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#fbbf24', '#38bdf8', '#10b981', '#ffffff']
    });
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutComplete(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title-row">
            <ShoppingBag size={20} />
            <h2 className="cart-heading">Votre Panier Réveillon</h2>
            <span className="cart-badge-count">{cartItems.length}</span>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Fermer le panier">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress in FCFA */}
        <div className="free-shipping-box">
          <div className="free-shipping-text">
            <Truck size={16} />
            {remainingForFreeShipping > 0 ? (
              <span>
                Plus que <strong>{remainingForFreeShipping.toLocaleString('fr-FR')} FCFA</strong> pour la livraison offerte à Cotonou !
              </span>
            ) : (
              <span className="free-shipping-achieved">
                Livraison express offerte à Cotonou & Calavi !
              </span>
            )}
          </div>
          <div className="free-shipping-track">
            <div
              className="free-shipping-bar"
              style={{ width: `${freeShippingPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Items List */}
        <div className="cart-items-container">
          {checkoutComplete ? (
            <div className="checkout-success-view">
              <div className="success-icon-wrap">
                <Check size={40} />
              </div>
              <h3>Réservation 2027 Confirmée !</h3>
              <p>Votre commande a bien été enregistrée. Notre conciergerie à Cotonou vous délivre vos accès sous peu.</p>
              <div className="order-number">RÉF : BJ-2027-{(Math.random() * 89999 + 10000).toFixed(0)}</div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="cart-empty-view">
              <ShoppingBag size={48} className="empty-cart-icon" />
              <h3>Votre panier est vide</h3>
              <p>Consultez la billetterie pour choisir vos accès au réveillon 2027.</p>
            </div>
          ) : (
            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <span className="cart-item-unit-price">
                      {item.price.toLocaleString('fr-FR')} FCFA / unité
                    </span>

                    <div className="cart-item-controls">
                      <div className="cart-qty-picker">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="cart-qty-btn"
                          aria-label="Moins"
                        >
                          -
                        </button>
                        <span className="cart-qty-val">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="cart-qty-btn"
                          aria-label="Plus"
                        >
                          +
                        </button>
                      </div>

                      <span className="cart-item-total-price">
                        {(item.price * item.quantity).toLocaleString('fr-FR')} FCFA
                      </span>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="cart-item-remove-btn"
                        title="Retirer du panier"
                        aria-label="Supprimer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with totals & coupon in FCFA */}
        {!checkoutComplete && cartItems.length > 0 && (
          <div className="cart-footer">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} className="coupon-form">
              <div className="coupon-input-wrap">
                <Tag size={16} className="coupon-icon" />
                <input
                  type="text"
                  placeholder="Code promo (ex: BENIN2027)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                />
                <button type="submit" className="coupon-apply-btn">
                  Valider
                </button>
              </div>
              {appliedDiscount && (
                <div className="coupon-applied-pill">
                  <Check size={14} /> {appliedDiscount.label} appliquée
                </div>
              )}
              {couponError && <p className="coupon-error">{couponError}</p>}
            </form>

            {/* Calculations Breakdown */}
            <div className="cart-breakdown">
              <div className="breakdown-row">
                <span>Sous-total</span>
                <span>{subtotal.toLocaleString('fr-FR')} FCFA</span>
              </div>
              {appliedDiscount && (
                <div className="breakdown-row discount-row">
                  <span>Remise ({appliedDiscount.percent}%)</span>
                  <span>- {discountAmount.toLocaleString('fr-FR')} FCFA</span>
                </div>
              )}
              <div className="breakdown-row">
                <span>Frais de livraison Cotonou</span>
                <span>{shippingCost === 0 ? 'Gratuite' : `${shippingCost.toLocaleString('fr-FR')} FCFA`}</span>
              </div>
              <div className="breakdown-row total-row">
                <span>Total Net</span>
                <span>{finalTotal.toLocaleString('fr-FR')} FCFA</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              <span>Confirmer ma Réservation</span>
              <ArrowRight size={18} />
            </button>

            <div className="cart-security-badge">
              <ShieldCheck size={15} /> Paiement sécurisé Mobile Money (MTN / Moov) & Carte
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
