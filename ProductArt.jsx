import './ProductArt.css'

// Palette par catégorie pour différencier visuellement les vignettes
// tant que de vraies photos produit ne sont pas encore chargées.
const CATEGORY_THEME = {
  statuettes: { bg: 'var(--ink)', accent: 'var(--gold)' },
  masques: { bg: 'var(--ochre)', accent: 'var(--cream)' },
  trones: { bg: 'var(--indigo)', accent: 'var(--gold)' },
  bijoux: { bg: 'var(--gold-dim)', accent: 'var(--cream)' },
  vetements: { bg: 'var(--indigo-dim)', accent: 'var(--ochre)' },
}

export default function ProductArt({ category, image, alt = '' }) {
  if (image) {
    return (
      <div className="product-art">
        <img src={image} alt={alt} loading="lazy" />
      </div>
    )
  }

  const theme = CATEGORY_THEME[category] || CATEGORY_THEME.statuettes

  return (
    <div className="product-art product-art-placeholder" style={{ background: theme.bg }}>
      <svg viewBox="0 0 100 100" className="product-art-motif" aria-hidden="true">
        <path d="M50 8 L88 50 L50 92 L12 50 Z" stroke={theme.accent} strokeWidth="1.4" fill="none" opacity="0.7" />
        <circle cx="50" cy="50" r="14" stroke={theme.accent} strokeWidth="1.4" fill="none" opacity="0.5" />
        <line x1="50" y1="20" x2="50" y2="80" stroke={theme.accent} strokeWidth="1" opacity="0.4" />
      </svg>
      <span className="product-art-label">Photo à venir</span>
    </div>
  )
}
