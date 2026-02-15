const Security = () => {
  const securityItems = [
    {
      icon: '🔐',
      title: 'Role-based Security Architecture',
      description: 'Strict access governance and control'
    },
    {
      icon: '📝',
      title: 'End-to-End Audit Logging',
      description: 'Complete audit trails for compliance'
    },
    {
      icon: '🔍',
      title: 'Data Traceability',
      description: 'Clinical and financial data traceability'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Data Security & Governance</h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Robust healthcare data protection through:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {securityItems.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Security
