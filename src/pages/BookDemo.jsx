import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  MapPin, 
  FileText, 
  MessageSquare, 
  Send, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';

const BookDemo = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone_number: '',
    company: '',
    address: '',
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
    
    // Basic validation check
    const { user_name, user_email, phone_number, company, subject, message } = formData;
    if (!user_name || !user_email || !phone_number || !company || !subject || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setStatus('loading');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          setFormData({ 
            user_name: '', 
            user_email: '', 
            phone_number: '',
            company: '',
            address: '',
            subject: '',
            message: '' 
          });
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="bookDemo" className="relative min-h-screen bg-slate-50 py-16 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size=40px_40px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          
          {/* Left Side: Promotional Content */}
          <div className="lg:col-span-2 hidden lg:flex flex-col justify-center h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-xl transform -translate-x-10 translate-y-10" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-6 border border-white/20">
                <Calendar className="w-3 h-3" />
                Limited Slots Available
              </div>
              
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Experience the Future of Healthcare Management
              </h2>
              
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Schedule a one-on-one demo with our solution experts. See how VGHIMS can streamline your clinical and operational workflows.
              </p>

              <div className="space-y-4">
                {[
                  "Personalized walkthrough of features",
                  "ROI analysis for your organization",
                  "Live Q&A with product specialists"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form Container */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10 relative">
            
            <div className="mb-8 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Book Your Demo
              </h3>
              <p className="text-slate-500 mt-2">
                Fill in your details and our team will get in touch shortly.
              </p>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 text-emerald-700 animate-in fade-in duration-300">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Demo Request Sent!</h4>
                  <p className="text-sm">Our team will contact you within 24 hours.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-700">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Submission Failed</h4>
                  <p className="text-sm">Please fill all required fields and try again.</p>
                </div>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      name="user_name" 
                      value={formData.user_name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input 
                      type="email" 
                      name="user_email" 
                      value={formData.user_email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input 
                      type="tel" 
                      name="phone_number" 
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company / Organization <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                      placeholder="Healthcare Inc."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Address */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Address</label>
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    name="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                    placeholder="123 Business St, City, Country"
                  />
                </div>
              </div>

              {/* Row 4: Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                    placeholder="Request for VGHIMS Demo"
                    required
                  />
                </div>
              </div>

              {/* Row 5: Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-slate-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" 
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Book My Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;