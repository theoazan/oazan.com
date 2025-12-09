'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiDollarSign, FiHome, FiCheckCircle, FiShield } from 'react-icons/fi';

export function HomeBackground() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: "/Images/development.png",
      title: "Software Development",
      description: "Customized software for your business requirements",
      gradient: "from-purple-600/20 to-blue-600/20",
      color: "purple"
    },
    {
      image: "/Images/cloud.jpg",
      title: "IT Infrastructure Design & Setup",
      description: "Network design, cabling, and system configuration",
      gradient: "from-cyan-600/20 to-emerald-600/20",
      color: "cyan"
    },
    {
      image: "/Images/cctv.jpg",
      title: "CCTV & Security Solutions",
      description: "NVR/DVR, IP cameras, wiring, cabling, and storage setup",
      gradient: "from-red-600/20 to-orange-600/20",
      color: "red"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Subtle vignette (replaces grid to avoid 1px scanline artifacts on some GPUs) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 35%, rgba(255,255,255,0.035), transparent 60%)",
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          contain: "paint",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl px-6 py-3 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-medium text-sm">PREMIUM TECH SOLUTIONS</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Welcome to </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Oazan Technologies
                </span>
                <br />

              </h1>
              <h1><span className="text-white text-3xl">Your Trusted IT Partner</span></h1>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                At Oazan Technologies, we specialize in providing <span className="text-cyan-400 font-semibold">reliable and affordable IT services</span>.
                Our goal is to deliver end-to-end technology solutions for homes, offices, and businesses — ensuring
                smooth performance, security, and support for all your IT needs.
              </p>
            </div>

            {/* Stats removed to only show provided information */}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Link
                href="#contact"
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="#services"
                className="group border-2 border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                Explore Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Hero Visual */}
            <div className="relative bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-3xl border border-cyan-500/20 p-8 backdrop-blur-sm mt-4">

              {/* Animated Slideshow */}
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} rounded-2xl flex items-end p-8`}
                  >
                    {/* Background image for the slide (uses public/Images/) */}
                    <div className="absolute inset-0 -z-10">
                      <div className="relative w-full h-full">
                        <Image
                          src={slides[currentSlide].image}
                          alt={slides[currentSlide].title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover opacity-30"
                          priority={currentSlide === 0}
                        />
                      </div>
                    </div>

                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h3>
                      <p className="text-gray-200">{slides[currentSlide].description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-white/30'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Tech Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { Icon: FiDollarSign, title: 'Affordable', desc: 'Value you can trust' },
                  { Icon: FiHome, title: 'Doorstep', desc: 'Home & office support' },
                  { Icon: FiCheckCircle, title: 'Reliable', desc: 'AMC & maintenance' },
                  { Icon: FiShield, title: 'Secure', desc: 'CCTV solutions' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <item.Icon className="text-cyan-400" size={22} />
                    </div>
                    <div className="font-semibold text-cyan-400">{item.title}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            {/* <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl rotate-12 shadow-2xl flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm text-center">AI Powered</span>
            </motion.div> */}

            {/* <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl -rotate-12 shadow-2xl flex items-center justify-center"
            >
              <span className="text-white font-bold text-xs text-center">Cloud First</span>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-400/60 text-sm flex flex-col items-center gap-2"
          >

          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}