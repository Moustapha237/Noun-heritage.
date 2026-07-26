import { Mail, Phone, MessageCircle } from 'lucide-react'
import { INTERMEDIARY_CONTACT } from '../data/intermediary.js'
import './StaticPage.css'

export default function Contact() {
  return (
    <div className="container static-page">
      <span className="eyebrow">Contact</span>
      <h1>Une question avant de commander ?</h1>
      <p className="static-lead">
        Notre équipe et notre intermédiaire local sont disponibles pour répondre à vos questions
        sur les produits, les délais ou la livraison.
      </p>

      <div className="contact-card">
        <a href={`mailto:${INTERMEDIARY_CONTACT.email}`}>
          <Mail size={16} /> {INTERMEDIARY_CONTACT.email}
        </a>
        <a href={`tel:${INTERMEDIARY_CONTACT.phone.replace(/\s/g, '')}`}>
          <Phone size={16} /> {INTERMEDIARY_CONTACT.phone}
        </a>
        <a href={`https://wa.me/${INTERMEDIARY_CONTACT.whatsapp.replace(/[^\d]/g, '')}`} target="_blank" rel="noreferrer">
          <MessageCircle size={16} /> Discuter sur WhatsApp
        </a>
      </div>
    </div>
  )
}
