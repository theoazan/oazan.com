"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import { 
  FiStar, 
  FiChevronLeft, 
  FiChevronRight, 

  FiPlay,
  FiPause
} from "react-icons/fi";

const TestimonialCard = ({ testimonial, isActive, onClick }: { testimonial: any; isActive: boolean; onClick: () => void }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative group cursor-pointer transform-gpu"
      onClick={onClick}
    >
      {/* Main Card */}
      <motion.div
        whileHover={{ scale: 1.05, y: -8 }}
        className={`relative bg-white/5 rounded-3xl p-8 border transition-all duration-500 overflow-hidden transform-gpu backdrop-blur-sm ${
          isActive
            ? "border-cyan-500 shadow-2xl shadow-cyan-500/30"
            : "border-white/10 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
        }`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isActive ? "opacity-100" : ""
        } from-cyan-500/5 to-blue-500/5`} />

        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-cyan-400/20">
          
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <FiStar className={`fill-current ${
                  i < testimonial.rating ? "text-yellow-400" : "text-gray-600"
                }`} size={20} />
              </motion.div>
            ))}
          </div>

          {/* Testimonial Text */}
          <motion.p
            className="text-lg text-gray-200 leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {testimonial.text}
          </motion.p>

          {/* Client Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {testimonial.initials}
              </div>
              {/* Online Indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900" />
            </motion.div>
            
            <div className="flex-1">
              <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
              <p className="text-cyan-300 text-sm">{testimonial.position}</p>
              <p className="text-gray-400 text-sm">{testimonial.company}</p>
            </div>
          </div>

          {/* Project Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-2 -left-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-bold text-white shadow-lg"
          >
            {testimonial.project}
          </motion.div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
      </motion.div>
    </motion.div>
  );
};

const VideoTestimonial = ({ testimonial, isActive }: { testimonial: any; isActive: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl"
    >
      {/* Video Thumbnail */}
      <div className="aspect-video relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <Image
          src={testimonial.thumbnail}
          alt={testimonial.name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
        
        {/* Play Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
            {isPlaying ? (
              <FiPause className="text-white text-xl" />
            ) : (
              <FiPlay className="text-white text-xl ml-1" />
            )}
          </div>
        </motion.button>
      </div>

      {/* Video Info */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
            {testimonial.initials}
          </div>
          <div>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
            <p className="text-cyan-300 text-sm">{testimonial.position}</p>
          </div>
        </div>
  <p className="text-gray-300 text-sm line-clamp-2">{testimonial.text}</p>
      </div>
    </motion.div>
  );
};

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: "R. Sharma",
      position: "Owner",
      company: "RS Traders",
      initials: "RS",
      text: "Oazan Technologies set up our complete CCTV system with NVR and IP cameras. The team was professional, fast, and the after‑service support has been excellent.",
      rating: 5,
      project: "CCTV Installation",
      thumbnail: "/api/placeholder/400/300",
      video: "#"
    },
    {
      id: 2,
      name: "A. Patel",
      position: "Admin",
      company: "Sapphire Offices",
      initials: "AP",
      text: "Their AMC keeps our systems running without downtime. Regular check‑ups and quick on‑site support make a big difference to our daily operations.",
      rating: 5,
      project: "Annual Maintenance Contract",
      thumbnail: "/api/placeholder/400/300",
      video: "#"
    },
    {
      id: 3,
      name: "P. Gupta",
      position: "IT Manager",
      company: "Navi Logistics",
      initials: "PG",
      text: "We engaged Oazan for a new office setup—network design, cabling, and system configuration were all handled smoothly and on time.",
      rating: 5,
      project: "IT Infrastructure Setup",
      thumbnail: "/api/placeholder/400/300",
      video: "#"
    },
    {
      id: 4,
      name: "S. Iyer",
      position: "Freelancer",
      company: "—",
      initials: "SI",
      text: "Doorstep printer service and cartridge refilling was quick and affordable. Highly recommended for home users as well.",
      rating: 5,
      project: "Printer Service & Refilling",
      thumbnail: "/api/placeholder/400/300",
      video: "#"
    }
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (!autoPlay || !sectionInView) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, sectionInView, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-20 lg:py-32 px-4 lg:px-8 overflow-hidden isolate">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden transform-gpu">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto text-white transform-gpu">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={sectionInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-400/30"
          >
            <FiStar className="text-cyan-300" />
            CLIENT TESTIMONIALS
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={sectionInView ? { width: 120 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-8"
          />
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-sm">
              {/* Large Quote Icon */}
              <div className="absolute top-8 right-8 text-cyan-400/10">
               
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current text-yellow-400" size={24} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8 font-light italic"
                >
                  {testimonials[activeTestimonial].text}
                </motion.p>

                {/* Client Info */}
                <motion.div
                  key={`info-${activeTestimonial}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{testimonials[activeTestimonial].name}</h3>
                    <p className="text-cyan-300 text-lg">{testimonials[activeTestimonial].position}</p>
                    <p className="text-gray-400">{testimonials[activeTestimonial].company}</p>
                  </div>
                </motion.div>

                {/* Project Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-4 -left-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-sm font-bold text-white shadow-lg"
                >
                  {testimonials[activeTestimonial].project}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Video Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <VideoTestimonial 
              testimonial={testimonials[activeTestimonial]} 
              isActive={true}
            />
          </motion.div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={activeTestimonial === index}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <FiChevronLeft size={24} className="text-cyan-300" />
            </motion.button>

            {/* Auto-play Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setAutoPlay(!autoPlay)}
              className={`p-3 rounded-2xl border transition-all duration-300 ${
                autoPlay 
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300' 
                  : 'bg-white/10 border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 text-gray-400'
              }`}
            >
              {autoPlay ? <FiPause size={20} /> : <FiPlay size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <FiChevronRight size={24} className="text-cyan-300" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats removed to only show provided information */}
      </div>
    </section>
  );
}