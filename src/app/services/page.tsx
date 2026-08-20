'use client';

import { Shield, Bot, Lock, Zap, Cpu, Code, Database, Network, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: 'Security Audit',
      desc: 'Complete security assessment of your systems and infrastructure',
      features: ['Vulnerability analysis', 'Penetration testing', 'Detailed report', 'Recommendations']
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      desc: 'Custom artificial intelligence solutions development',
      features: ['Machine Learning', 'NLP & Computer Vision', 'Intelligent automation', 'API integration']
    },
    {
      icon: Lock,
      title: 'Network Protection',
      desc: 'Securing your networks and cloud infrastructure',
      features: ['Firewall configuration', 'Network monitoring', 'Intrusion detection', 'Incident response']
    },
    {
      icon: Zap,
      title: 'Automation',
      desc: 'Security processes and IT operations automation',
      features: ['Custom scripts', 'Cloud orchestration', 'Secure CI/CD', 'Automated monitoring']
    },
    {
      icon: Cpu,
      title: 'Full Stack Development',
      desc: 'Creation of modern and secure web applications',
      features: ['Next.js & React', 'TypeScript', 'REST API', 'Database']
    },
    {
      icon: Database,
      title: 'Data Analysis',
      desc: 'Data processing and analysis for business insights',
      features: ['Data mining', 'Advanced statistics', 'Visualization', 'Reporting']
    }
  ];

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
                OUR SERVICES
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Innovative AI and cybersecurity solutions to protect and transform your business
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
                <span className="text-green-400 font-mono text-sm">6 SERVICES</span>
              </div>
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-mono text-sm">AI EXPERTISE</span>
              </div>
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
                <span className="text-green-400 font-mono text-sm">ADVANCED SECURITY</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <service.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  OUR PROCESS
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Analysis', desc: 'Assessment of your needs and environment' },
                { step: '02', title: 'Design', desc: 'Solution planning and architecture' },
                { step: '03', title: 'Development', desc: 'Implementation with best practices' },
                { step: '04', title: 'Deployment', desc: 'Production launch and continuous support' }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-green-500/20 to-purple-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  TECHNOLOGIES
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'Next.js', 'React', 'TypeScript', 'Python', 
                'TensorFlow', 'PyTorch', 'AWS', 'Azure',
                'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'
              ].map((tech, i) => (
                <div 
                  key={i}
                  className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 text-center"
                >
                  <span className="text-white font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-900/30 to-green-900/20 backdrop-blur-sm p-12 rounded-3xl border border-purple-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                READY TO START?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and find the solution tailored to your needs
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
