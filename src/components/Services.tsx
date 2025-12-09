"use client";

import React, { useState } from "react";
import {
  FiCode,
  FiCloud,
  FiSmartphone,
  FiShield,
  FiDatabase,
  FiBarChart,
  FiCpu,
  FiUsers,
  FiArrowRight,
  FiCheck,
  FiPrinter,
} from "react-icons/fi";
import { RiRobotLine, RiAiGenerate, RiCloudLine, RiServerLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({
  service,
  isActive,
  onClick,
}: {
  service: any;
  isActive: boolean;
  onClick: () => void;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative group cursor-pointer transform-gpu ${isActive ? "lg:col-span-2" : ""}`}
      style={{ contain: "paint" }}
      onClick={onClick}
    >
      {/* Main Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className={`relative bg-white/10 rounded-3xl p-8 border transition-all duration-500 overflow-hidden transform-gpu ${
          isActive
            ? "border-cyan-500 shadow-2xl shadow-cyan-500/20"
            : "border-white/10 hover:border-cyan-300/40 shadow-xl hover:shadow-2xl"
        }`}
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
          willChange: "transform",
          contain: "paint",
        }}
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isActive ? "opacity-100" : ""
          } ${service.gradient}`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className={`p-4 rounded-2xl shadow-lg transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "bg-white/10 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white"
                }`}
              >
                <service.icon size={28} />
              </div>
              <div>
                <h3
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white group-hover:text-white"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    isActive ? "text-cyan-300" : "text-gray-400 group-hover:text-cyan-300"
                  }`}
                >
                  {service.subtitle}
                </p>
              </div>
            </div>
            
            {/* Arrow Indicator */}
            <motion.div
              animate={{ rotate: isActive ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-2 rounded-xl transition-colors duration-300 ${
                isActive 
                  ? 'bg-cyan-500/20 text-cyan-300' 
                  : 'bg-white/10 text-gray-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300'
              }`}
            >
              <FiArrowRight size={20} />
            </motion.div>
          </div>

          {/* Description */}
          <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
            isActive ? 'text-gray-200' : 'text-gray-300 group-hover:text-gray-200'
          }`}>
            {service.description}
          </p>

          {/* Expanded Content */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Features */}
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10"
                    >
                      <div className="p-1 bg-green-400/10 rounded-lg">
                        <FiCheck size={16} className="text-green-400" />
                      </div>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    Start Project
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function Services() {
  const [activeService, setActiveService] = useState(0);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Software Development",
      subtitle: "Customized Applications",
      icon: FiCode,
      description:
        "Get customized software development services tailored to your business requirements. From small business tools to enterprise applications, we design, develop, and maintain scalable software solutions that enhance productivity and performance.",
      gradient: "from-cyan-500/5 to-blue-500/5",
      features: [
        "Custom business tools",
        "Web & desktop apps",
        "Scalable architecture",
        "Maintenance & support",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"]
    },
    {
      title: "IT Infrastructure Design & Setup",
      subtitle: "Network, Cabling, Systems",
      icon: RiServerLine,
      description:
        "Complete IT infrastructure setup services, including network design, cabling, and system configuration. Whether a new office or an upgrade, we ensure a secure and efficient environment.",
      gradient: "from-green-500/5 to-emerald-500/5",
      features: [
        "Network design",
        "Structured cabling",
        "System configuration",
        "Firewall & security",
      ],
      technologies: ["LAN/WAN", "Wi‑Fi", "Switching", "Routing", "Windows/Linux"]
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      subtitle: "Preventive Maintenance",
      icon: FiCpu,
      description:
        "Keep your IT systems running smoothly with our AMC services in Navi Mumbai. We offer preventive maintenance, regular check-ups, and quick support to minimize downtime and maximize productivity.",
      gradient: "from-yellow-500/5 to-orange-500/5",
      features: [
        "Preventive maintenance",
        "Regular health checks",
        "Quick on-site support",
        "Remote assistance",
      ],
      technologies: ["Backup", "Antivirus", "Monitoring", "Documentation"]
    },
    {
      title: "CCTV & Security Solutions",
      subtitle: "NVR/DVR, IP Cameras",
      icon: FiShield,
      description:
        "Protect your business and home with complete CCTV solutions including NVRs, DVRs, IP cameras, wiring, cabling, and storage setup — ideal for offices, factories, and residential properties.",
      gradient: "from-red-500/5 to-rose-500/5",
      features: [
        "Network & internet security cameras",
        "Industrial security systems",
        "Complete CCTV setup (NVR/DVR)",
        "Cabling, wiring, and storage",
      ],
      technologies: ["NVR", "DVR", "IP Cameras", "PoE", "CAT6"]
    },
    {
      title: "On-Site & Doorstep Technical Support",
      subtitle: "Home & Office Support",
      icon: FiUsers,
      description:
        "On-site IT support for homes and businesses — solving your technical issues quickly and professionally.",
      gradient: "from-indigo-500/5 to-purple-500/5",
      features: [
        "Home & office visits",
        "Issue diagnosis & fix",
        "Hardware & software support",
        "Remote support options",
      ],
      technologies: ["Remote Support", "Ticketing", "Diagnostics"]
    },
    {
      title: "Printer Service & Refilling",
      subtitle: "Affordable Doorstep Service",
      icon: FiPrinter,
      description:
        "Doorstep printer service at affordable prices. Refilling for all types of toner, Inkjet, Deskjet, and LaserJet cartridges. We service all major brands.",
      gradient: "from-teal-500/5 to-cyan-500/5",
      features: [
        "Toner & ink refilling",
        "Inkjet & LaserJet",
        "Doorstep service",
        "All major brands supported",
      ],
      technologies: ["HP", "Canon", "Epson", "Brother", "Samsung"]
    }
  ];

  return (
    <section id="services" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-20 lg:py-32 px-4 lg:px-8 overflow-hidden isolate">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden transform-gpu">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto text-white transform-gpu">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-400/30">
            <FiCpu className="text-cyan-300" />
            OUR EXPERTISE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Reliable and affordable end-to-end IT solutions for homes, offices, and businesses —
            from software to infrastructure, maintenance, CCTV, on-site support, and printer services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          {/* <div className="bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Let’s discuss how our technology solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Start Your Project
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}