const AIIntelligence = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">AI-Driven Intelligence Layer</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Embedded AI capabilities to enhance clinical and administrative efficiency:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
            <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
              <span className="text-3xl mr-3">🤖</span>
              Clinical Support
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">•</span>
                AI-assisted Doctor Notes
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">•</span>
                AI-based Clinical Order Entry
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Analytics & Quality
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                AI Health Analytics & Decision Support
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                Quality, Compliance & Clinical Audit Automation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIIntelligence
