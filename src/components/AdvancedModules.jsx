import ModuleCard from './ModuleCard'

const AdvancedModules = () => {
  const modules = [
    {
      title: 'Operations & Safety',
      items: ['Central Sterile Supply Department (CSSD)', 'Incident Reporting & Patient Safety', 'Infection Control & Surveillance', 'Engineering & Biomedical Maintenance']
    },
    {
      title: 'Asset & Infrastructure',
      items: ['Housekeeping & Laundry Operations', 'Asset & Inventory Management', 'Ward & Bed Management', 'MIS & Reporting Frameworks']
    }
  ]

  return (
    <section id="advanced" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Advanced & High-End Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvancedModules
