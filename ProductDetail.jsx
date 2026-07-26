import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Minus, Plus, ShoppingBag, Check } from 'lucide-react'
import ProductArt from '../components/ProductArt.jsx'
import { useCatalog } from '../context/CatalogContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useCurrency } from '../context/CurrencyContext.jsx'
import { convertPrice } from '../data/products.js'
import './ProductDetail.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const { products } = useCatalog()
  const { addItem } = useCart()
  const { currency } = useCurrency()
  const [quantity, setQuantity] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  const product = products.find((p) => p.slug === slug)
  if (!product) return <Navigate to="/boutique" replace />

  function handleAdd() {
    addItem(product, quantity)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1800)
  }

  return (
    <div className="container product-detail">
      <div className="product-detail-grid">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProductArt category={product.category} image={product.image} alt={product.name} />
        </motion.div>

        <motion.div
          className="product-detail-info"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to={`/categorie/${product.category}`} className="product-detail-cat">
            {product.category}
          </Link>
          <h1>{product.name}</h1>
          <span className="product-detail-price">{convertPrice(product.priceXAF, currency)}</span>
          <p className="product-detail-desc">{product.description}</p>

          <dl className="product-detail-specs">
            <div>
              <dt>Matière</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>Origine</dt>
              <dd>{product.origin}</dd>
            </div>
            <div>
              <dt>Dimensions</dt>
              <dd>{product.height}</dd>
            </div>
          </dl>

          <div className="product-detail-actions">
            <div className="qty-control">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Diminuer la quantité">
                <Minus size={14} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} aria-label="Augmenter la quantité">
                <Plus size={14} />
              </button>
            </div>
            <button className="btn btn-primary product-detail-add" onClick={handleAdd}>
              {justAdded ? (
                <>
                  <Check size={16} /> Ajouté au panier
                </>
              ) : (
                <>
                  <ShoppingBag size={16} /> Ajouter au panier
                </>
              )}
            </button>
          </div>

          <p className="product-detail-note">
            Paiement disponible par carte bancaire ou Bitcoin. Après confirmation de commande,
            un intermédiaire local vous contacte pour organiser la livraison.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
