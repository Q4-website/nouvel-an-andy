import React, { useState, useMemo } from 'react';
import { Star, ShoppingBag, Eye, Check, Sparkles, Filter } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function ProductCatalog({
  products,
  onAddToCart,
  onOpenProductModal,
  addedIds = []
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      // featured
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [products, selectedCategory, sortBy]);

  return (
    <section id="catalog" className="catalog-section">
      <div className="catalog-header-bar">
        <div>
          <div className="section-eyebrow">
            <Sparkles size={14} /> COLLECTION OFFICIELLE DU NOUVEL AN 2027
          </div>
          <h2 className="section-title">
            Boutique & Cadeaux Féeriques
          </h2>
          <p className="section-subtitle">
            Chaque création est soigneusement emballée dans notre atelier alpin et prête à être déposée sous le sapin.
          </p>
        </div>

        {/* Sort selector */}
        <div className="catalog-controls">
          <div className="sort-wrapper">
            <Filter size={15} className="sort-icon" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">En vedette pour 2027</option>
              <option value="price-low">Prix : croissant</option>
              <option value="price-high">Prix : décroissant</option>
              <option value="rating">Mieux notés</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills (Image 2 style) */}
      <div className="category-pills-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cat-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Full-width Product Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => {
          const isRecentlyAdded = addedIds.includes(product.id);

          return (
            <article key={product.id} className="product-card">
              {/* Image & Badges */}
              <div className="card-media">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-image"
                  loading="lazy"
                />

                {/* Badge top-left */}
                {product.badge && (
                  <span className="card-badge">{product.badge}</span>
                )}

                {/* Quick view button overlay */}
                <button
                  className="quick-view-btn"
                  onClick={() => onOpenProductModal(product)}
                  title="Aperçu rapide"
                  aria-label="Aperçu rapide"
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* Product Info */}
              <div className="card-info">
                {/* Rating row */}
                <div className="card-rating-row">
                  <div className="card-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill={i < Math.floor(product.rating) ? '#fbbf24' : 'none'}
                        stroke="#fbbf24"
                      />
                    ))}
                  </div>
                  <span className="card-rating-score">
                    {product.rating} ({product.reviewsCount})
                  </span>
                </div>

                <h3 className="card-title" onClick={() => onOpenProductModal(product)}>
                  {product.name}
                </h3>
                <p className="card-subtitle">{product.subtitle}</p>

                {/* Price and CTA row */}
                <div className="card-footer-row">
                  <div className="card-prices">
                    <span className="card-price">{product.price.toFixed(2)} €</span>
                    {product.originalPrice && (
                      <span className="card-original-price">
                        {product.originalPrice.toFixed(2)} €
                      </span>
                    )}
                  </div>

                  <button
                    className={`card-add-btn ${isRecentlyAdded ? 'added' : ''}`}
                    onClick={() => onAddToCart(product)}
                    disabled={isRecentlyAdded}
                  >
                    {isRecentlyAdded ? (
                      <>
                        <Check size={16} /> Ajouté
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} /> Acheter
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
