import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Network, 
  Building2, 
  Activity, 
  ArrowUpRight,
  Hospital,
  Radio,
  HeartPulse,
  Globe,
  Clock,
  Users,
  CheckCircle2,
  Zap,
  TrendingUp,
  Layers,
  Cpu,
  Briefcase,
  Award
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe elements with data-observe attribute
    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    
    return () => {
      document.querySelectorAll('[data-observe]').forEach(el => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      id: 0,
      icon: Shield,
      title: "Mission-Critical Emergency Communication",
      description: "Proven expertise in life-critical systems with 99.99% uptime and redundant failover protocols",
      metrics: [
        { label: "System Uptime", value: "99.99%", icon: Clock },
        { label: "Response Time", value: "< 30s", icon: Zap },
        { label: "Success Rate", value: "100%", icon: CheckCircle2 }
      ],
      capabilities: ["Redundant Architecture", "Auto-failover", "24/7 Monitoring"],
      color: "red",
      bgColor: "bg-red-50",
      lightBg: "bg-red-50/30",
      borderColor: "border-red-200",
      textColor: "text-red-600",
      gradientFrom: "from-red-500",
      gradientTo: "to-rose-600",
      shadowColor: "shadow-red-500/20"
    },
    {
      id: 1,
      icon: Network,
      title: "Resilient Telecom & Voice Infrastructure",
      description: "Carrier-grade voice architecture with multi-layer redundancy and automatic disaster recovery protocols",
      metrics: [
        { label: "Network Redundancy", value: "5x", icon: Layers },
        { label: "Voice Quality", value: "MOS 4.5", icon: TrendingUp },
        { label: "Recovery Time", value: "< 2min", icon: Clock }
      ],
      capabilities: ["Geo-Redundancy", "Load Balancing", "QoS Optimization"],
      color: "blue",
      bgColor: "bg-blue-50",
      lightBg: "bg-blue-50/30",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600",
      shadowColor: "shadow-blue-500/20"
    },
    {
      id: 2,
      icon: Building2,
      title: "Large-Scale Deployments",
      description: "Trusted by leading hospitals, airports, and public sector organizations with enterprise-wide implementations",
      metrics: [
        { label: "Hospitals", value: "250+", icon: Hospital },
        { label: "Airports", value: "45+", icon: Globe },
        { label: "Users", value: "500K+", icon: Users }
      ],
      capabilities: ["Enterprise Rollout", "Legacy Integration", "Staff Training"],
      color: "emerald",
      bgColor: "bg-emerald-50",
      lightBg: "bg-emerald-50/30",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-teal-600",
      shadowColor: "shadow-emerald-500/20"
    },
    {
      id: 3,
      icon: Activity,
      title: "Rapid Response Coordination",
      description: "Seamless inter-departmental communication enabling sub-minute emergency response times",
      metrics: [
        { label: "Response Time", value: "< 60s", icon: Radio },
        { label: "Departments", value: "24/7", icon: Layers },
        { label: "Coordination", value: "Real-time", icon: Zap }
      ],
      capabilities: ["Priority Routing", "Emergency Groups", "Live Tracking"],
      color: "amber",
      bgColor: "bg-amber-50",
      lightBg: "bg-amber-50/30",
      borderColor: "border-amber-200",
      textColor: "text-amber-600",
      gradientFrom: "from-amber-500",
      gradientTo: "to-orange-600",
      shadowColor: "shadow-amber-500/20"
    },
    {
      id: 4,
      icon: ArrowUpRight,
      title: "Scalable Architectures",
      description: "Future-ready infrastructure that grows with your healthcare enterprise needs",
      metrics: [
        { label: "Scalability", value: "Unlimited", icon: TrendingUp },
        { label: "Integration", value: "API-first", icon: Cpu },
        { label: "Growth", value: "Linear", icon: Activity }
      ],
      capabilities: ["Microservices", "Cloud-native", "Auto-scaling"],
      color: "purple",
      bgColor: "bg-purple-50",
      lightBg: "bg-purple-50/30",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      gradientFrom: "from-purple-500",
      gradientTo: "to-violet-600",
      shadowColor: "shadow-purple-500/20"
    }
  ];

  const getActiveFeature = () => features[activeFeature];

  return (
    <section className="relative min-h-screen pt-8 pb-24 overflow-hidden bg-blue-50">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div 
          id="header" 
          data-observe="header" 
          className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 transform ${
            isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 backdrop-blur-sm mb-8">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide">TRUSTED BY HEALTHCARE LEADERS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Why VoiceGate for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Emergency & Services Management
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            VoiceGate Technologies brings proven expertise in mission-critical communications, 
            delivering unparalleled reliability and performance to healthcare enterprises.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { icon: Award, text: "HIPAA Compliant" },
              { icon: Shield, text: "SOC2 Type II" },
              { icon: Briefcase, text: "Enterprise Ready" }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-slate-200">
                <badge.icon className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Feature Navigation */}
          <div 
            id="nav" 
            data-observe="nav" 
            className={`space-y-4 transition-all duration-1000 delay-200 transform ${
              isVisible.nav ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="text-sm font-semibold text-slate-400 tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-slate-300"></span>
              EXPLORE OUR CAPABILITIES
            </div>
            {features.map((feature, index) => {
              const isActive = activeFeature === index;
              const bgColorClass = isActive ? `bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo}` : 'bg-white hover:bg-slate-50';
              const textColorClass = isActive ? 'text-white' : 'text-slate-900';
              const descriptionColorClass = isActive ? 'text-white/80' : 'text-slate-500';
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative w-full text-left p-6 rounded-2xl transition-all duration-500 ${bgColorClass} ${
                    isActive ? `shadow-2xl scale-105 ${feature.shadowColor}` : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive ? 'bg-white/20' : `bg-${feature.color}-50`
                    }`}>
                      <feature.icon className={`w-6 h-6 ${
                        isActive ? 'text-white' : feature.textColor
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-bold text-lg ${textColorClass}`}>
                          {feature.title}
                        </h3>
                        <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
                          isActive 
                            ? 'text-white translate-x-1 -translate-y-1' 
                            : 'text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1'
                        }`} />
                      </div>
                      <p className={`text-sm ${descriptionColorClass}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-white rounded-full shadow-lg" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Feature Display */}
          <div 
            id="display" 
            data-observe="display" 
            className={`relative transition-all duration-1000 delay-400 transform ${
              isVisible.display ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="sticky top-24">
              <div className={`${getActiveFeature().bgColor} rounded-3xl border ${getActiveFeature().borderColor} p-8 shadow-2xl backdrop-blur-sm`}>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32">
                  <div className={`absolute inset-0 bg-gradient-to-r ${getActiveFeature().gradientFrom} ${getActiveFeature().gradientTo} rounded-full blur-2xl opacity-30 animate-pulse`} />
                  <div className={`absolute inset-4 bg-gradient-to-r ${getActiveFeature().gradientFrom} ${getActiveFeature().gradientTo} rounded-full blur-xl opacity-40`} />
                </div>

                {/* Feature Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-white rounded-2xl shadow-lg`}>
                    {React.createElement(getActiveFeature().icon, { 
                      className: `w-8 h-8 ${getActiveFeature().textColor}` 
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {getActiveFeature().title}
                    </h3>
                    <p className="text-slate-600 mt-1">
                      {getActiveFeature().description}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {getActiveFeature().metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                      <metric.icon className={`w-5 h-5 mx-auto mb-2 ${getActiveFeature().textColor}`} />
                      <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                      <div className="text-xs text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Capabilities */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-500 mb-4">KEY CAPABILITIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {getActiveFeature().capabilities.map((cap, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium border border-white/50 shadow-sm"
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

        {/* Enterprise Stats */}
        <div 
          id="stats" 
          data-observe="stats" 
          className={`grid md:grid-cols-4 gap-6 mb-24 transition-all duration-1000 delay-600 transform ${
            isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            { label: 'Healthcare Facilities', value: '450+', change: '+28%', icon: Hospital, color: 'blue' },
            { label: 'Emergency Responses', value: '2.5M+', change: '+45%', icon: Radio, color: 'red' },
            { label: 'System Availability', value: '99.99%', change: '5x9s', icon: Shield, color: 'emerald' },
            { label: 'Integration Partners', value: '120+', change: '+35%', icon: Network, color: 'purple' }
          ].map((stat, idx) => {
            const bgColorClass = `bg-${stat.color}-50`;
            const textColorClass = `text-${stat.color}-600`;
            
            return (
              <div key={idx} className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-blue-200/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <stat.icon className={`w-5 h-5 ${textColorClass}`} />
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          id="cta" 
          data-observe="cta" 
          className={`text-center transition-all duration-1000 delay-800 transform ${
            isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 cursor-pointer group w-full max-w-2xl mx-auto">
            <div className="text-white">
              <span className="text-sm font-semibold tracking-wider opacity-80">READY TO TRANSFORM?</span>
              <h3 className="text-3xl font-bold mt-2">Schedule an Enterprise Demo</h3>
            </div>
            <button className="px-8 py-4 bg-white rounded-xl text-blue-600 font-semibold shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Connect With Our Healthcare Team</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div> */}
        </div>
      </div>

    </section>
  );
};

export default WhyVoiceGate;