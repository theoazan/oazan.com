'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiCode,
  FiShield,
  FiSmartphone,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiCpu,
  FiServer,
  FiTool
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import {
  RiLightbulbFlashLine,
  RiTeamLine,
  RiCustomerService2Line,
  RiStarSFill,
  RiSparklingFill
} from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const features = [
  {
    Icon: RiLightbulbFlashLine,
    color: '#06b6d4',
    text: 'Reliable & Affordable',
    desc: 'Services you can trust. Quality you can afford.'
  },
  {
    Icon: FiCode,
    color: '#3b82f6',
    text: 'Software Development',
    desc: 'Customized business applications and maintenance'
  },
  {
    Icon: FiShield,
    color: '#10b981',
    text: 'CCTV & Security',
    desc: 'Complete setup with NVR/DVR and IP cameras'
  },
  {
    Icon: FiSmartphone,
    color: '#f59e0b',
    text: 'On‑Site Support',
    desc: 'Doorstep technical assistance for home & office'
  },
];

const founderStats = [
{ icon: FiAward, label: "Experience", value: <>15+<br />Years</> },
  { icon: FiGlobe, label: "Expertise", value: "Cloud Architecture" },
  { icon: RiLightbulbFlashLine, label: "Expertise", value: "Digital Evolution" },
];

const techHeadStats = [
  { icon: FiCpu, label: "Experience", value: "13+ Years" },
  { icon: FiServer, label: "Specialization", value: "IT Support" },
  { icon: FiTool, label: "Expertise", value: "Infrastructure" },
];

const ICON_SIZE = 28;

const FeatureCard = ({ Icon, color, text, desc }: {
  Icon: React.ComponentType<any>,
  color: string,
  text: string,
  desc: string
}) => (
  <motion.div
    tabIndex={0}
    role="region"
    aria-label={text}
    className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 hover:border-cyan-200/70 cursor-pointer transition-all duration-500 hover:scale-105 focus:scale-105 focus:outline-none"
    whileHover={{ scale: 1.05, y: -5 }}
    whileFocus={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl" />
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="p-4 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}40)`,
            border: `1px solid ${color}40`,
            boxShadow: `0 8px 32px ${color}20`
          }}
        >
          <Icon size={ICON_SIZE} color={color} />
        </div>
        <h3 className="font-bold text-gray-900 text-xl">{text}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const StatCard = ({ icon: Icon, label, value }: {
  icon: React.ComponentType<any>,
  label: string,
  value: React.ReactNode
}) => (
  <motion.div
    className="text-center group"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
      <div className="flex justify-center mb-2">
        <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg">
          <Icon size={18} color="white" />
        </div>
      </div>
      <div className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs font-medium text-gray-600">{label}</div>
    </div>
  </motion.div>
);

const ContactButton = ({
  icon: Icon,
  label,
  href,
  color,
  isWhatsApp = false
}: {
  icon: React.ComponentType<any>,
  label: string,
  href: string,
  color: string,
  isWhatsApp?: boolean
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex items-center justify-center gap-2 font-semibold rounded-2xl py-3 px-6 shadow-2xl transition-all duration-300 overflow-hidden ${isWhatsApp
      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
      }`}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    style={{
      boxShadow: `0 8px 32px ${color}30`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    <Icon className="text-lg" />
    <span className="relative">{label}</span>
  </motion.a>
);

const AboutMe = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/50 backdrop-blur-sm overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-200/15 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-float delay-1200"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Enhanced Headings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-700 px-8 py-3 rounded-2xl text-sm font-semibold mb-6 border border-cyan-200/50 shadow-lg"
          >
            <RiSparklingFill className="text-cyan-500 animate-pulse" />
            PIONEERING EXCELLENCE SINCE 2018
            <RiSparklingFill className="text-cyan-500 animate-pulse" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-700 bg-clip-text text-transparent leading-tight"
          >
            About Oazan
            <br />
            {/* <span className="text-4xl md:text-6xl">Technologies</span> */}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Oazan Technologies
            </span>{' '}
            is your trusted partner for comprehensive IT solutions. We specialize in delivering reliable, affordable, and cutting-edge technology services tailored to homes, offices, and businesses.
          </motion.p>
        </motion.div>

        <div
          ref={sectionRef}
          aria-labelledby="about-title"
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Leadership Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative space-y-8"
            >
              {/* Founder Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 hover:shadow-3xl transition-all duration-500 group"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        <Image
                          src="/Images/veer.jpg"
                          alt="Virendra Patil - CEO & Founder of Oazan Technologies"
                          width={80}
                          height={80}
                          style={{
                            objectFit: 'contain',
                            width: '100%',
                            height: '100%'
                          }}
                          className="transition-transform duration-500"
                          priority
                        />
                      </div>
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center"
                      >
                        <FiCode className="text-white text-sm" />
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-1">
                        Virendra Patil
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-2">CEO & Founder</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A seasoned technology leader with 15+ years of experience building scalable, high‑performance
                        software solutions across Insurance, B2B, and HR domains. He drives the organization’s vision of
                        integrating technology innovation with practical business outcomes, ensuring quality, scalability,
                        and long‑term client value. Expert in cloud architecture, digital transformation, and API‑driven
                        systems, Virendra fosters a culture of innovation, accountability, and technical excellence that
                        continues to shape the company’s growth and success.
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {founderStats.map((stat, index) => (
                      <StatCard key={index} {...stat} />
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex gap-3">
                    <ContactButton
                      icon={FiMail}
                      label="Email"
                      href="mailto:info@oazan.com"
                      color="#06b6d4"
                    />
                    <ContactButton
                      icon={FaWhatsapp}
                      label="WhatsApp"
                      href="https://wa.me/+918108550617"
                      color="#10b981"
                      isWhatsApp
                    />
                  </div>
                </div>
              </motion.div>

              {/* Tech Head Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 hover:shadow-3xl transition-all duration-500 group"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        <Image
                          src="/Images/kalpesh.png"
                          alt="Virendra Patil - CEO & Founder of Oazan Technologies"
                          width={80}
                          height={80}
                          style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                          }}
                          className="transition-transform duration-500"
                          priority
                        />
                      </div>
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg flex items-center justify-center"
                      >
                        <FiCpu className="text-white text-sm" />
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-1">
                        Kalpesh Patil
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-2">Tech Support Head</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        An accomplished IT professional with 13+ years of experience in infrastructure management and
                        technical support operations. Focused on ensuring system reliability, operational continuity, and
                        efficient technology performance across the organization.
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {techHeadStats.map((stat, index) => (
                      <StatCard key={index} {...stat} />
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex gap-3">
                    <ContactButton
                      icon={FiMail}
                      label="Email"
                      href="mailto:kalpesh.patil@oazan.com"
                      color="#f59e0b"
                    />
                    <ContactButton
                      icon={FaWhatsapp}
                      label="WhatsApp"
                      href="https://wa.me/+919594348344"
                      color="#10b981"
                      isWhatsApp
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Enhanced Company Description */}


              {/* Enhanced Features Grid */}
              <div className="grid gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-6"
              >
                <motion.a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-2xl py-5 px-10 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 text-xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <RiTeamLine className="text-2xl" />
                  <span className="relative">Start Your Project Today</span>
                  <FiGlobe className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
