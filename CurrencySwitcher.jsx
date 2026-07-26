import { useCurrency } from '../context/CurrencyContext.jsx'
import { CURRENCIES } from '../data/products.js'
import './CurrencySwitcher.css'

export default function CurrencySwitcher({ compact = false }) {
  const { currency, setCurrency } = useCurrency()

  return (
    <div className={`currency-switcher${compact ? ' compact' : ''}`}>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        aria-label="Choisir la devise"
      >
        {Object.entries(CURRENCIES).map(([code, info]) => (
          <option key={code} value={code}>
            {compact ? code : `${code} — ${info.label}`}
          </option>
        ))}
      </select>
    </div>
  )
}
