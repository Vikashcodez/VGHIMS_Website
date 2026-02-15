import ValueCard from './ValueCard'

const ValueProposition = () => {
  const values = [
    {
      icon: '🏥',
      title: 'End-to-End Hospital Automation',
      description: 'Complete automation of clinical and administrative workflows'
    },
    {
      icon: '⚡',
      title: 'Operational Efficiency',
      description: 'Improve clinical turnaround times and operational performance'
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Decision support through advanced analytics and insights'
    },
    {
      icon: '🔒',
      title: 'Data Integrity & Compliance',
      description: 'Ensure data security, auditability, and regulatory compliance'
    },
    {
      icon: '📈',
      title: 'Enterprise-Grade Scalability',
      description: 'Supporting scalable deployments across healthcare organizations'
    },
    {
      icon: '🌐',
      title: 'Unified Digital Ecosystem',
      description: 'Single secure platform for all healthcare workflows'
    }
  ]

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Core Value Proposition</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          VGHIMS is designed to address the critical needs of hospitals by:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
