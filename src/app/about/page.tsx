'use client';

import { Shield, Cpu, Code, GraduationCap, Award, Target } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function AboutPage() {
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
                ABOUT ME
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ilham El Baraka
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI & Cybersecurity Expert, passionate about technological innovation and information systems protection.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
                <span className="text-green-400 font-mono text-sm">AI SPECIALIST</span>
              </div>
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-mono text-sm">CYBERSECURITY EXPERT</span>
              </div>
              <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
                <span className="text-green-400 font-mono text-sm">FULL STACK DEVELOPER</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  MY MISSION
                </span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <p className="text-xl text-gray-300 text-center leading-relaxed">
                My goal is to develop innovative AI and cybersecurity solutions to protect organizations against emerging threats. I combine technical expertise, creativity, and passion to create secure and intelligent systems that make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  SKILLS
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Cpu, 
                  title: 'Artificial Intelligence', 
                  desc: 'Machine Learning, Deep Learning, NLP, Computer Vision',
                  color: 'green'
                },
                { 
                  icon: Shield, 
                  title: 'Cybersecurity', 
                  desc: 'Pentesting, Network Security, Cryptography, Threat Analysis',
                  color: 'purple'
                },
                { 
                  icon: Code, 
                  title: 'Development', 
                  desc: 'Next.js, React, Python, TypeScript, Cloud Architecture',
                  color: 'green'
                },
                { 
                  icon: GraduationCap, 
                  title: 'Education', 
                  desc: 'Anthropic AI Certifications, General AI Fluency Track',
                  color: 'purple'
                },
                { 
                  icon: Award, 
                  title: 'Projects', 
                  desc: 'CyberAI Expert System, Custom AI Solutions',
                  color: 'green'
                },
                { 
                  icon: Target, 
                  title: 'Goals', 
                  desc: 'AI Security Innovation, Research & Development',
                  color: 'purple'
                }
              ].map((skill, i) => (
                <div 
                  key={i}
                  className={`bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm p-8 rounded-3xl border border-${skill.color}-500/20 hover:border-${skill.color}-500/40 transition-all duration-300 transform hover:scale-105 group`}
                >
                  <div className={`bg-${skill.color}-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                    <skill.icon className={`w-8 h-8 text-${skill.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{skill.title}</h3>
                  <p className="text-gray-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  VALUES
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Innovation', desc: 'Always seeking new solutions and technologies' },
                { title: 'Excellence', desc: 'Commitment to quality and best practices' },
                { title: 'Security', desc: 'Absolute priority given to data protection' },
                { title: 'Collaboration', desc: 'Team spirit and knowledge sharing' }
              ].map((value, i) => (
                <div 
                  key={i}
                  className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
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
                READY TO COLLABORATE?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover my services or contact me to discuss your project
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/services" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Discover Services
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-black/50 backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
