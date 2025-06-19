'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-accent-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Fix Your Device?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Don't let broken electronics slow you down. Get expert repairs 
              with fast turnaround and competitive pricing.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-accent-500 to-accent-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <Phone className="h-6 w-6 mr-3" />
                Book Repair Now
                <motion.span
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <Clock className="h-8 w-8 text-accent-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Fast Service</h3>
              <p className="text-gray-300">Most repairs done in 24-48 hours</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <MapPin className="h-8 w-8 text-accent-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Convenient Location</h3>
              <p className="text-gray-300">Chembur East, Mumbai</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <Phone className="h-8 w-8 text-accent-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Free Consultation</h3>
              <p className="text-gray-300">Call for instant quote</p>
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 max-w-md mx-auto"
          >
            <h3 className="text-xl font-bold text-white mb-2">Emergency Repairs?</h3>
            <p className="text-red-100 mb-4">Need urgent repair? We offer same-day service!</p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-200"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Emergency Line
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA