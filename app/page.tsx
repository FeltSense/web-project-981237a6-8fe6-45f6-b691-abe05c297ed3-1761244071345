'use client'

import React, { useState, FormEvent } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const form = e.currentTarget as HTMLFormElement
    
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
    }

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      
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
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            if (menu) menu.classList.toggle('hidden')
          }}
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
            &quot;Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team.&quot;
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
            &quot;The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI increased by 285%.&quot;
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
            &quot;Nexus AI Labs transformed how we understand our customers. The sentiment analysis and behavioral predictions are incredibly accurate. We&apos;ve cut our customer acquisition costs by 60% while doubling conversions.&quot;
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
            &quot;Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team.&quot;
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
            &quot;The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI increased by 285%.&quot;
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
            &quot;Nexus AI Labs transformed how we understand our customers. The sentiment analysis and behavioral predictions are incredibly accurate. We&apos;ve cut our customer acquisition costs by 60% while doubling conversions.&quot;
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
            &quot;Nexus AI Labs transformed how we understand our customers. The sentiment analysis and behavioral predictions are incredibly accurate. We&apos;ve cut our customer acquisition costs by 60% while doubling conversions.&quot;
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
            &quot;The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI increased by 285%.&quot;
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
            &quot;Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team.&quot;
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
            &quot;Nexus AI Labs transformed how we understand our customers. The sentiment analysis and behavioral predictions are incredibly accurate. We&apos;ve cut our customer acquisition costs by 60% while doubling conversions.&quot;
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
            &quot;The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI increased by 285%.&quot;
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
              <h3 className="text-white font