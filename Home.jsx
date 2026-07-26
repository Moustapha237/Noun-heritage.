import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useCatalog } from '../context/CatalogContext.jsx'
import './Home.css'

const ease = [0.16, 1, 0.3, 1]

export default function Home() {
  const { products, categories } = useCatalog()
  const featured = products.filter((p) => p.featured).slice(0, 4)

  return (
    <div>
      <Hero />

      <section className="section container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="eyebrow">Sélection</span>
          <h2>Pièces phares de l'atelier</h2>
        </motion.div>

        <div className="product-grid">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="section-cta">
          <Link to="/boutique" className="btn btn-outline">
            Voir toute la boutique <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="categories-band">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Explorer</span>
          <h2 className="categories-title">Cinq univers, une même tradition</h2>
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link to={`/categorie/${cat.slug}`} key={cat.slug} className="category-tile">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <span className="category-tile-arrow">
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="trust-band">
          <div className="trust-item">
            <h4>Paiement flexible</h4>
            <p>Carte bancaire ou Bitcoin, au choix, en toute sécurité.</p>
          </div>
          <div className="trust-item">
            <h4>Devise de votre choix</h4>
            <p>Prix affichés en FCFA, USD, EUR ou GBP selon votre préférence.</p>
          </div>
          <div className="trust-item">
            <h4>Livraison accompagnée</h4>
            <p>Un intermédiaire local vous contacte après commande pour organiser l'acheminement.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
