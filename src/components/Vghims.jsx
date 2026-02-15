import React, { useState, useEffect } from 'react';
import {
  Activity,
  Shield,
  TrendingUp,
  Clock,
  Users,
  FileText,
  BarChart3,
  Settings,
  Database,
  Lock,
  Stethoscope,
  Pill,
  ClipboardList,
  Calendar,
  DollarSign,
  PieChart,
  Cpu,
  Network,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  Server,
  Smartphone,
  Cloud,
  UserCheck,
  HeartPulse,
  Brain,
  Microscope,
  Syringe,
  Ambulance,
  Truck,
  Droplet,
  Utensils,
  Scissors,
  Wrench,
  Receipt,
  Calculator,
  TrendingUp as TrendingIcon,
  FileSignature,
  LineChart
} from 'lucide-react';

const VGHIMS = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      icon: Zap,
      title: "End-to-End Hospital Automation",
      description: "Complete digital transformation of clinical and administrative workflows",
      gradient: "from-amber-500 to-orange-500",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600"
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Reduced clinical turnaround times and optimized resource utilization",
      gradient: "from-blue-500 to-indigo-500",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Activity,
      title: "Real-Time Analytics",
      description: "AI-powered decision support with predictive insights and dashboards",
      gradient: "from-emerald-500 to-teal-500",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      icon: Shield,
      title: "Data Integrity & Compliance",
      description: "HIPAA-compliant, auditable, and secure patient data management",
      gradient: "from-purple-500 to-violet-500",
      lightBg: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Server,
      title: "Enterprise-Grade Scalability",
      description: "Multi-facility support with cloud-native architecture",
      gradient: "from-red-500 to-rose-500",
      lightBg: "bg-red-50",
      textColor: "text-red-600"
    }
  ];

  const stats = [
    { value: '99.99%', label: 'System Uptime', icon: Server, color: 'blue' },
    { value: '< 30s', label: 'Response Time', icon: Zap, color: 'emerald' },
    { value: '500+', label: 'Hospitals Deployed', icon: Globe, color: 'amber' },
    { value: '2.5M+', label: 'Patients Served', icon: Users, color: 'purple' },
    { value: '24/7', label: 'Support Available', icon: Clock, color: 'red' },
    { value: '100%', label: 'HIPAA Compliant', icon: Shield, color: 'indigo' }
  ];

  const modules = [
    {
      category: "Clinical Modules",
      icon: Stethoscope,
      items: [
        { name: "EHR/EMR", description: "Comprehensive electronic health records", icon: FileText, color: "blue" },
        { name: "OPD/IPD Management", description: "Patient flow and bed management", icon: Users, color: "emerald" },
        { name: "LIS (Laboratory)", description: "Integrated lab information system", icon: Microscope, color: "amber" },
        { name: "RIS/PACS", description: "Radiology and medical imaging", icon: Brain, color: "purple" },
        { name: "Pharmacy Management", description: "End-to-end medication tracking", icon: Pill, color: "red" },
        { name: "OT Management", description: "Operation theater scheduling", icon: Syringe, color: "indigo" }
      ]
    },
    {
      category: "Administrative Modules",
      icon: ClipboardList,
      items: [
        { name: "Patient Registration", description: "Digital patient intake and CRM", icon: UserCheck, color: "blue" },
        { name: "Appointment Scheduling", description: "Intelligent calendar management", icon: Calendar, color: "emerald" },
        { name: "Billing & Insurance", description: "Automated claims and TPA processing", icon: DollarSign, color: "amber" },
        { name: "Inventory Management", description: "Medical supplies and equipment tracking", icon: Database, color: "purple" },
        { name: "HR & Payroll", description: "Staff management and payroll", icon: Users, color: "red" },
        { name: "Procurement", description: "Vendor and purchase management", icon: Truck, color: "indigo" }
      ]
    },
    {
      category: "Operational Modules",
      icon: Settings,
      items: [
        { name: "Emergency Services", description: "ER triage and ambulance tracking", icon: Ambulance, color: "blue" },
        { name: "Bed Management", description: "Real-time bed availability", icon: HeartPulse, color: "emerald" },
        { name: "Blood Bank", description: "Donor and inventory management", icon: Droplet, color: "amber" },
        { name: "Dietary Services", description: "Patient meal planning", icon: Utensils, color: "purple" },
        { name: "Laundry & Linen", description: "Asset tracking and management", icon: Scissors, color: "red" },
        { name: "Maintenance", description: "Equipment maintenance scheduling", icon: Wrench, color: "indigo" }
      ]
    },
    {
      category: "Financial Modules",
      icon: BarChart3,
      items: [
        { name: "Revenue Cycle", description: "End-to-end revenue management", icon: Receipt, color: "blue" },
        { name: "Accounting", description: "General ledger and accounts", icon: Calculator, color: "emerald" },
        { name: "Budgeting", description: "Financial planning and forecasting", icon: TrendingIcon, color: "amber" },
        { name: "Claims Management", description: "Insurance and TPA claims", icon: FileSignature, color: "purple" },
        { name: "Financial Analytics", description: "Profitability and cost analysis", icon: LineChart, color: "red" },
        { name: "Audit Trail", description: "Compliance and audit logging", icon: Lock, color: "indigo" }
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div 
          id="hero" 
          data-observe="hero"
          className={`text-center max-w-5xl mx-auto mb-20 transition-all duration-1000 transform ${
            isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 backdrop-blur-sm mb-8">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">VGHIMS ENTERPRISE</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              VGHIMS
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              VoiceGate Hospitals Intelligence
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-slate-700 font-medium">
              Management System
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            A Comprehensive Digital Platform for Smart Healthcare Delivery
          </p>

          {/* Description */}
          <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
            VGHIMS is a next-generation enterprise Hospital Information and Management System (HIMS) 
            engineered to support digitization, automation, interoperability, and regulatory compliance 
            across modern healthcare organizations.
          </p>
        </div>

        {/* Core Value Proposition */}
        <div className="mb-20">
          <div 
            id="values-header" 
            data-observe="values-header"
            className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-200 transform ${
              isVisible['values-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Core Value Proposition
            </h2>
            <p className="text-lg text-slate-600">
              VGHIMS is designed to address the critical needs of hospitals by:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  data-observe={`value-${index}`}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 ${
                    isVisible[`value-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`relative mb-6 inline-block p-4 ${value.lightBg} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-8 h-8 ${value.textColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  data-observe={`stat-${index}`}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300 ${
                    isVisible[`stat-${index}`] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`p-3 bg-${stat.color}-50 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 text-${stat.color}-600`} />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comprehensive Module Architecture */}
        <div className="mb-20">
          <div 
            id="modules-header" 
            data-observe="modules-header"
            className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-600 transform ${
              isVisible['modules-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Module Architecture
            </h2>
            <p className="text-lg text-slate-600">
              The platform consolidates clinical, administrative, operational, and financial workflows 
              into a single, secure, unified digital ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {modules.map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                data-observe={`module-${moduleIndex}`}
                className={`bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-1000 ${
                  isVisible[`module-${moduleIndex}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${700 + moduleIndex * 200}ms` }}
              >
                {/* Module Header */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <module.icon className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">{module.category}</h3>
                  </div>
                </div>

                {/* Module Items */}
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {module.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={itemIndex}
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300"
                        >
                          <div className={`p-2 bg-${item.color}-50 rounded-lg group-hover:scale-110 transition-transform shrink-0`}>
                            <ItemIcon className={`w-4 h-4 text-${item.color}-600`} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-slate-900 text-sm mb-0.5">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unified Digital Ecosystem */}
        <div 
          id="ecosystem" 
          data-observe="ecosystem"
          className={`transition-all duration-1000 delay-800 transform ${
            isVisible.ecosystem ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
            
            <div className="relative">
              <div className="text-center text-white mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Unified Digital Ecosystem
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                  Secure, integrated platform connecting all healthcare delivery touchpoints
                </p>
              </div>

              {/* Ecosystem Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { icon: Stethoscope, label: "Clinical", color: "blue" },
                  { icon: ClipboardList, label: "Administrative", color: "emerald" },
                  { icon: Settings, label: "Operational", color: "amber" },
                  { icon: BarChart3, label: "Financial", color: "purple" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="group relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className={`inline-flex p-3 bg-${item.color}-500/20 rounded-xl mb-3 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="text-white font-semibold text-sm md:text-base">{item.label}</div>
                        <div className="text-xs text-slate-400 mt-1">Integrated</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Security Badge */}
              <div className="flex justify-center mt-8">
                <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
                  <Lock className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                  <span className="text-xs md:text-sm text-emerald-300">HIPAA Compliant • End-to-End Encryption • Audit Trail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VGHIMS;