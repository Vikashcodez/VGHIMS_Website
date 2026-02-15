const FeatureItem = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
    <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
      <span className="text-2xl mr-3">{icon}</span>
      {title}
    </h4>
    <p className="text-gray-600 ml-11">{description}</p>
  </div>
)

export default FeatureItem
