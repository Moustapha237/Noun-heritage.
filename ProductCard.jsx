import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import ProductArt from './ProductArt.jsx'
import { useCurrency } from '../context/CurrencyContext.jsx'
import { convertPrice } from '../data/products.js'
import './ProductCard.css'

export default function ProductCard({ product, index = 0 }) {
  const { currency } = useCurrency()

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.3), ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/produit/${product.slug}`} className="product-card">
        <ProductArt category={product.category} image={product.image} alt={product.name} />
        <div className="product-card-info">
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-desc">{product.shortDescription}</p>
          <span className="product-card-price">{convertPrice(product.priceXAF, currency)}</span>
        </div>
      </Link>
    </motion.div>
  )
}
