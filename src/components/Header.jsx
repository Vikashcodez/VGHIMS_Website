import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/VGHiMS_Logo.png'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`py-4 fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <img src={logo} alt="VGHiMS Logo" className="h-12 sm:h-16 w-auto" />
            <div className="hidden sm:flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-black tracking-[3px] bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent uppercase">
                VGHIMS
              </h1>
              <p className="text-xs text-gray-600 font-medium tracking-wider italic">
                Intelligent ERP for Hospitals
              </p>
            </div>
          </Link>

          {/* Navigation - Center (Desktop) */}
          <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-8">
              <li>
                <button onClick={() => scrollToSection('overview')} className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
                  Home
                </button>
              </li>
              <li>
                <Link to="/modules" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
                  Clinical Modules
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('advanced')} className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('financial')} className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact Button - Right (Desktop) */}
          <Link 
            to="/contact" 
            className="hidden lg:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book Demo
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <button onClick={() => scrollToSection('overview')} className="text-2xl text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
              Overview
            </button>
            <Link 
              to="/modules" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              Clinical
            </Link>
            <button onClick={() => scrollToSection('advanced')} className="text-2xl text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
              Advanced
            </button>
            <button onClick={() => scrollToSection('financial')} className="text-2xl text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
              Financial
            </button>
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
