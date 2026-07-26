import { createContext, useContext, useState, useEffect } from 'react'
import { PRODUCTS as SEED_PRODUCTS, CATEGORIES } from '../data/products.js'

const CatalogContext = createContext(null)
const STORAGE_KEY = 'noun-heritage-catalog-v1'

function loadInitial() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch (e) {
    console.error('Catalogue illisible, retour au catalogue de base', e)
  }
  return SEED_PRODUCTS
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function CatalogProvider({ children }) {
  const [products, setProducts] = useState(loadInitial)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  }, [products])

  function addProduct(data) {
    const id = `p-${Date.now()}`
    const slug = slugify(data.name) || id
    const newProduct = { id, slug, featured: false, ...data }
    setProducts((prev) => [newProduct, ...prev])
    return newProduct
  }

  function updateProduct(id, data) {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)))
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  function resetCatalog() {
    setProducts(SEED_PRODUCTS)
  }

  return (
    <CatalogContext.Provider
      value={{ products, categories: CATEGORIES, addProduct, updateProduct, deleteProduct, resetCatalog }}
    >
      {children}
    </CatalogContext.Provider>
  )
}

export function useCatalog() {
  const ctx = useContext(CatalogContext)
  if (!ctx) throw new Error('useCatalog must be used within CatalogProvider')
  return ctx
}
