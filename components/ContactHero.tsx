'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="h-5 w-5 text-accent-400" />
            <span className="text-white font-medium">Chembur East, Mumbai</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Ready to fix your device? Contact us today for a free consultation 
            and quote. We're here to help with all your electronics repair needs.
          </p>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
            >
              <Phone className="h-8 w-8 text-accent-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+91-98765-43210</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
            >
              <MapPin className="h-8 w-8 text-accent-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">Chembur East, Mumbai</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
            >
              <Clock className="h-8 w-8 text-accent-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Working Hours</h3>
              <p className="text-gray-300">Mon-Sat: 10AM-8PM</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero