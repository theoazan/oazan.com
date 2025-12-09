'use client';

import React, { useMemo, useState } from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaUser,
  FaInstagram,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMessageCircle, FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';

const contactDetails = {
  name: process.env.NEXT_PUBLIC_CONTACT_NAME || 'Virendra Patil',
  title: process.env.NEXT_PUBLIC_CONTACT_TITLE || 'Founder & CEO',
  company: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Oazan Technologies',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@oazan.com	',
  location: process.env.NEXT_PUBLIC_CONTACT_LOCATION || 'Maharashtra, India',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 8108550617',
  instagram: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || 'https://instagram.com/ozantech',
  // linkedin: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || 'https://linkedin.com/company/ozantech',
  // github: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/ozantech',
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '+91 9594348344',
};

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; text: string }>(null);
  const [activeField, setActiveField] = useState<string | null>(null);

  const whatsappHref = useMemo(() => {
    const phone = contactDetails.whatsapp || contactDetails.phone;
    if (!phone) return '';
    const digits = phone.replace(/\D/g, '');
    return `https://wa.me/${digits}`;
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in your name, email, and message.' });
      return;
    }
    try {
      setSending(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus({ type: 'success', text: 'Message sent! We will get back to you shortly.' });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setStatus({ type: 'error', text: err?.message || 'Something went wrong. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  const contactItems = [
    {
      icon: FiUser,
      label: 'Name',
      value: contactDetails.name,
      subvalue: contactDetails.title,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: contactDetails.location,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: contactDetails.phone,
      href: `tel:${contactDetails.phone.replace(/\s+/g, '')}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const socialItems = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: whatsappHref,
      color: 'hover:bg-green-50 hover:border-green-200 text-green-600',
    },
 
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: contactDetails.instagram,
      color: 'hover:bg-pink-50 hover:border-pink-200 text-pink-600',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
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
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center max-w-2xl mx-auto"
          id="contact"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-200/50"
          >
            <FiMessageCircle className="text-cyan-500" />
            LET’s CONNECT
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-8"
          />
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to bring your ideas to life? Let’s start a conversation about your next project.
          </p>
        </motion.div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-200/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                        <item.icon className="text-white text-lg" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-900 font-semibold hover:text-cyan-600 transition-colors duration-300 block mt-1"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-semibold mt-1">{item.value}</p>
                        )}
                        {item.subvalue && (
                          <p className="text-gray-600 text-sm mt-1">{item.subvalue}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FiSend className="text-cyan-500" />
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialItems.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-200 bg-white/80 transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-gray-800">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px]" />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">We’ll get back to you within 24 hours</p>
                </div>

                <form className="space-y-6" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Your Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-white/90 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition-all duration-300"
                          placeholder="Enter your name"
                        />
                        <AnimatePresence>
                          {activeField === 'name' && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 pointer-events-none"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-white/90 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition-all duration-300"
                          placeholder="Enter your email"
                        />
                        <AnimatePresence>
                          {activeField === 'email' && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 pointer-events-none"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        onFocus={() => setActiveField('subject')}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-white/90 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition-all duration-300"
                        placeholder="What’s this about?"
                      />
                      <AnimatePresence>
                        {activeField === 'subject' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 pointer-events-none"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Your Message</label>
                    <div className="relative">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        rows={6}
                        className="w-full bg-white/90 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                      <AnimatePresence>
                        {activeField === 'message' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 pointer-events-none"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-2xl border ${
                          status.type === 'success'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700'
                            : 'bg-rose-500/10 border-rose-500/30 text-rose-700'
                        }`}
                      >
                        {status.text}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: sending ? 1 : 1.05, y: sending ? 0 : -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        animate={{ x: [-200, 200] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                    
                    <span className="relative z-10 flex items-center gap-2">
                      {sending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;