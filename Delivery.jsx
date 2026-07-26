import './StaticPage.css'

export default function Delivery() {
  return (
    <div className="container static-page">
      <span className="eyebrow">Livraison</span>
      <h1>Comment se déroule la livraison</h1>
      <p className="static-lead">
        Noun Héritage ne gère pas directement l'expédition : chaque commande est accompagnée
        par un intermédiaire local basé à Foumban, qui organise le conditionnement et
        l'acheminement adaptés à votre destination.
      </p>

      <div className="static-block">
        <h2>1. Vous confirmez votre commande</h2>
        <p>Une fois le paiement validé (carte bancaire ou Bitcoin), votre commande est enregistrée.</p>
      </div>
      <div className="static-block">
        <h2>2. Vous recevez le contact de l'intermédiaire</h2>
        <p>
          Ses coordonnées (téléphone, WhatsApp, email) s'affichent immédiatement après la
          confirmation, pour convenir ensemble du mode d'expédition, des délais et des frais
          selon votre pays.
        </p>
      </div>
      <div className="static-block">
        <h2>3. Suivi et remise</h2>
        <p>
          L'intermédiaire vous tient informé de l'avancement jusqu'à la remise de votre colis,
          que ce soit par transporteur international ou retrait sur place à Foumban.
        </p>
      </div>
    </div>
  )
}
