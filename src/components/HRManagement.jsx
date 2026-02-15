const HRManagement = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Human Resource & Workforce Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100">
            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
              <span className="text-3xl mr-3">👥</span>
              Staff Management
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Biometric Attendance & Duty Roster
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Leave & Payroll Management
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
              <span className="text-3xl mr-3">📚</span>
              Development & Compliance
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Training, Credentialing & Performance Appraisal
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Compliance-aligned HR documentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HRManagement
