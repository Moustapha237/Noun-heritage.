import { useState } from 'react'
import { motion } from 'motion/react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import CurrencySwitcher from './CurrencySwitcher.jsx'
import { useCart } from '../context/CartContext.jsx'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/boutique', label: 'Boutique' },
  { to: '/categorie/statuettes', label: 'Statuettes' },
  { to: '/categorie/masques', label: 'Masques' },
  { to: '/categorie/bijoux', label: 'Bijoux' },
  { to: '/a-propos', label: 'Notre histoire' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalCount, setIsOpen } = useCart()

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <Logo size={30} color="var(--ink)" />
          <span className="navbar-brand-text">Noun Héritage</span>
        </Link>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <CurrencySwitcher compact />
          <button className="navbar-cart" onClick={() => setIsOpen(true)} aria-label="Ouvrir le panier">
            <ShoppingBag size={18} strokeWidth={1.8} />
            {totalCount > 0 && <span className="navbar-cart-badge">{totalCount}</span>}
          </button>
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          className="navbar-mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="navbar-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
