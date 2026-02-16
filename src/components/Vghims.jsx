import React from 'react';
import { 
  Activity, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  Database,
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: "End-to-End Automation",
      description: "Seamless digitization of clinical and administrative workflows.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Operational Efficiency",
      description: "Drastically reduced turnaround times via optimized processes.",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Real-Time Analytics",
      description: "Actionable insights for confident, data-driven decisions.",
      color: "from-cyan-500 to-teal-600"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Compliance & Security",
      description: "Enterprise-grade encryption with comprehensive audit trails.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Scalable Architecture",
      description: "Cloud-native infrastructure built for enterprise scale.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Patient-Centric Care",
      description: "Enhancing patient journeys through digital innovation.",
      color: "from-emerald-500 to-green-600"
    }
  ];

  const benefits = [
    "End-to-end hospital automation",
    "Operational process optimization",
    "Real-time clinical decision support",
    "Data integrity & auditability",
    "Scalable enterprise deployments",
    "Revenue cycle optimization"
  ];

  return (
    <section className="relative py-24 bg-blue-50 overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 text-sm font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
            Enterprise Healthcare Platform
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              VGHIMS?
            </span>
          </h2>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Empowering healthcare institutions with intelligent automation and seamless interoperability.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          
          {/* Feature Cards - Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {reasons.slice(0, 3).map((reason, index) => (
              <FeatureCard key={index} {...reason} align="right" />
            ))}
          </div>

          {/* Center Value Proposition - Glassmorphism Card */}
          <div className="lg:col-span-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-violet-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-8 flex flex-col justify-center shadow-xl transition-all duration-500 hover:shadow-2xl overflow-hidden">
              
              {/* Decorative Gradient Orb */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-violet-500 rounded-full blur-3xl opacity-20" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                  Next-Gen Intelligence
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  VGHIMS is a next-generation enterprise Hospital Information System engineered to support digitization, automation, and regulatory compliance.
                </p>
                
                <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold cursor-pointer group/link">
                  Explore Features 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards - Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {reasons.slice(3, 6).map((reason, index) => (
              <FeatureCard key={index} {...reason} align="left" />
            ))}
          </div>
        </div>

        {/* Key Benefits - Dark Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50 rounded-3xl" />
          
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Measurable Impact</h3>
                <p className="text-slate-400 max-w-md">Real results across healthcare operations</p>
              </div>
              
              {/* Decorative Stats-like elements */}
              <div className="flex gap-8">
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Uptime</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">40%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Efficiency</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-200 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Sub-component for cleaner code
const FeatureCard = ({ icon, title, description, color, align }) => {
  const isRight = align === 'right';
  
  return (
    <div className={`group bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer ${isRight ? 'lg:ml-auto' : ''} max-w-md`}>
      <div className={`flex items-start gap-4 ${isRight ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;