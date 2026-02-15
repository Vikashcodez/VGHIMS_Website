const IntegrationItem = ({ icon, title }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex items-center">
    <span className="text-4xl mr-4 bg-blue-100 p-3 rounded-lg">{icon}</span>
    <p className="text-gray-700 font-semibold">{title}</p>
  </div>
)

export default IntegrationItem
