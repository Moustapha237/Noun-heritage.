import { useState } from 'react'
import { Plus, Pencil, Trash2, LogOut } from 'lucide-react'
import { useCatalog } from '../context/CatalogContext.jsx'
import { useAdminAuth } from '../context/AdminAuthContext.jsx'
import ProductForm from './ProductForm.jsx'
import { convertPrice } from '../data/products.js'
import './Admin.css'

export default function AdminDashboard() {
  const { products, deleteProduct } = useCatalog()
  const { logout } = useAdminAuth()
  const [editingProduct, setEditingProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)

  function handleEdit(product) {
    setEditingProduct(product)
    setShowForm(true)
  }

  function handleAddNew() {
    setEditingProduct(null)
    setShowForm(true)
  }

  function handleDelete(product) {
    if (confirm(`Supprimer « ${product.name} » du catalogue ?`)) {
      deleteProduct(product.id)
    }
  }

  return (
    <div className="container admin-page">
      <div className="admin-header">
        <div>
          <span className="eyebrow">Espace administrateur</span>
          <h1>Gestion du catalogue</h1>
          <p>{products.length} produit{products.length > 1 ? 's' : ''} en ligne</p>
        </div>
        <div className="admin-header-actions">
          <button className="btn btn-primary" onClick={handleAddNew}>
            <Plus size={16} /> Nouveau produit
          </button>
          <button className="btn btn-outline" onClick={logout}>
            <LogOut size={16} /> Déconnexion
          </button>
        </div>
      </div>

      {showForm && (
        <ProductForm
          product={editingProduct}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="admin-table">
        <div className="admin-table-row admin-table-head">
          <span>Produit</span>
          <span>Catégorie</span>
          <span>Prix (XAF)</span>
          <span>Vedette</span>
          <span>Actions</span>
        </div>
        {products.map((p) => (
          <div className="admin-table-row" key={p.id}>
            <span className="admin-table-name">{p.name}</span>
            <span>{p.category}</span>
            <span>{convertPrice(p.priceXAF, 'XAF')}</span>
            <span>{p.featured ? 'Oui' : 'Non'}</span>
            <span className="admin-table-actions">
              <button onClick={() => handleEdit(p)} aria-label="Modifier">
                <Pencil size={15} />
              </button>
              <button onClick={() => handleDelete(p)} aria-label="Supprimer" className="admin-delete">
                <Trash2 size={15} />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
