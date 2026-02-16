import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  User, 
  AtSign, 
  FileText, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  Building2
} from 'lucide-react';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  // ========== EMAIL JS CONFIGURATION ==========
  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_l8we60e'; 
  const TEMPLATE_ID = 'template_ryzjvc4';
  const PUBLIC_KEY = 'fdgkTGpP2SeawVlT_';
  // =============================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          setFormData({ user_name: '', user_email: '', subject: '', message: '' }); // Reset form
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "Visit Our Office",
      details: ["123 Healthcare Innovation Hub", "Tech Park, Suite 400", "New York, NY 10001"],
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@voicegate.com", "support@vghims.com"],
      href: "mailto:info@voicegate.com",
      color: "purple"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      href: "tel:+15551234567",
      color: "emerald"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 text-sm font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            We'd love to hear from you
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question about VGHIMS or need a demo? Our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex gap-5"
              >
                <div className={`w-14 h-14 rounded-xl bg-${info.color}-50 text-${info.color}-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                  {info.details.map((line, idx) => (
                    <p key={idx} className="text-slate-600 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder / Illustration */}
            <div className="relative h-64 bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 group cursor-pointer hover:shadow-xl transition-all">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Office Location" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">View on Google Maps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10 relative overflow-hidden">
              
              {/* Decorative gradient orb */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                  <p className="text-slate-500 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 text-emerald-700">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully! We will contact you soon.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-700">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Failed to send message. Please check your inputs or try again later.</span>
                  </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  
                  {/* Grid Inputs */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <User className="w-5 h-5" />
                        </div>
                        <input 
                          type="text" 
                          name="user_name" 
                          value={formData.user_name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <AtSign className="w-5 h-5" />
                        </div>
                        <input 
                          type="email" 
                          name="user_email" 
                          value={formData.user_email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <FileText className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <div className="relative">
                      <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-slate-400">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea 
                        name="message" 
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" 
                        placeholder="Write your message here..."
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;