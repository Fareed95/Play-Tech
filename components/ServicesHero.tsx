'use client'

import { motion } from 'framer-motion'
import { Wrench, Star } from 'lucide-react'

const ServicesHero = () => {
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
            <Wrench className="h-5 w-5 text-accent-400" />
            <span className="text-white font-medium">Professional Repair Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Complete Electronics
            <span className="block gradient-text">Repair Solutions</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            From Apple computers to mobile phones, tablets to cameras - we repair it all 
            with precision, speed, and guaranteed quality.
          </p>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-semibold">4.7/5</span>
            <span className="text-gray-300">• Trusted by 511+ customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero