import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import  ModuleShowcase from './pages/Modules' 
import AboutVGHIMS from './pages/About'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<ModuleShowcase />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutVGHIMS />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
