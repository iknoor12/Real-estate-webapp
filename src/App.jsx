import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import HelpCenter from './pages/HelpCenter'
import FAQ from './pages/FAQ'
import NeighborhoodDetail from './pages/NeighborhoodDetail'
import PropertyDetail from './pages/PropertyDetail'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/neighborhood/:slug" element={<NeighborhoodDetail />} />
            <Route path="/property/:slug" element={<PropertyDetail />} />
          </Routes>
          <Footer />
          <Toast />
        </div>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
