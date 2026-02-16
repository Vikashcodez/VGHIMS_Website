import React from 'react';
import {
  Stethoscope,
  BrainCircuit,
  Receipt,
  Users,
  Plug,
  ShieldCheck,
  Lock,
  Activity,
  HeartPulse,
  Microscope,
  Building2,
  FileText,
  ClipboardCheck,
  Settings2,
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const ModuleShowcase = () => {
  
  // Data Configuration for cleaner JSX
  const modules = {
    core: {
      title: "Core Clinical Modules",
      icon: Stethoscope,
      color: "blue",
      list: [
        "OPD & IPD Registration", "Emergency & Casualty", "Appointment Scheduling",
        "Nursing Management", "Electronic Medical Records (EMR)", "Laboratory IS (LIS)",
        "Radiology IS (RIS) & PACS", "Pharmacy Management", "Blood Bank Management",
        "Dietary & Kitchen", "Patient Portal & HIE"
      ]
    },
    advanced: {
      title: "Advanced & High-End Modules",
      icon: Settings2,
      color: "purple",
      list: [
        "Central Sterile Supply (CSSD)", "Incident Reporting & Safety",
        "Infection Control", "Engineering & Biomedical",
        "Housekeeping & Laundry", "Asset & Inventory",
        "Ward & Bed Management", "MIS & Reporting Frameworks"
      ]
    },
    financial: {
      title: "Revenue Cycle Management",
      icon: Receipt,
      color: "emerald",
      list: [
        "Tariff & Insurance Contracts", "Claims Processing & TPA",
        "Patient Billing & Invoicing", "Accounts Receivable",
        "Taxation-compliant e-Invoicing", "Audit-ready Finance"
      ]
    },
    hr: {
      title: "HR & Workforce",
      icon: Users,
      color: "amber",
      list: [
        "Biometric Attendance & Roster", "Leave & Payroll",
        "Training & Credentialing", "Performance Appraisal",
        "Compliance Documentation"
      ]
    },
    interop: {
      title: "Interoperability",
      icon: Plug,
      color: "cyan",
      list: [
        "FHIR-aligned APIs", "Lab Equipment Integration",
        "Biometric & QR Integration", "WhatsApp & SMS Gateways",
        "Telemedicine Modules"
      ]
    }
  };

  const ColorMap = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-600' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', gradient: 'from-amber-500 to-orange-600' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', gradient: 'from-cyan-500 to-teal-600' }
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-6 text-sm font-medium text-slate-600">
            <Activity className="w-4 h-4 text-indigo-600" />
            Integrated Healthcare Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Clinical & Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Modules</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A fully integrated suite designed to digitize, automate, and optimize every facet of hospital operations.
          </p>
        </div>

        {/* 1. AI Spotlight Section - Hero Card */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
            
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 rounded-full text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3 h-3" />
                  New Era of Intelligence
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  AI-Driven Intelligence Layer
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Embedded AI capabilities designed to enhance clinical accuracy and administrative speed, shifting from reactive to predictive healthcare management.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-assisted Doctor Notes & Documentation",
                    "Intelligent Clinical Order Entry",
                    "Predictive Health Analytics & Decision Support",
                    "Automated Quality & Compliance Audits"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-sm">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Abstract Representation */}
              <div className="hidden md:block relative h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6 overflow-hidden">
                 {/* Mock UI Elements */}
                 <div className="absolute top-6 left-6 right-6 h-4 bg-indigo-200/50 rounded w-1/2" />
                 <div className="absolute top-14 left-6 right-6 h-12 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center px-4 text-xs text-slate-400 font-mono">
                   Analyzing patient history...
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                    <div className="flex-1 h-20 bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                       <BrainCircuit className="w-6 h-6 text-indigo-400 mb-1" />
                       <span className="text-[10px] text-slate-500">Diagnosis</span>
                    </div>
                    <div className="flex-1 h-20 bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                       <FileText className="w-6 h-6 text-purple-400 mb-1" />
                       <span className="text-[10px] text-slate-500">Reports</span>
                    </div>
                    <div className="flex-1 h-20 bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                       <HeartPulse className="w-6 h-6 text-pink-400 mb-1" />
                       <span className="text-[10px] text-slate-500">Vitals</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          
          {/* Core Clinical - Large Card (2 cols) */}
          <ModuleCard 
            title={modules.core.title} 
            icon={modules.core.icon} 
            list={modules.core.list} 
            style={ColorMap.blue} 
            size="large" 
          />

          {/* Financial - Medium Card */}
          <ModuleCard 
            title={modules.financial.title} 
            icon={modules.financial.icon} 
            list={modules.financial.list} 
            style={ColorMap.emerald} 
            size="medium" 
          />

          {/* HR - Medium Card */}
          <ModuleCard 
            title={modules.hr.title} 
            icon={modules.hr.icon} 
            list={modules.hr.list} 
            style={ColorMap.amber} 
            size="medium" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Advanced - Wide Card */}
          <ModuleCard 
            title={modules.advanced.title} 
            icon={modules.advanced.icon} 
            list={modules.advanced.list} 
            style={ColorMap.purple} 
            size="wide" 
          />
          
          {/* Interoperability - Standard Card */}
          <ModuleCard 
            title={modules.interop.title} 
            icon={modules.interop.icon} 
            list={modules.interop.list} 
            style={ColorMap.cyan} 
            size="default" 
          />
        </div>

        {/* 3. Compliance & Security Footer Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Abstract Decoration */}
            <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              {/* Compliance */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Regulatory Compliance</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["GDPR & HIPAA Ready", "FHIR & ISO Alignment", "ICD-11 & SNOMED CT", "CBAHI & NPHIES", "Comprehensive Audit Trails", "Role-Based Access Control"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                       <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                       <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Data Security & Governance</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Robust healthcare data protection ensuring clinical and financial traceability.
                  </p>
                  {[
                    "Role-based Security Architecture", 
                    "Strict Access Governance", 
                    "End-to-End Audit Logging",
                    "Clinical Data Traceability"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                       <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

// Reusable Module Card Component with Bento Grid Logic
const ModuleCard = ({ title, icon: Icon, list, style, size }) => {
  
  const sizeClasses = {
    large: 'md:col-span-2 row-span-2', // For Core Clinical
    medium: 'md:col-span-1 md:row-span-1', // For Finance/HR
    wide: 'md:col-span-2', // For Advanced
    default: 'md:col-span-1' // For Interop
  };

  // Create a 2-column grid for large lists
  const listClass = list.length > 6 ? 'grid grid-cols-2 gap-x-4 gap-y-2' : 'space-y-2';

  return (
    <div className={`group bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:bg-white transition-all duration-300 hover:shadow-xl hover:border-slate-300 flex flex-col ${sizeClasses[size] || ''}`}>
      
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl ${style.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className={`w-5 h-5 ${style.text}`} />
        </div>
        <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
      </div>

      <div className={`flex-1 ${listClass}`}>
        {list.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${style.gradient}`} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Bottom Accent Line */}
      <div className={`mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium ${style.text} opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}>
        <span>Explore Module</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </div>
  );
};

export default ModuleShowcase;