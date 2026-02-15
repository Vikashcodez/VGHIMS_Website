const Compliance = () => {
  const complianceItems = [
    {
      icon: '🌍',
      title: 'Global Standards',
      items: ['GDPR & HIPAA Compliance', 'FHIR & ISO Standards']
    },
    {
      icon: '📊',
      title: 'Healthcare Standards',
      items: ['ICD-11, SNOMED CT & LOINC', 'CBAHI, CCHI & NPHIES']
    },
    {
      icon: '🔐',
      title: 'Data Governance',
      items: ['Comprehensive Audit Trails', 'Role-Based Access Control']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Regulatory Compliance & Standards Alignment
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Architected to comply with global and national healthcare standards:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {complianceItems.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg border border-indigo-100">
              <h4 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
                <span className="text-3xl mr-3">{item.icon}</span>
                {item.title}
              </h4>
              <ul className="space-y-3">
                {item.items.map((subitem, subindex) => (
                  <li key={subindex} className="flex items-start text-gray-700">
                    <span className="text-indigo-500 mr-3">•</span>
                    {subitem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Compliance
