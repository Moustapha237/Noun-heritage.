import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { CreditCard, Bitcoin, Minus, Plus, Trash2, Phone, Mail, MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useCurrency } from '../context/CurrencyContext.jsx'
import { convertPrice } from '../data/products.js'
import { INTERMEDIARY_CONTACT } from '../data/intermediary.js'
import CurrencySwitcher from '../components/CurrencySwitcher.jsx'
import './Checkout.css'

const ease = [0.16, 1, 0.3, 1]

export default function Checkout() {
  const { items, updateQuantity, removeItem, totalXAF, clearCart } = useCart()
  const { currency } = useCurrency()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [form, setForm] = useState({ name: '', email: '', country: '' })
  const [confirmed, setConfirmed] = useState(false)
  const [processing, setProcessing] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleConfirm(e) {
    e.preventDefault()
    setProcessing(true)
    // Emplacement pour brancher une vraie intégration de paiement
    // (Stripe pour carte bancaire, Coinbase Commerce ou BTCPay pour Bitcoin).
    setTimeout(() => {
      setProcessing(false)
      setConfirmed(true)
      clearCart()
    }, 1200)
  }

  if (confirmed) {
    return (
      <div className="container checkout-page">
        <motion.div
          className="order-confirmed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="eyebrow">Commande confirmée</span>
          <h1>Merci, {form.name || 'cher client'} !</h1>
          <p>
            Votre commande a bien été enregistrée. Pour organiser la livraison, contactez
            directement notre intermédiaire local :
          </p>

          <div className="intermediary-card">
            <h3>{INTERMEDIARY_CONTACT.name}</h3>
            <span className="intermediary-role">{INTERMEDIARY_CONTACT.role}</span>
            <div className="intermediary-contacts">
              <a href={`tel:${INTERMEDIARY_CONTACT.phone.replace(/\s/g, '')}`}>
                <Phone size={16} /> {INTERMEDIARY_CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/${INTERMEDIARY_CONTACT.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={`mailto:${INTERMEDIARY_CONTACT.email}`}>
                <Mail size={16} /> {INTERMEDIARY_CONTACT.email}
              </a>
            </div>
            <p className="intermediary-note">{INTERMEDIARY_CONTACT.note}</p>
          </div>

          <Link to="/boutique" className="btn btn-outline">
            Continuer mes achats
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container checkout-page">
      <div className="checkout-header">
        <span className="eyebrow">Panier & commande</span>
        <h1>Finaliser ma commande</h1>
      </div>

      {items.length === 0 ? (
        <div className="checkout-empty">
          <p>Votre panier est vide.</p>
          <Link to="/boutique" className="btn btn-primary">
            Découvrir la boutique
          </Link>
        </div>
      ) : (
        <div className="checkout-grid">
          <div className="checkout-items-col">
            <div className="checkout-currency-row">
              <span>Afficher les prix en</span>
              <CurrencySwitcher />
            </div>

            {items.map((item) => (
              <div key={item.id} className="checkout-item">
                <div className="checkout-item-info">
                  <span className="checkout-item-name">{item.name}</span>
                  <span className="checkout-item-unit">
                    {convertPrice(item.priceXAF, currency)} × {item.quantity}
                  </span>
                </div>
                <div className="checkout-item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus size={13} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={13} />
                  </button>
                  <button className="checkout-item-remove" onClick={() => removeItem(item.id)}>
                    <Trash2 size={14} />
                  </button>
                </div>
                <span className="checkout-item-total">
                  {convertPrice(item.priceXAF * item.quantity, currency)}
                </span>
              </div>
            ))}
          </div>

          <form className="checkout-summary" onSubmit={handleConfirm}>
            <h2>Vos informations</h2>
            <label>
              Nom complet
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="vous@exemple.com"
              />
            </label>
            <label>
              Pays de livraison
              <input required name="country" value={form.country} onChange={handleChange} placeholder="Votre pays" />
            </label>

            <h2 style={{ marginTop: 8 }}>Mode de paiement</h2>
            <div className="payment-methods">
              <button
                type="button"
                className={`payment-method${paymentMethod === 'card' ? ' active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={18} />
                Carte bancaire
              </button>
              <button
                type="button"
                className={`payment-method${paymentMethod === 'bitcoin' ? ' active' : ''}`}
                onClick={() => setPaymentMethod('bitcoin')}
              >
                <Bitcoin size={18} />
                Bitcoin
              </button>
            </div>

            <AnimatePresence mode="wait">
              {paymentMethod === 'card' ? (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="payment-panel"
                >
                  <label>
                    Numéro de carte
                    <input placeholder="4242 4242 4242 4242" inputMode="numeric" />
                  </label>
                  <div className="payment-row">
                    <label>
                      Expiration
                      <input placeholder="MM/AA" />
                    </label>
                    <label>
                      CVC
                      <input placeholder="123" />
                    </label>
                  </div>
                  <p className="payment-hint">
                    Intégration de paiement à connecter (Stripe ou équivalent). Aucune donnée n'est
                    transmise dans cette démonstration.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="btc"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="payment-panel"
                >
                  <p className="payment-hint">
                    Une adresse de portefeuille Bitcoin sera générée pour votre commande une fois
                    l'intégration branchée (Coinbase Commerce, BTCPay Server, etc.).
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="checkout-total-row">
              <span>Total</span>
              <span>{convertPrice(totalXAF, currency)}</span>
            </div>

            <button type="submit" className="btn btn-primary checkout-submit" disabled={processing}>
              {processing ? 'Traitement…' : 'Confirmer la commande'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
