'use client';
import React, { useState, useEffect } from 'react';
import { FiHome, FiInfo, FiSettings, FiMail, FiChevronDown } from 'react-icons/fi';
import { RiShieldCheckLine, RiCloudLine, RiCodeSSlashLine } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const servicesMenu = [
    {
      category: "Software & Applications",
      items: [
        { name: "Software Development", desc: "Custom business applications" }
      ]
    },
    {
      category: "Infrastructure & Security",
      items: [
        { name: "IT Infrastructure Design & Setup", desc: "Network, cabling, systems" },
        { name: "CCTV & Security Solutions", desc: "NVR, DVR, IP cameras, storage" }
      ]
    },
    {
      category: "Support & Maintenance",
      items: [
        { name: "Annual Maintenance Contracts (AMC)", desc: "Preventive maintenance & quick support" },
        { name: "On-Site & Doorstep Technical Support", desc: "Home & office IT assistance" },
        { name: "Printer Service & Refilling", desc: "Toner & inkjet refills, all brands" }
      ]
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home', Icon: FiHome },
    { 
      id: 'services', 
      label: 'Services', 
      Icon: FiSettings,
      dropdown: servicesMenu
    },
    { id: 'about', label: 'About', Icon: FiInfo },
    { id: 'contact', label: 'Contact', Icon: FiMail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-gray-200/20' 
            : 'bg-transparent border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center  group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <Image src="/logo.jpg" alt="Oazan Technologies" width={48} height={48} className="object-contain" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                </div>
                <div className="flex flex-col">
                  <span className={`text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ${
                    isScrolled ? '' : 'text-white'
                  }`}>
                    Oazan Technologies
                  </span>
                  <span className="text-xs text-cyan-600 font-medium">Your Trusted IT Partner</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map(({ id, label, Icon, dropdown }) => {
                const linkClass = isScrolled
                  ? 'text-gray-700 hover:text-cyan-600 hover:bg-white/80'
                  : 'text-white/90 hover:text-white hover:bg-white/10';

                return (
                  <div key={id} className="relative" onMouseLeave={() => setActiveDropdown(null)}>
                    {dropdown ? (
                      <div onMouseEnter={() => setActiveDropdown(id)}>
                        <button className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 group ${linkClass}`}>
                        <Icon className="w-5 h-5" />
                        <span>{label}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                      
                      {/* Mega Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 w-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-6 mt-2"
                          >
                            <div className="grid gap-6">
                              {dropdown.map((category, index) => (
                                <div key={index}>
                                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                                    {category.category}
                                  </h3>
                                  <div className="space-y-2">
                                    {category.items.map((item, itemIndex) => (
                                      <Link
                                        key={itemIndex}
                                        href="#services"
                                        onClick={() => handleNavClick('services')}
                                        className="block p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 group"
                                      >
                                        <div className="font-medium text-gray-800 group-hover:text-cyan-600">
                                          {item.name}
                                        </div>
                                        <div className="text-sm text-gray-500 group-hover:text-gray-600">
                                          {item.desc}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    ) : (
                      <Link
                        href={`#${id}`}
                        onClick={() => handleNavClick(id)}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 group ${linkClass}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{label}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4"
              >
                <Link
                  href="#contact"
                  onClick={() => handleNavClick('contact')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span>Get Started</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiChevronDown className="w-4 h-4 rotate-90" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/80 text-gray-700 hover:bg-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              } backdrop-blur-sm`}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute block w-6 h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute block w-6 h-0.5 bg-current rounded-full top-2"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute block w-6 h-0.5 bg-current rounded-full top-4"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map(({ id, label, Icon, dropdown }) => (
                  <div key={id}>
                    {dropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === id ? null : id)}
                          className="flex items-center justify-between w-full px-4 py-4 text-left text-gray-700 hover:text-cyan-600 font-semibold rounded-2xl hover:bg-gray-50/50 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className="w-5 h-5" />
                            <span>{label}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: activeDropdown === id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-8 space-y-2"
                            >
                              {dropdown.flatMap(category => 
                                category.items.map((item, index) => (
                                  <Link
                                    key={index}
                                    href="#services"
                                    onClick={() => { setIsOpen(false); handleNavClick('services'); }}
                                    className="block px-4 py-3 text-gray-600 hover:text-cyan-600 rounded-xl hover:bg-cyan-50/50 transition-all duration-300"
                                  >
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                  </Link>
                                ))
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavClick(id)}
                        className="flex items-center space-x-3 w-full px-4 py-4 text-left text-gray-700 hover:text-cyan-600 font-semibold rounded-2xl hover:bg-gray-50/50 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{label}</span>
                      </button>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link
                    href="#contact"
                    onClick={() => handleNavClick('contact')}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-4 rounded-2xl font-semibold shadow-2xl transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Background Blur Layer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;