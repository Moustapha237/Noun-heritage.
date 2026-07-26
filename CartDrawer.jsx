import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useCurrency } from '../context/CurrencyContext.jsx'
import { convertPrice } from '../data/products.js'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalXAF } = useCart()
  const { currency } = useCurrency()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cart-drawer-header">
              <h2>Votre panier</h2>
              <button onClick={() => setIsOpen(false)} aria-label="Fermer le panier">
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="cart-empty">
                <p>Votre panier est vide pour l'instant.</p>
                <Link to="/boutique" onClick={() => setIsOpen(false)} className="btn btn-primary">
                  Voir la boutique
                </Link>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {items.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-price">{convertPrice(item.priceXAF, currency)}</span>
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Diminuer">
                          <Minus size={13} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Augmenter">
                          <Plus size={13} />
                        </button>
                        <button className="cart-item-remove" onClick={() => removeItem(item.id)} aria-label="Retirer">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-drawer-footer">
                  <div className="cart-total">
                    <span>Total</span>
                    <span>{convertPrice(totalXAF, currency)}</span>
                  </div>
                  <Link to="/panier" onClick={() => setIsOpen(false)} className="btn btn-primary cart-checkout">
                    Passer commande
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
