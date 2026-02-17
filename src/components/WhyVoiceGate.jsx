import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Network, 
  Building2, 
  Activity, 
  ArrowUpRight,
  Hospital,
  Radio,
  Users,
  CheckCircle2,
  Zap,
  TrendingUp,
  Layers,
  Cpu,
  Briefcase,
  Award,
  Sparkles,
  Clock 
} from 'lucide-react';

const WhyVoiceGate = () => {
  const [activeFeature, setActiveFeature] = useState(0);
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
      { threshold: 0.1, rootMargin: '0px' }
    );

    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    
    return () => {
      document.querySelectorAll('[data-observe]').forEach(el => observer.unobserve(el));
    };
  }, []);

  // Defined styles object to ensure Tailwind JIT compatibility
  const featureStyles = {
    slate: {
      bg: 'bg-slate-50/80',
      text: 'text-slate-700',
      border: 'border-slate-300',
      gradient: 'from-slate-600 to-slate-800',
      shadow: 'shadow-slate-500/20',
      pillBg: 'bg-slate-100',
      solidBg: 'bg-slate-700'
    },
    blue: {
      bg: 'bg-blue-50/80',
      text: 'text-blue-600',
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-indigo-600',
      shadow: 'shadow-blue-500/20',
      pillBg: 'bg-blue-100',
      solidBg: 'bg-blue-600'
    },
    emerald: {
      bg: 'bg-emerald-50/80',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      gradient: 'from-emerald-500 to-teal-600',
      shadow: 'shadow-emerald-500/20',
      pillBg: 'bg-emerald-100',
      solidBg: 'bg-emerald-600'
    },
    amber: {
      bg: 'bg-amber-50/80',
      text: 'text-amber-600',
      border: 'border-amber-200',
      gradient: 'from-amber-500 to-orange-600',
      shadow: 'shadow-amber-500/20',
      pillBg: 'bg-amber-100',
      solidBg: 'bg-amber-600'
    },
    purple: {
      bg: 'bg-purple-50/80',
      text: 'text-purple-600',
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-violet-600',
      shadow: 'shadow-purple-500/20',
      pillBg: 'bg-purple-100',
      solidBg: 'bg-purple-600'
    }
  };

  const features = [
    {
      id: 0,
      icon: Shield,
      title: "Mission-Critical Emergency Communication",
      description: "Proven expertise in life-critical systems with 99.99% uptime and redundant failover protocols.",
      metrics: [
        { label: "System Uptime", value: "99.99%", icon: Clock },
        { label: "Response Time", value: "< 30s", icon: Zap },
        { label: "Success Rate", value: "100%", icon: CheckCircle2 }
      ],
      capabilities: ["Redundant Architecture", "Auto-failover", "24/7 Monitoring"],
      style: featureStyles.slate
    },
    {
      id: 1,
      icon: Network,
      title: "Resilient Telecom & Voice Infrastructure",
      description: "Carrier-grade voice architecture with multi-layer redundancy and automatic disaster recovery.",
      metrics: [
        { label: "Network Redundancy", value: "5x", icon: Layers },
        { label: "Voice Quality", value: "MOS 4.5", icon: TrendingUp },
        { label: "Recovery Time", value: "< 2min", icon: Clock }
      ],
      capabilities: ["Geo-Redundancy", "Load Balancing", "QoS Optimization"],
      style: featureStyles.blue
    },
    {
      id: 2,
      icon: Building2,
      title: "Large-Scale Deployments",
      description: "Trusted by leading hospitals, airports, and public sector organizations globally.",
      metrics: [
        { label: "Hospitals", value: "250+", icon: Hospital },
        { label: "Airports", value: "45+", icon: Briefcase },
        { label: "Users", value: "500K+", icon: Users }
      ],
      capabilities: ["Enterprise Rollout", "Legacy Integration", "Staff Training"],
      style: featureStyles.emerald
    },
    {
      id: 3,
      icon: Activity,
      title: "Rapid Response Coordination",
      description: "Seamless inter-departmental communication enabling sub-minute emergency response times.",
      metrics: [
        { label: "Response Time", value: "< 60s", icon: Radio },
        { label: "Departments", value: "24/7", icon: Layers },
        { label: "Coordination", value: "Real-time", icon: Zap }
      ],
      capabilities: ["Priority Routing", "Emergency Groups", "Live Tracking"],
      style: featureStyles.amber
    },
    {
      id: 4,
      icon: Cpu,
      title: "Scalable Architectures",
      description: "Future-ready infrastructure designed to grow linearly with your enterprise needs.",
      metrics: [
        { label: "Scalability", value: "Unlimited", icon: TrendingUp },
        { label: "Integration", value: "API-first", icon: Cpu },
        { label: "Growth", value: "Linear", icon: Activity }
      ],
      capabilities: ["Microservices", "Cloud-native", "Auto-scaling"],
      style: featureStyles.purple
    }
  ];

  const activeData = features[activeFeature];
  const activeStyle = activeData.style;

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-slate-50">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div 
          id="header" 
          data-observe="header" 
          className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 transform ${
            isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-slate-700 tracking-wide">TRUSTED BY HEALTHCARE LEADERS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-slate-900">Why VoiceGate for</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Emergency Management
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            VoiceGate Technologies brings proven expertise in mission-critical communications, 
            delivering unparalleled reliability and performance.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24">
          
          {/* Feature Navigation - Left Side */}
          <div 
            id="nav" 
            data-observe="nav" 
            className={`lg:col-span-5 space-y-3 transition-all duration-1000 delay-200 transform ${
              isVisible.nav ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {features.map((feature, index) => {
              const isActive = activeFeature === index;
              const style = feature.style;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                    isActive 
                      ? `bg-gradient-to-r ${style.gradient} border-transparent shadow-xl ${style.shadow}` 
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 backdrop-blur-sm' 
                        : style.bg
                    }`}>
                      <feature.icon className={`w-6 h-6 transition-colors ${
                        isActive ? 'text-white' : style.text
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-bold text-lg transition-colors ${
                          isActive ? 'text-white' : 'text-slate-800'
                        }`}>
                          {feature.title}
                        </h3>
                        <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
                          isActive 
                            ? 'text-white/80 rotate-[-45deg]' 
                            : 'text-slate-300 group-hover:text-slate-500 group-hover:rotate-[-45deg]'
                        }`} />
                      </div>
                      <p className={`text-sm mt-1 transition-colors ${
                        isActive ? 'text-white/80' : 'text-slate-500'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Feature Showcase - Right Side */}
          <div 
            id="display" 
            data-observe="display" 
            className={`lg:col-span-7 transition-all duration-1000 delay-400 transform ${
              isVisible.display ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="sticky top-24 h-full">
              <div className={`relative h-full ${activeStyle.bg} rounded-3xl border ${activeStyle.border} p-8 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-500`}>
                
                {/* Decorative background glow */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${activeStyle.gradient} rounded-full blur-3xl opacity-20 transition-all duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className={`p-4 bg-gradient-to-br ${activeStyle.gradient} rounded-2xl shadow-lg`}>
                      {React.createElement(activeData.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                        {activeData.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">Operational Excellence</p>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    {activeData.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white shadow-sm hover:shadow-md transition-shadow">
                        <metric.icon className={`w-5 h-5 mb-2 ${activeStyle.text}`} />
                        <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 tracking-tight break-words">{metric.value}</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wider break-words">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Key Capabilities</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeData.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-full text-sm font-medium border ${activeStyle.pillBg} ${activeStyle.text} border-white/50 shadow-sm transition-transform hover:scale-105`}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Stats Footer */}
        <div 
          id="stats" 
          data-observe="stats" 
          className={`grid md:grid-cols-4 gap-6 transition-all duration-1000 delay-600 transform ${
            isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            { label: 'Healthcare Facilities', value: '450+', icon: Hospital, gradient: 'from-blue-500 to-cyan-500' },
            { label: 'Emergency Responses', value: '2.5M+', icon: Radio, gradient: 'from-rose-500 to-pink-500' },
            { label: 'System Availability', value: '99.99%', icon: Shield, gradient: 'from-emerald-500 to-teal-500' },
            { label: 'Integration Partners', value: '120+', icon: Network, gradient: 'from-violet-500 to-purple-500' }
          ].map((stat, idx) => (
            <div key={idx} className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} text-white shadow-sm`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              
              {/* Bottom Progress Line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyVoiceGate;