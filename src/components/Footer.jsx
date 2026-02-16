import { Link } from 'react-router-dom'
import { Linkedin, Twitter } from 'lucide-react'
import logo from '../assets/VGHiMS_Logo.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
                <img src={logo} alt="VGHiMS Logo" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-black tracking-[3px] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase">
                    VGHIMS
                  </h1>
                  <p className="text-xs text-gray-400 font-medium tracking-wider italic">
                    Intelligent ERP for Hospitals
                  </p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Next-generation Hospital Information Management System engineered for smart healthcare delivery.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Access</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/modules" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Clinical Modules
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                aria-label="Follow us on X/Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2026 VoiceGate Technologies India Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
