'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              👋 Hello, I'm
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="block">Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Full Stack Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              I create beautiful, functional web experiences with modern technologies.
              Passionate about clean code and user-centered design.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">Follow me</p>
              <div className="flex gap-4">
                {['Github', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Animated Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              {/* Animated circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-blue-200 dark:border-blue-900 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-4 border-purple-200 dark:border-purple-900 rounded-full"
              />
              
              {/* Center avatar */}
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  {/* Replace with your image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-400 hover:text-blue-600">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
