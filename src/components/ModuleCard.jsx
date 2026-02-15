const ModuleCard = ({ title, items }) => (
  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
    <h3 className="text-2xl font-bold text-blue-600 mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-blue-500 mr-3 mt-1">▸</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default ModuleCard
