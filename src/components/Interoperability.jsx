import IntegrationItem from './IntegrationItem'

const Interoperability = () => {
  const integrations = [
    { icon: '🔌', title: 'FHIR-aligned APIs' },
    { icon: '🔬', title: 'Lab Equipment Integration' },
    { icon: '📸', title: 'Biometric & QR Code Integration' },
    { icon: '🖼️', title: 'PACS Integration' },
    { icon: '💬', title: 'WhatsApp, SMS & Email Gateways' },
    { icon: '🎥', title: 'Telemedicine & Virtual Consultation' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Interoperability & System Integrations
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Seamless interoperability through:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <IntegrationItem key={index} {...integration} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interoperability
