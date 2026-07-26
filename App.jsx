import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Category from './pages/Category.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Checkout from './pages/Checkout.jsx'
import About from './pages/About.jsx'
import Delivery from './pages/Delivery.jsx'
import Payment from './pages/Payment.jsx'
import Contact from './pages/Contact.jsx'
import AdminGate from './admin/AdminGate.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/categorie/:slug" element={<Category />} />
          <Route path="/produit/:slug" element={<ProductDetail />} />
          <Route path="/panier" element={<Checkout />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/livraison" element={<Delivery />} />
          <Route path="/paiement" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminGate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
