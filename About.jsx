import { motion } from 'motion/react'
import './StaticPage.css'

const ease = [0.16, 1, 0.3, 1]

export default function About() {
  return (
    <div className="container static-page">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <span className="eyebrow">Notre histoire</span>
        <h1>Le Royaume Bamoun, une tradition vivante</h1>
        <p className="static-lead">
          Fondé à la fin du XIVe siècle, le royaume bamoun règne depuis Foumban, dans les
          hauteurs de l'Ouest camerounais. Sculpteurs, fondeurs de bronze, perleurs et tisserands
          y perpétuent un savoir-faire transmis de génération en génération.
        </p>

        <div className="static-block">
          <h2>Une écriture, un art</h2>
          <p>
            À la fin du XIXe siècle, le sultan Njoya fait naître l'un des rares systèmes
            d'écriture originaires d'Afrique, le Shümom. Ses caractères, à la force graphique
            singulière, ont irrigué l'art mural et décoratif bamoun jusqu'à aujourd'hui —
            une inspiration que l'on retrouve jusque dans notre identité visuelle.
          </p>
        </div>

        <div className="static-block">
          <h2>Des artisans, pas des reproductions</h2>
          <p>
            Chaque statuette, masque ou bijou proposé sur Noun Héritage est une pièce
            d'artisanat contemporain, façonnée par des ateliers de Foumban dans le respect des
            formes et techniques traditionnelles. Nous ne vendons pas d'antiquités ni d'objets
            de musée : nos artisans créent des œuvres neuves, pensées pour vivre chez vous tout
            en honorant un héritage vieux de six siècles.
          </p>
        </div>

        <div className="static-block">
          <h2>Notre engagement</h2>
          <p>
            Chaque commande soutient directement les artisans et ateliers de la région du Noun.
            Un intermédiaire local vous accompagne après l'achat pour organiser une livraison
            adaptée à votre pays.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
