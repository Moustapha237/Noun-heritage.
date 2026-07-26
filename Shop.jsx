import { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { useCatalog } from '../context/CatalogContext.jsx'
import './Shop.css'

export default function Shop() {
  const { products, categories } = useCatalog()
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((p) => p.category === activeCategory)
  }, [products, activeCategory])

  return (
    <div className="container shop-page">
      <div className="shop-header">
        <span className="eyebrow">Catalogue complet</span>
        <h1>La boutique Noun Héritage</h1>
        <p>Chaque pièce est façonnée à Foumban selon des techniques transmises de génération en génération.</p>
      </div>

      <div className="shop-filters">
        <button
          className={`shop-filter${activeCategory === 'all' ? ' active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          Tout
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            className={`shop-filter${activeCategory === cat.slug ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat.slug)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="shop-empty">Aucun produit dans cette catégorie pour l'instant.</p>
      )}
    </div>
  )
}
