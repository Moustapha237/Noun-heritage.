import { useParams, Navigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { useCatalog } from '../context/CatalogContext.jsx'
import './Shop.css'

export default function Category() {
  const { slug } = useParams()
  const { products, categories } = useCatalog()
  const category = categories.find((c) => c.slug === slug)
  const items = products.filter((p) => p.category === slug)

  if (!category) return <Navigate to="/boutique" replace />

  return (
    <div className="container shop-page">
      <div className="shop-header">
        <span className="eyebrow">Catégorie</span>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      <div className="product-grid">
        {items.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {items.length === 0 && (
        <p className="shop-empty">Aucun produit dans cette catégorie pour l'instant.</p>
      )}
    </div>
  )
}
