import { useState } from 'react'
import { motion } from 'motion/react'
import { X } from 'lucide-react'
import { useCatalog } from '../context/CatalogContext.jsx'
import './Admin.css'

const EMPTY = {
  name: '',
  category: 'statuettes',
  shortDescription: '',
  description: '',
  priceXAF: '',
  material: '',
  origin: 'Foumban, Cameroun',
  height: '',
  image: '',
  featured: false,
}

export default function ProductForm({ product, onClose }) {
  const { categories, addProduct, updateProduct } = useCatalog()
  const [form, setForm] = useState(product ? { ...EMPTY, ...product } : EMPTY)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const payload = { ...form, priceXAF: Number(form.priceXAF) || 0 }
    if (product) {
      updateProduct(product.id, payload)
    } else {
      addProduct(payload)
    }
    onClose()
  }

  return (
    <motion.div
      className="admin-form-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.form
        className="admin-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="admin-form-header">
          <h2>{product ? 'Modifier le produit' : 'Nouveau produit'}</h2>
          <button type="button" onClick={onClose} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        <label>
          Nom du produit
          <input required name="name" value={form.name} onChange={handleChange} />
        </label>

        <label>
          Catégorie
          <select name="category" value={form.category} onChange={handleChange}>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Description courte
          <input required name="shortDescription" value={form.shortDescription} onChange={handleChange} />
        </label>

        <label>
          Description complète
          <textarea required rows={4} name="description" value={form.description} onChange={handleChange} />
        </label>

        <div className="admin-form-row">
          <label>
            Prix (en FCFA)
            <input required type="number" min="0" name="priceXAF" value={form.priceXAF} onChange={handleChange} />
          </label>
          <label>
            Dimensions
            <input name="height" value={form.height} onChange={handleChange} placeholder="ex: 45 cm" />
          </label>
        </div>

        <div className="admin-form-row">
          <label>
            Matière
            <input name="material" value={form.material} onChange={handleChange} />
          </label>
          <label>
            Origine
            <input name="origin" value={form.origin} onChange={handleChange} />
          </label>
        </div>

        <label>
          URL de la photo (facultatif)
          <input name="image" value={form.image} onChange={handleChange} placeholder="https://…" />
        </label>

        <label className="admin-form-checkbox">
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
          Mettre en avant sur la page d'accueil
        </label>

        <button type="submit" className="btn btn-primary">
          {product ? 'Enregistrer les modifications' : 'Ajouter au catalogue'}
        </button>
      </motion.form>
    </motion.div>
  )
}
