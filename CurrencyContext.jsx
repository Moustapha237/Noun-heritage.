import { createContext, useContext, useState, useEffect } from 'react'

const CurrencyContext = createContext(null)
const STORAGE_KEY = 'noun-heritage-currency'

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('XAF')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setCurrency(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currency)
  }, [currency])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider')
  return ctx
}
