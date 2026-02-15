// Header Component
export const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="brand-name">VGHIMS</h1>
          <p className="brand-tagline">Intelligent ERP for Hospitals</p>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#clinical">Clinical</a></li>
            <li><a href="#advanced">Advanced</a></li>
            <li><a href="#financial">Financial</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

// Hero Component
export const Hero = () => {
  const handleScheduleDemo = () => {
    alert('Demo scheduled! Our team will contact you soon.')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>A Comprehensive Digital Platform for Smart Healthcare Delivery</h2>
          <p>Enterprise Hospitals Intelligence Management System (HIMS) engineered to support digitization, automation, interoperability, and regulatory compliance</p>
          <button className="cta-button" onClick={handleScheduleDemo}>Schedule Demo</button>
        </div>
      </div>
    </section>
  )
}

// Value Card Component
export const ValueCard = ({ icon, title, description }) => (
  <div className="value-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)

// Core Value Proposition Section
export const ValueProposition = () => {
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
    <section id="overview" className="section value-proposition">
      <div className="container">
        <h2 className="section-title">Core Value Proposition</h2>
        <p className="section-subtitle">VGHIMS is designed to address the critical needs of hospitals by:</p>
        <div className="grid-3">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Module Card Component
export const ModuleCard = ({ title, items }) => (
  <div className="module-card">
    <h3>{title}</h3>
    <ul className="module-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

// Clinical Modules Section
export const ClinicalModules = () => {
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
    <section id="clinical" className="section clinical-modules">
      <div className="container">
        <h2 className="section-title">Core Clinical Modules</h2>
        <div className="modules-grid">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Advanced Modules Section
export const AdvancedModules = () => {
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
    <section id="advanced" className="section advanced-modules">
      <div className="container">
        <h2 className="section-title">Advanced & High-End Modules</h2>
        <div className="modules-grid">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Feature Item Component
export const FeatureItem = ({ icon, title, description }) => (
  <div className="feature-item">
    <h4>{icon} {title}</h4>
    <p>{description}</p>
  </div>
)

// Financial Modules Section
export const FinancialModules = () => {
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
    <section id="financial" className="section financial-modules">
      <div className="container">
        <h2 className="section-title">Financial, Insurance & Revenue Cycle Management</h2>
        <p className="section-subtitle">Comprehensive Revenue Cycle Management (RCM) including:</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

// AI Intelligence Section
export const AIIntelligence = () => {
  return (
    <section className="section ai-intelligence">
      <div className="container">
        <h2 className="section-title">AI-Driven Intelligence Layer</h2>
        <p className="section-subtitle">Embedded AI capabilities to enhance clinical and administrative efficiency:</p>
        <div className="grid-2">
          <div className="ai-feature">
            <h3>🤖 Clinical Support</h3>
            <ul>
              <li>AI-assisted Doctor Notes</li>
              <li>AI-based Clinical Order Entry</li>
            </ul>
          </div>
          <div className="ai-feature">
            <h3>📈 Analytics & Quality</h3>
            <ul>
              <li>AI Health Analytics & Decision Support</li>
              <li>Quality, Compliance & Clinical Audit Automation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// HR Management Section
export const HRManagement = () => {
  return (
    <section className="section hr-management">
      <div className="container">
        <h2 className="section-title">Human Resource & Workforce Management</h2>
        <div className="grid-2">
          <div className="hr-feature">
            <h3>👥 Staff Management</h3>
            <ul className="hr-list">
              <li>Biometric Attendance & Duty Roster</li>
              <li>Leave & Payroll Management</li>
            </ul>
          </div>
          <div className="hr-feature">
            <h3>📚 Development & Compliance</h3>
            <ul className="hr-list">
              <li>Training, Credentialing & Performance Appraisal</li>
              <li>Compliance-aligned HR documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// Integration Item Component
export const IntegrationItem = ({ icon, title }) => (
  <div className="integration-item">
    <span className="badge">{icon}</span>
    <p>{title}</p>
  </div>
)

// Interoperability Section
export const Interoperability = () => {
  const integrations = [
    { icon: '🔌', title: 'FHIR-aligned APIs' },
    { icon: '🔬', title: 'Lab Equipment Integration' },
    { icon: '📸', title: 'Biometric & QR Code Integration' },
    { icon: '🖼️', title: 'PACS Integration' },
    { icon: '💬', title: 'WhatsApp, SMS & Email Gateways' },
    { icon: '🎥', title: 'Telemedicine & Virtual Consultation' }
  ]

  return (
    <section className="section interoperability">
      <div className="container">
        <h2 className="section-title">Interoperability & System Integrations</h2>
        <p className="section-subtitle">Seamless interoperability through:</p>
        <div className="integration-grid">
          {integrations.map((integration, index) => (
            <IntegrationItem key={index} {...integration} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Compliance Section
export const Compliance = () => {
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
    <section className="section compliance">
      <div className="container">
        <h2 className="section-title">Regulatory Compliance & Standards Alignment</h2>
        <p className="section-subtitle">Architected to comply with global and national healthcare standards:</p>
        <div className="compliance-grid">
          {complianceItems.map((item, index) => (
            <div key={index} className="compliance-item">
              <h4>{item.icon} {item.title}</h4>
              <ul>
                {item.items.map((subitem, subindex) => (
                  <li key={subindex}>{subitem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Security Section
export const Security = () => {
  const securityItems = [
    {
      icon: '🔐',
      title: 'Role-based Security Architecture',
      description: 'Strict access governance and control'
    },
    {
      icon: '📝',
      title: 'End-to-End Audit Logging',
      description: 'Complete audit trails for compliance'
    },
    {
      icon: '🔍',
      title: 'Data Traceability',
      description: 'Clinical and financial data traceability'
    }
  ]

  return (
    <section className="section security">
      <div className="container">
        <h2 className="section-title">Data Security & Governance</h2>
        <p className="section-subtitle">Robust healthcare data protection through:</p>
        <div className="security-features">
          {securityItems.map((item, index) => (
            <div key={index} className="security-item">
              <div className="security-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why VoiceGate Section
export const WhyVoiceGate = () => {
  const expertise = [
    { icon: '🚨', title: 'Emergency Systems', description: 'Mission-critical emergency communication systems' },
    { icon: '🌐', title: 'Infrastructure', description: 'Resilient telecom and voice infrastructure' },
    { icon: '📍', title: 'Scale & Expertise', description: 'Large-scale deployments across hospitals, airports, and public sector' },
    { icon: '⚡', title: 'Rapid Response', description: 'Quick response and inter-departmental coordination' },
    { icon: '📈', title: 'Scalability', description: 'Scalable architectures for growing healthcare enterprises' },
    { icon: '🏆', title: 'Track Record', description: '28+ years of proven IT and telecom solutions expertise' }
  ]

  return (
    <section className="section voicegate">
      <div className="container">
        <h2 className="section-title">Why VoiceGate for Hospital Emergency & Services Management?</h2>
        <p className="section-subtitle">VoiceGate Technologies brings proven expertise in:</p>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <div key={index} className="expertise-card">
              <h3>{item.icon} {item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="company-info">
          <p className="company-tagline">A trusted IT and telecom solutions provider for the past 28 years, with successful implementations in Airports, Banking and Financial Institutes, Industries, and major hospital networks</p>
        </div>
      </div>
    </section>
  )
}

// Contact Section
export const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <a href="mailto:info@voicegateindia.com">info@voicegateindia.com</a>
          </div>
          <div className="contact-item">
            <h3>📱 Mobile</h3>
            <div className="mobile-links">
              <a href="tel:+919533333956">+91 9533333956</a>
              <span> or </span>
              <a href="tel:+919848014835">+91 9848014835</a>
            </div>
          </div>
          <div className="contact-item">
            <h3>🌐 Website</h3>
            <a href="http://www.vghmis.in" target="_blank" rel="noopener noreferrer">www.vghmis.in</a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2026 VoiceGate Technologies India Pvt. Ltd. All rights reserved.</p>
      <p>Delivering Smart Healthcare Solutions</p>
    </div>
  </footer>
)
