import FeatureItem from './FeatureItem'

const FinancialModules = () => {
  const features = [
    {
      icon: '💰',
      title: 'Tariff & Insurance Management',
      description: 'Comprehensive tariff, insurance, and contract management'
    },
    {
      icon: '📋',
      title: 'Claims Processing',
      description: 'Insurance claims processing & TPA integration'
    },
    {
      icon: '🧾',
      title: 'Billing & Invoicing',
      description: 'Patient billing, invoicing, and receivables management'
    },
    {
      icon: '⚖️',
      title: 'Compliance & Audit',
      description: 'Taxation-compliant e-Invoicing & audit-ready traceability'
    }
  ]

  return (
    <section id="financial" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Financial, Insurance & Revenue Cycle Management
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Comprehensive Revenue Cycle Management (RCM) including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinancialModules
