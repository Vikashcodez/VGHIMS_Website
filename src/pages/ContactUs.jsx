const ContactUs = () => {
  return (
    <>
      <section id="contact" className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-center text-gray-600 mb-16">
              We'd love to hear from you. Reach out to us for any inquiries about VGHIMS.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Email</h3>
                <a 
                  href="mailto:info@voicegateindia.com" 
                  className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300"
                >
                  info@voicegateindia.com
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile</h3>
                <div className="flex flex-col gap-2">
                  <a 
                    href="tel:+919533333956" 
                    className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300"
                  >
                    +91 9533333956
                  </a>
                  <span className="text-gray-500">or</span>
                  <a 
                    href="tel:+919848014835" 
                    className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300"
                  >
                    +91 9848014835
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 text-center">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Website</h3>
                <a 
                  href="http://www.vghmis.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300"
                >
                  www.vghmis.in
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold mb-4 text-center">VoiceGate Technologies India Pvt. Ltd.</h3>
              <p className="text-lg text-center text-blue-100 mb-6">
                Your trusted partner in Healthcare IT Solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-lg">
                  <p className="text-sm text-blue-100">28+ Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-lg">
                  <p className="text-sm text-blue-100">Enterprise Solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-lg">
                  <p className="text-sm text-blue-100">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
