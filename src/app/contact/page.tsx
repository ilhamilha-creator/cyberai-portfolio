'use client';

import { Mail, Phone, MapPin, Send, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-purple-900/10 to-black" />
      </div>

      {/* Glowing Orb Effect */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/cyberai-hero.jpg" 
              alt="CyberAI Background" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <img 
                src="/images/logo.jpg" 
                alt="CyberAI Logo" 
                className="w-32 h-32 md:w-48 md:h-48 mx-auto object-contain animate-pulse drop-shadow-2xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                CONTACT US
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and find the ideal solution for your AI and cybersecurity needs
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
                <span className="text-green-400 font-mono text-sm">FAST RESPONSE</span>
              </div>
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-mono text-sm">FREE CONSULTATION</span>
              </div>
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
                <span className="text-green-400 font-mono text-sm">24/7 SUPPORT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'ilhamelbaraka70@gmail.com',
                  link: 'mailto:ilhamelbaraka70@gmail.com'
                },
                {
                  icon: Mail,
                  title: 'LinkedIn',
                  value: 'Ilham El Baraka',
                  link: 'https://www.linkedin.com/in/ilham-el-baraka-4aa451346/'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  value: 'Morocco',
                  link: '#'
                }
              ].map((info, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  <a 
                    href={info.link}
                    className="text-gray-400 hover:text-green-400 transition"
                    target={info.link !== '#' ? '_blank' : undefined}
                    rel={info.link !== '#' ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/30 to-green-900/20 backdrop-blur-sm p-12 rounded-3xl border border-purple-500/30">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Send us a message
                </h2>

                {submitted ? (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                    <p className="text-gray-300">We will respond to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition backdrop-blur-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition backdrop-blur-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-green-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition backdrop-blur-sm"
                      >
                        <option value="">Select a subject</option>
                        <option value="project">AI Project</option>
                        <option value="security">Security Audit</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-black/50 border border-green-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition backdrop-blur-sm resize-none"
                        placeholder="Describe your project or needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Follow us
              </h2>
              <p className="text-gray-400">
                Stay connected for the latest AI and cybersecurity news
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/ilham-el-baraka-4aa451346/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-8 h-8 text-green-400" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-green-900/20 to-purple-900/30 backdrop-blur-sm p-12 rounded-3xl border border-green-500/30">
              <Shield className="w-20 h-20 text-green-400 mx-auto mb-8 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                READY TO SECURE YOUR FUTURE?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation
              </p>
              <Link 
                href="/agent" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>Try our AI Agent</span>
                <Send className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
