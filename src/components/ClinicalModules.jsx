import ModuleCard from './ModuleCard'

const ClinicalModules = () => {
  const modules = [
    {
      title: 'Patient Management',
      items: ['OPD & IPD Registration', 'Emergency & Casualty Management', 'Appointment Scheduling', 'Doctor Scheduler']
    },
    {
      title: 'Clinical Services',
      items: ['Nursing Management System', 'Electronic Medical Records (EMR)', 'Laboratory Information System (LIS)', 'Radiology Information System (RIS)']
    },
    {
      title: 'Support Services',
      items: ['Pharmacy Management', 'Blood Bank Management', 'Dietary & Kitchen Management', 'Patient Portal & HIE']
    }
  ]

  return (
    <section id="clinical" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Core Clinical Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClinicalModules
