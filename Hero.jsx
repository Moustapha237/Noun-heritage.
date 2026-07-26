import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Hero.css'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg shumom-pattern" aria-hidden="true">
        <svg className="hero-bg-motif" viewBox="0 0 400 400" fill="none">
          <path d="M200 40 L360 200 L200 360 L40 200 Z" stroke="var(--gold)" strokeWidth="1" opacity="0.35" />
          <path d="M200 100 L300 200 L200 300 L100 200 Z" stroke="var(--gold)" strokeWidth="1" opacity="0.25" />
          <circle cx="200" cy="200" r="60" stroke="var(--ochre)" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          <span className="eyebrow">Foumban, Royaume Bamoun — Cameroun</span>
          <h1 className="hero-title">
            L'art bamoun,
            <br />
            sculpté pour durer.
          </h1>
          <p className="hero-subtitle">
            Statuettes, masques, trônes perlés, bijoux et tenues d'apparat — façonnés à la main
            par des artisans de Foumban, dans la plus pure tradition du Grassland camerounais.
          </p>
          <div className="hero-actions">
            <Link to="/boutique" className="btn btn-primary">
              Découvrir la boutique <ArrowRight size={15} />
            </Link>
            <Link to="/a-propos" className="btn btn-outline">
              Notre histoire
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
        >
          <div className="hero-visual-frame">
            <svg viewBox="0 0 300 360" className="hero-visual-svg">
              <rect x="4" y="4" width="292" height="352" rx="4" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
              <path
                d="M150 60 C 180 60 200 90 200 130 C 200 170 180 190 150 260 C 120 190 100 170 100 130 C 100 90 120 60 150 60 Z"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="1.6"
              />
              <circle cx="150" cy="100" r="16" fill="var(--ink)" />
              <line x1="150" y1="260" x2="150" y2="300" stroke="var(--ink)" strokeWidth="1.6" />
              <path d="M110 300 L190 300 L180 320 L120 320 Z" fill="var(--ink)" opacity="0.9" />
              {Array.from({ length: 10 }).map((_, i) => (
                <circle key={i} cx={70 + i * 18} cy={330} r="3" fill="var(--gold)" />
              ))}
            </svg>
          </div>
          <span className="hero-visual-caption">Statuette commémorative — motif d'atelier</span>
        </motion.div>
      </div>
    </section>
  )
}
