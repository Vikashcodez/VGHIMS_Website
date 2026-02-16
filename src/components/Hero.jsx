import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section className="bg-blue-50 pt-28 pb-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <img 
                src={heroImage} 
                alt="VGHiMS Platform" 
                className="w-full max-w-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                A Comprehensive Digital Platform for Smart Healthcare Delivery
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Enterprise Hospitals Intelligence Management System (HIMS) engineered to support digitization, automation, interoperability, and regulatory compliance
              </p>
              <Link 
                to="/book-demo"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full text-base font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
