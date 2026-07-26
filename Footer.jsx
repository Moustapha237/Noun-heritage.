import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <Logo size={26} color="var(--cream)" />
            <span>Noun Héritage</span>
          </div>
          <p>
            Art et artisanat du royaume bamoun, sculpté à Foumban, Cameroun.
            Chaque pièce raconte une histoire vieille de six siècles.
          </p>
        </div>

        <div className="footer-col">
          <h4>Boutique</h4>
          <Link to="/categorie/statuettes">Statuettes</Link>
          <Link to="/categorie/masques">Masques</Link>
          <Link to="/categorie/trones">Trônes &amp; Tabourets</Link>
          <Link to="/categorie/bijoux">Bijoux</Link>
          <Link to="/categorie/vetements">Vêtements traditionnels</Link>
        </div>

        <div className="footer-col">
          <h4>Informations</h4>
          <Link to="/a-propos">Notre histoire</Link>
          <Link to="/livraison">Livraison &amp; intermédiaires</Link>
          <Link to="/paiement">Moyens de paiement</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Devises acceptées</h4>
          <p className="footer-currencies">XAF · USD · EUR · GBP</p>
          <h4 style={{ marginTop: 18 }}>Paiement</h4>
          <p className="footer-currencies">Carte bancaire · Bitcoin</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Noun Héritage — Foumban, Cameroun</span>
        <Link to="/admin" className="footer-admin-link">
          Espace administrateur
        </Link>
      </div>
    </footer>
  )
}
