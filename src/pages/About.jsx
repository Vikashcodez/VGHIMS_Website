import React from 'react';
import {
  Activity,
  Shield,
  BarChart3,
  Users,
  Network,
  Layers,
  HeartPulse,
  Cpu,
  Award,
  Target,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const AboutVGHIMS = () => {
  
  // Core Pillars Data
  const pillars = [
    {
      icon: Layers,
      title: "Digitization",
      description: "Transforming paper-based records into unified digital assets, ensuring accessibility and longevity.",
      color: "blue"
    },
    {
      icon: Cpu,
      title: "Automation",
      description: "Streamlining repetitive clinical and administrative tasks to reduce human error and operational costs.",
      color: "purple"
    },
    {
      icon: Network,
      title: "Interoperability",
      description: "Seamless data exchange between departments, labs, pharmacies, and external healthcare entities.",
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Built-in adherence to global standards (HIPAA, GDPR) and local regulatory frameworks.",
      color: "emerald"
    }
  ];

  // Why VoiceGate Data
  const strengths = [
    {
      icon: Target,
      title: "Vision-Driven Innovation",
      text: "We don't just build software; we engineer the future of healthcare infrastructure."
    },
    {
      icon: HeartPulse,
      title: "Patient-Centricity",
      text: "Every module is designed with the ultimate goal of improving patient outcomes."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      text: "We work alongside healthcare providers to tailor solutions that fit real-world needs."
    }
  ];

  return (
    <section className="relative bg-slate-50 overflow-hidden">
      
      {/* 1. Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-blue-50">
        {/* Background Gradients - Removed for blue-50 background */}
        
        {/* Grid Pattern - Subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20 pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600">VoiceGate Technologies Presents</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight leading-tight">
            Redefining <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Healthcare Intelligence
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            VGHIMS is a next-generation enterprise platform engineered to support digitization, 
            automation, and regulatory compliance across modern healthcare organizations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 hover:from-orange-600 hover:to-orange-700">
              Explore Platform <ArrowRight className="w-4 h-4" />
            </button> */}
            {/* <button className="px-8 py-4 bg-white border border-slate-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 shadow-md">
              Our Story
            </button> */}
          </div>
        </div>
      </div>

      {/* 2. Intro Content Block */}
      <div className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Floating Glass Card */}
          <div className="relative group -mt-32 mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-white/80 backdrop-blur-2xl border border-white rounded-3xl shadow-2xl p-8 md:p-14">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">About VGHIMS</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6 tracking-tight">
                    A Comprehensive Digital Platform
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    The platform consolidates clinical, administrative, operational, and financial workflows into a single, secure, unified digital ecosystem. This enables healthcare institutions to deliver safe, efficient, and high-quality patient care.
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    Built for the demands of modern medicine, VGHIMS ensures revenue optimization and statutory compliance without compromising on user experience or patient safety.
                  </p>
                </div>
                
                <div className="relative">
                   {/* Abstract UI Mockup */}
                   <div className="relative w-full h-80 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
                      <div className="absolute top-0 left-0 right-0 h-12 bg-slate-900 flex items-center px-4 gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400" />
                         <div className="w-3 h-3 rounded-full bg-amber-400" />
                         <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="p-4 pt-16 space-y-3">
                         <div className="h-4 w-1/2 bg-slate-200 rounded" />
                         <div className="h-4 w-3/4 bg-slate-200 rounded" />
                         <div className="h-20 w-full bg-blue-50 rounded-lg border border-blue-100 mt-4 flex items-center justify-center">
                           <Activity className="w-8 h-8 text-blue-300" />
                         </div>
                         <div className="grid grid-cols-2 gap-3">
                            <div className="h-16 bg-white rounded-lg shadow-sm border border-slate-100" />
                            <div className="h-16 bg-white rounded-lg shadow-sm border border-slate-100" />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Core Pillars Grid */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Our Core Philosophy</h3>
              <p className="text-slate-500 mt-3">Engineered on four foundational pillars to drive healthcare excellence.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color === 'blue' ? 'from-blue-500 to-cyan-500' : pillar.color === 'purple' ? 'from-purple-500 to-pink-500' : pillar.color === 'cyan' ? 'from-cyan-500 to-teal-500' : 'from-emerald-500 to-green-500'}`} />
                  
                  <div className={`w-12 h-12 rounded-xl bg-${pillar.color}-50 text-${pillar.color}-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. About VoiceGate (Company) Section */}
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]}" />
            
            <div className="relative grid md:grid-cols-2 gap-12 p-10 md:p-16">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300 mb-6 border border-white/10">
                  <Award className="w-3 h-3 text-blue-400" />
                  THE TEAM BEHIND THE TECH
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">VoiceGate?</span>
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  VoiceGate Technologies is a premier software solution provider dedicated to the healthcare sector. With decades of domain expertise, we understand the intricate balance between clinical care and operational efficiency.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Our mission extends beyond software delivery. We act as strategic partners to hospitals, clinics, and healthcare networks, guiding them through the complex journey of digital transformation with robust support and continuous innovation.
                </p>
              </div>

              {/* Right Content - Strengths */}
              <div className="space-y-6">
                {strengths.map((item, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.text}</p>
                    </div>
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

export default AboutVGHIMS;