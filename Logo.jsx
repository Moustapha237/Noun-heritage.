export default function Logo({ size = 36, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Losange central inspiré des motifs perlés bamoun */}
      <path d="M20 3 L34 20 L20 37 L6 20 Z" stroke={color} strokeWidth="2" fill="none" />
      {/* Trait vertical - référence à l'écriture Shümom */}
      <line x1="20" y1="10" x2="20" y2="30" stroke={color} strokeWidth="2" />
      {/* Points latéraux */}
      <circle cx="12" cy="20" r="1.8" fill={color} />
      <circle cx="28" cy="20" r="1.8" fill={color} />
    </svg>
  )
}
