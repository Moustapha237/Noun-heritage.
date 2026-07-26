import { CreditCard, Bitcoin } from 'lucide-react'
import './StaticPage.css'

export default function Payment() {
  return (
    <div className="container static-page">
      <span className="eyebrow">Paiement</span>
      <h1>Deux moyens de paiement, à votre choix</h1>
      <p className="static-lead">
        Pour s'adapter à une clientèle internationale, Noun Héritage propose deux modes de
        règlement au moment du passage en caisse.
      </p>

      <div className="static-block">
        <h2><CreditCard size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} />Carte bancaire</h2>
        <p>
          Visa, Mastercard et cartes équivalentes sont acceptées. Le paiement est traité par un
          prestataire sécurisé (intégration à venir) ; vos données bancaires ne transitent jamais
          par nos serveurs.
        </p>
      </div>
      <div className="static-block">
        <h2><Bitcoin size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} />Bitcoin</h2>
        <p>
          Une adresse de portefeuille dédiée est générée pour chaque commande. Le paiement est
          confirmé après validation sur la blockchain (intégration à venir via un prestataire
          spécialisé).
        </p>
      </div>
      <div className="static-block">
        <h2>Devises d'affichage</h2>
        <p>
          Les prix peuvent être consultés en franc CFA (XAF), dollar américain (USD), euro (EUR)
          ou livre sterling (GBP) grâce au sélecteur de devise présent sur chaque page.
        </p>
      </div>
    </div>
  )
}
