import React, { useState } from 'react';
import { X, Star, ShoppingBag, Truck, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>

        <div className="modal-body">
          {/* Left Media */}
          <div className="modal-media">
            <img src={product.image} alt={product.name} className="modal-image" />
            {product.badge && <span className="modal-badge">{product.badge}</span>}
          </div>

          {/* Right Product Details */}
          <div className="modal-details">
            <div className="modal-category">
              <Sparkles size={14} /> ÉDITION NOUVEL AN 2027
            </div>

            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-subtitle">{product.subtitle}</p>

            {/* Rating */}
            <div className="modal-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill={i < Math.floor(product.rating) ? '#fbbf24' : 'none'}
                    stroke="#fbbf24"
                  />
                ))}
              </div>
              <span className="rating-count">
                {product.rating} / 5 ({product.reviewsCount} avis vérifiés)
              </span>
            </div>

            {/* Price Box */}
            <div className="modal-price-box">
              <span className="modal-current-price">{product.price.toFixed(2)} €</span>
              {product.originalPrice && (
                <span className="modal-old-price">{product.originalPrice.toFixed(2)} €</span>
              )}
              {product.originalPrice && (
                <span className="modal-discount-tag">
                  Économisez {(product.originalPrice - product.price).toFixed(2)} €
                </span>
              )}
            </div>

            {/* Description */}
            <p className="modal-description">{product.description}</p>

            {/* Bullet points */}
            {product.details && (
              <ul className="modal-specs">
                {product.details.map((detail, idx) => (
                  <li key={idx}>
                    <Check size={14} className="spec-check" /> {detail}
                  </li>
                ))}
              </ul>
            )}

            {/* Quantity and Add to Cart */}
            <div className="modal-action-row">
              <div className="quantity-control">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Diminuer"
                >
                  -
                </button>
                <span className="qty-number">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>

              <button
                className={`modal-add-cart-btn ${added ? 'success' : ''}`}
                onClick={handleAdd}
              >
                {added ? (
                  <>
                    <Check size={18} /> {quantity} Ajouté(s) au panier
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} /> Ajouter {(product.price * quantity).toFixed(2)} €
                  </>
                )}
              </button>
            </div>

            {/* Guarantees */}
            <div className="modal-trust-footer">
              <div className="trust-item">
                <Truck size={16} /> Livraison garantie avant le 31 décembre
              </div>
              <div className="trust-item">
                <ShieldCheck size={16} /> Écrin cadeau avec ruban satin inclus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
