'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Bot, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: null },
    { href: '/about', label: 'About', icon: null },
    { href: '/services', label: 'Services', icon: null },
    { href: '/contact', label: 'Contact', icon: null },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-green-500/30 shadow-lg shadow-green-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with animation */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/images/logo.jpg" 
                  alt="CyberAI Logo" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-wider group-hover:text-green-400 transition-colors duration-300">
                  CYBERAI
                </span>
                <span className="text-xs text-gray-400 font-mono tracking-widest group-hover:text-green-300 transition-colors duration-300">
                  INTELLIGENCE
                </span>
              </div>
            </Link>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-green-400 bg-green-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
                  )}
                </Link>
              ))}
              
              {/* Agent Button with special effects */}
              <Link
                href="/agent"
                className="relative ml-4 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center gap-2">
                  <Bot className="w-5 h-5 animate-pulse" />
                  <span>AI Agent</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-green-400" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors" />
              )}
              <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-green-500/20">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-green-400 bg-green-500/10 border border-green-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/agent"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-lg font-semibold text-center mt-4"
              >
                <div className="flex items-center justify-center gap-2">
                  <Bot className="w-5 h-5" />
                  <span>AI Agent</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}
