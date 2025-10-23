'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg shadow-purple-500/20 transition-all duration-500" id="nav-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="nav-content">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Labs</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Home
          </a>
          <a href="#services" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Services
          </a>
          <a href="#about" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            About
          </a>
          <a href="#pricing" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Pricing
          </a>
          <a href="#contact" className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div id="mobile-menu" className="hidden md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
      <div className="px-4 py-4 space-y-2">
        <a href="#home" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Home
        </a>
        <a href="#services" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Services
        </a>
        <a href="#about" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          About
        </a>
        <a href="#pricing" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Pricing
        </a>
        <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
          Contact
        </a>
      </div>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      const navContent = document.getElementById('nav-content');
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        navContent.classList.remove('py-6');
        navContent.classList.add('py-3');
        navbar.classList.add('shadow-2xl');
      } else {
        navContent.classList.remove('py-3');
        navContent.classList.add('py-6');
        navbar.classList.remove('shadow-2xl');
      }
      
      lastScroll = currentScroll;
    });
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-cyan-500/20 animate-gradient-shift"></div>
    <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/10 via-purple-600/10 to-pink-500/10 animate-gradient-shift-reverse"></div>
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-slower"></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-float"></div>
  </div>

  {/* Floating Text Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 text-violet-400/20 font-mono text-sm animate-float-slow">
      neural_network.train()
    </div>
    <div className="absolute top-40 right-20 text-cyan-400/20 font-mono text-sm animate-float-slower" style={{animationDelay: '1s'}}>
      accuracy: 99.7%
    </div>
    <div className="absolute bottom-40 left-20 text-fuchsia-400/20 font-mono text-sm animate-float" style={{animationDelay: '2s'}}>
      model.optimize()
    </div>
    <div className="absolute top-1/3 right-10 text-purple-400/20 font-mono text-sm animate-float-slow" style={{animationDelay: '0.5s'}}>
      inference_time: 12ms
    </div>
    <div className="absolute bottom-20 right-1/3 text-blue-400/20 font-mono text-sm animate-float-slower" style={{animationDelay: '1.5s'}}>
      scaling_factor: 10x
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
    <div className="max-w-5xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-violet-500/30 rounded-full animate-fade-in">
        <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-violet-300">Enterprise AI Solutions</span>
      </div>

      {/* Main Headline with Floating Animation */}
      <h1 className="mb-6 animate-fade-in-up">
        <span className="block text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
          Nexus AI Labs
        </span>
        <span className="block text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-text">
          Intelligence That Transforms Markets
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-12 text-lg md:text-xl text-slate-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        We architect predictive AI systems that decode consumer behavior, optimize campaign performance, and deliver measurable ROI. From sentiment analysis to conversion forecasting, we turn marketing data into competitive advantage.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50">
          <span className="relative z-10">Schedule AI Audit</span>
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105">
          View Case Studies
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">847%</div>
          <div className="text-sm text-slate-400">Avg. ROI Increase</div>
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mb-2">2.4B+</div>
          <div className="text-sm text-slate-400">Data Points Analyzed</div>
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">94%</div>
          <div className="text-sm text-slate-400">Prediction Accuracy</div>
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">67ms</div>
          <div className="text-sm text-slate-400">Real-Time Processing</div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradient-shift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(10%, 10%) scale(1.1); }
    }
    @keyframes gradient-shift-reverse {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-10%, -10%) scale(1.1); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      50% { transform: translateY(-30px) translateX(10px); }
    }
    @keyframes float-slower {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      50% { transform: translateY(-40px) translateX(-10px); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.5; }
    }
    @keyframes pulse-slower {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.4; }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes gradient-text {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-shift {
      animation: gradient-shift 15s ease-in-out infinite;
    }
    .animate-gradient-shift-reverse {
      animation: gradient-shift-reverse 20s ease-in-out infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }
    .animate-float-slower {
      animation: float-slower 10s ease-in-out infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
    .animate-pulse-slower {
      animation: pulse-slower 6s ease-in-out infinite;
    }
    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out;
    }
    .animate-gradient-text {
      background-size: 200% 200%;
      animation: gradient-text 5s ease infinite;
    }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-24 px-6 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        AI-Powered Marketing Solutions
      </h2>
      <p className="text-xl text-purple-200 max-w-3xl mx-auto">
        Nexus AI Labs delivers cutting-edge artificial intelligence solutions that transform marketing strategies and drive measurable ROI
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Service Card 1 */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Predictive Customer Analytics</h3>
            <p className="text-purple-200 text-center">Hover to explore</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-purple-900 border border-purple-400 rounded-2xl p-8 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Customer Analytics</h3>
            <ul className="space-y-3 text-purple-50">
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">✦</span>
                <span>Custom ML models for customer lifetime value prediction and churn prevention</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">✦</span>
                <span>PhD-level data scientists analyze your marketing data for actionable insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">✦</span>
                <span>Real-time behavioral segmentation with explainable AI for transparency</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">✦</span>
                <span>Proven ROI across retail, e-commerce, and B2B marketing campaigns</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-purple-400/30">
              <p className="text-sm text-purple-200 italic">Nexus AI Labs - Agile deployment with ongoing optimization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Card 2 */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">AI Content Optimization</h3>
            <p className="text-blue-200 text-center">Hover to explore</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400 rounded-2xl p-8 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">AI Content Optimization</h3>
            <ul className="space-y-3 text-blue-50">
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✦</span>
                <span>NLP-powered content generation and A/B testing for maximum engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✦</span>
                <span>Full-stack implementation from strategy consulting to cloud deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✦</span>
                <span>Sentiment analysis and brand voice consistency across all channels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✦</span>
                <span>Scalable solutions on AWS/Azure with transparent milestone tracking</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-blue-400/30">
              <p className="text-sm text-blue-200 italic">Nexus AI Labs - Ethical AI with bias detection built-in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Card 3 */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-emerald-900/40 to-slate-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Campaign Performance AI</h3>
            <p className="text-emerald-200 text-center">Hover to explore</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-emerald-600 to-emerald-900 border border-emerald-400 rounded-2xl p-8 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Campaign Performance AI</h3>
            <ul className="space-y-3 text-emerald-50">
              <li className="flex items-start">
                <span className="text-emerald-300 mr-2">✦</span>
                <span>Real-time campaign optimization using reinforcement learning algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-300 mr-2">✦</span>
                <span>Cross-industry expertise with documented case studies and measurable ROI</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-300 mr-2">✦</span>
                <span>Automated budget allocation across channels for optimal ROAS</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-300 mr-2">✦</span>
                <span>Senior AI engineers provide ongoing support and model retraining</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-emerald-400/30">
              <p className="text-sm text-emerald-200 italic">Nexus AI Labs - Continuous optimization post-deployment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Card 4 */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-rose-900/40 to-slate-900/40 backdrop-blur-sm border border-rose-500/30 rounded-2xl p-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-rose-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Personalization Engine</h3>
            <p className="text-rose-200 text-center">Hover to explore</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-rose-600 to-rose-900 border border-rose-400 rounded-2xl p-8 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Personalization Engine</h3>
            <ul className="space-y-3 text-rose-50">
              <li className="flex items-start">
                <span className="text-rose-300 mr-2">✦</span>
                <span>Hyper-personalized customer experiences using deep learning models</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-2">✦</span>
                <span>Dynamic product recommendations with explainable AI for trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-2">✦</span>
                <span>Omnichannel personalization across email, web, mobile, and social</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-2">✦</span>
                <span>Built on modern cloud infrastructure with enterprise-grade security</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-rose-400/30">
              <p className="text-sm text-rose-200 italic">Nexus AI Labs - Transparent communication at every milestone</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-lg text-purple-200 mb-6">
        Trusted by leading marketing teams worldwide
      </p>
      <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
        Schedule a Consultation with Nexus AI Labs
      </button>
    </div>
  </div>

  <style jsx>{`
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .group:hover .group-hover\\:rotate-y-180 {
      transform: rotateY(180deg);
    }
  `}</style>
</section>
      
      {/* Testimonials Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-24">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
  
  {/* Section Header */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 mb-16 text-center">
    <h2 className="text-5xl font-bold text-white mb-4">
      Trusted by Marketing Leaders
    </h2>
    <p className="text-xl text-purple-200">
      See how Nexus AI Labs transforms marketing strategies
    </p>
  </div>

  {/* Infinite Scroll Container */}
  <div className="relative z-10">
    {/* First Row - Scrolling Left */}
    <div className="flex mb-8 animate-infinite-scroll-left">
      <div className="flex gap-6 min-w-max pr-6">
        {/* Testimonial 1 */}
        <div className="w-[450px] bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Sarah Mitchell</h3>
              <p className="text-purple-300 text-sm">CMO, BrandVision Inc.</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="w-[450px] bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Marcus Chen</h3>
              <p className="text-purple-300 text-sm">Director of Digital Marketing, TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI increased by 285%."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="w-[450px] bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Elena Rodriguez"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Elena Rodriguez</h3>
              <p className="text-purple-300 text-sm">VP Marketing, Innovate Solutions</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "Nexus AI Labs transformed how we understand our customers. The sentiment analysis and behavioral predictions are incredibly accurate. We've cut our customer acquisition costs by 60% while doubling conversions."
          </p>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="w-[450px] bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Sarah Mitchell</h3>
              <p className="text-purple-300 text-sm">CMO, BrandVision Inc.</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team."
          </p>
        </div>

        <div className="w-[450px] bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Marcus Chen</h3>
              <p className="text-purple-300 text-sm">Director of Digital Marketing, TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI increased by 285%."
          </p>
        </div>

        <div className="w-[450px] bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Elena Rodriguez"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Elena Rodriguez</h3>
              <p className="text-purple-300 text-sm">VP Marketing, Innovate Solutions</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "Nexus AI Labs transformed how we understand our customers. The sentiment analysis and behavioral predictions are incredibly accurate. We've cut our customer acquisition costs by 60% while doubling conversions."
          </p>
        </div>
      </div>
    </div>

    {/* Second Row - Scrolling Right */}
    <div className="flex animate-infinite-scroll-right">
      <div className="flex gap-6 min-w-max pr-6">
        {/* Testimonial 3 (reversed order) */}
        <div className="w-[450px] bg-gradient-to-br from-slate-900/40 to-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Elena Rodriguez"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Elena Rodriguez</h3>
              <p className="text-purple-300 text-sm">VP Marketing, Innovate Solutions</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "Nexus AI Labs transformed how we understand our customers. The sentiment analysis and behavioral predictions are incredibly accurate. We've cut our customer acquisition costs by 60% while doubling conversions."
          </p>
        </div>

        <div className="w-[450px] bg-gradient-to-br from-slate-900/40 to-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Marcus Chen</h3>
              <p className="text-purple-300 text-sm">Director of Digital Marketing, TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI increased by 285%."
          </p>
        </div>

        <div className="w-[450px] bg-gradient-to-br from-slate-900/40 to-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Sarah Mitchell</h3>
              <p className="text-purple-300 text-sm">CMO, BrandVision Inc.</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team."
          </p>
        </div>

        {/* Duplicates for seamless loop */}
        <div className="w-[450px] bg-gradient-to-br from-slate-900/40 to-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Elena Rodriguez"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Elena Rodriguez</h3>
              <p className="text-purple-300 text-sm">VP Marketing, Innovate Solutions</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "Nexus AI Labs transformed how we understand our customers. The sentiment analysis and behavioral predictions are incredibly accurate. We've cut our customer acquisition costs by 60% while doubling conversions."
          </p>
        </div>

        <div className="w-[450px] bg-gradient-to-br from-slate-900/40 to-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Marcus Chen</h3>
              <p className="text-purple-300 text-sm">Director of Digital Marketing, TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI increased by 285%."
          </p>
        </div>

        <div className="w-[450px] bg-gradient-to-br from-slate-900/40 to-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
            />
            <div>
              <h3 className="text-white font-bold text-lg">Sarah Mitchell</h3>
              <p className="text-purple-300 text-sm">CMO, BrandVision Inc.</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            "Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team."
          </p>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes infinite-scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes infinite-scroll-right {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0);
      }
    }

    .animate-infinite-scroll-left {
      animation: infinite-scroll-left 40s linear infinite;
    }

    .animate-infinite-scroll-right {
      animation: infinite-scroll-right 40s linear infinite;
    }

    .animate-infinite-scroll-left:hover,
    .animate-infinite-scroll-right:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        Nexus AI Labs <span className="text-purple-400">Pro</span>
      </h2>
      <p className="text-xl text-gray-300">
        AI-Powered Marketing Intelligence for Modern Brands
      </p>
    </div>

    {/* Detailed Pricing Table */}
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Price Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-12 text-center">
        <div className="text-white">
          <p className="text-lg font-semibold uppercase tracking-wide mb-2">Professional Plan</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-6xl font-bold">$79</span>
            <span className="text-2xl text-purple-200">/month</span>
          </div>
          <p className="mt-4 text-purple-100">Everything you need to dominate your market</p>
        </div>
      </div>

      {/* Features Table */}
      <div className="px-8 py-10">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 text-lg font-bold text-gray-900">Feature</th>
              <th className="text-left py-4 px-4 text-lg font-bold text-gray-900">Details</th>
              <th className="text-center py-4 px-4 text-lg font-bold text-gray-900">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-purple-50 transition-colors">
              <td className="py-5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">AI Campaign Analytics</span>
                </div>
              </td>
              <td className="py-5 px-4 text-gray-600">Real-time performance tracking with predictive insights</td>
              <td className="py-5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="hover:bg-purple-50 transition-colors">
              <td className="py-5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">Audience Segmentation</span>
                </div>
              </td>
              <td className="py-5 px-4 text-gray-600">Advanced AI-driven customer profiling & targeting</td>
              <td className="py-5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="hover:bg-purple-50 transition-colors">
              <td className="py-5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">Content Generation</span>
                </div>
              </td>
              <td className="py-5 px-4 text-gray-600">AI-powered ad copy, social posts & email campaigns</td>
              <td className="py-5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="hover:bg-purple-50 transition-colors">
              <td className="py-5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">Competitor Intelligence</span>
                </div>
              </td>
              <td className="py-5 px-4 text-gray-600">Monitor competitor strategies & market trends</td>
              <td className="py-5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="hover:bg-purple-50 transition-colors">
              <td className="py-5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">ROI Optimization</span>
                </div>
              </td>
              <td className="py-5 px-4 text-gray-600">Automated budget allocation & performance optimization</td>
              <td className="py-5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="hover:bg-purple-50 transition-colors">
              <td className="py-5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">24/7 Priority Support</span>
                </div>
              </td>
              <td className="py-5 px-4 text-gray-600">Dedicated account manager & instant chat support</td>
              <td className="py-5 px-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 px-8 py-10 border-t border-gray-200">
        <div className="text-center">
          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Start Your Free Trial
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Money-Back Guarantee</span>
            </div>
          </div>
          
          <p className="mt-4 text-gray-500 text-sm">
            Powered by Nexus AI Labs • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      
      {/* Contact Form - Supabase Integration */}
      <'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget as HTMLFormElement;
    
    const formData = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      phone: (form.querySelector('#phone') as HTMLInputElement).value,
      company: (form.querySelector('#company') as HTMLInputElement).value,
      budget: (form.querySelector('#budget') as HTMLSelectElement).value,
      service: (form.querySelector('#service') as HTMLSelectElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value,
      industry: 'marketing',
      source: 'Nexus AI Labs Contact Form'
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-sm font-medium">Let's Transform Your Marketing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Scale with
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nexus AI Labs?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join 500+ marketing teams leveraging AI to drive 10x ROI. Get a personalized strategy session within 24 hours.
          </p>
        </div>

        {/* Full Width Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">Select a service</option>
                  <option value="ai-content-generation" className="bg-slate-900">AI Content Generation</option>
                  <option value="predictive-analytics" className="bg-slate-900">Predictive Analytics</option>
                  <option value="marketing-automation" className="bg-slate-900">Marketing Automation</option>
                  <option value="customer-segmentation" className="bg-slate-900">Customer Segmentation</option>
                  <option value="campaign-optimization" className="bg-slate-900">Campaign Optimization</option>
                  <option value="full-suite" className="bg-slate-900">Full AI Marketing Suite</option>
                </select>
              </div>

              {/* Monthly Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
                  Monthly Marketing Budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">Select budget range</option>
                  <option value="under-10k" className="bg-slate-900">Under $10,000</option>
                  <option value="10k-25k" className="bg-slate-900">$10,000 - $25,000</option>
                  <option value="25k-50k" className="bg-slate-900">$25,000 - $50,000</option>
                  <option value="50k-100k" className="bg-slate-900">$50,000 - $100,000</option>
                  <option value="100k-plus" className="bg-slate-900">$100,000+</option>
                </select>
              </div>
            </div>

            {/* Message - Full Width */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Tell Us About Your Marketing Goals *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="What marketing challenges are you facing? What results are you looking to achieve with AI?"
              ></textarea>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-green-400 font-semibold mb-1">Success! We've received your message.</h4>
                  <p className="text-green-300 text-sm">Our AI marketing experts will contact you within 24 hours to discuss your strategy.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-red-400 font-semibold mb-1">Oops! Something went wrong.</h4>
                  <p className="text-red-300 text-sm">{errorMessage || 'Please try again or email us directly at hello@nexusailabs.com'}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Your Free AI Strategy Session
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your data is secure and never shared</span>
              </div>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">24h</div>
                <div className="text-sm text-slate-400">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">10x</div>
                <div className="text-sm text-slate-400">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-slate-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left Side - CTA/Newsletter */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Nexus AI Labs
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            Transforming marketing with cutting-edge AI solutions
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Stay Ahead of the Curve</h3>
          <p className="text-slate-400 mb-4">
            Get the latest AI marketing insights, trends, and exclusive updates delivered to your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="space-y-2 text-slate-400">
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📧</span>
            <a href="mailto:hello@nexusailabs.com" className="hover:text-blue-400 transition-colors">
              hello@nexusailabs.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📞</span>
            <a href="tel:+1-555-AI-NEXUS" className="hover:text-blue-400 transition-colors">
              +1 (555) AI-NEXUS
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📍</span>
            <span>San Francisco, CA 94105</span>
          </p>
        </div>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Solutions</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                AI Content Generation
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Predictive Analytics
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Customer Insights
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Campaign Optimization
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Marketing Automation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="mt-12 pt-8 border-t border-slate-700">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Nexus AI Labs. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="YouTube">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}