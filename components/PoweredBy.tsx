'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Code, Smartphone } from 'lucide-react'

const PoweredBy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-tech-800 to-tech-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6"
          >
            <Lightbulb className="h-8 w-8 text-white" />
          </motion.div>

          {/* Main Text */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Powered by Innovation
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            💡 This website is proudly designed and managed by{' '}
            <span className="font-bold text-white">CRODLIN Technology</span> – 
            empowering businesses with smart tech solutions.
          </motion.p>

          {/* Features Grid */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-left max-w-4xl mx-auto"
>
  <div className="flex items-center space-x-3 text-gray-300">
    <Code className="h-5 w-5 text-primary-400" />
    <span>Modern Web Development</span>
  </div>
  <div className="flex items-center space-x-3 text-gray-300">
    <Smartphone className="h-5 w-5 text-accent-400" />
    <span>Mobile-First Design</span>
  </div>
  <div className="flex items-center space-x-3 text-gray-300">
    <Lightbulb className="h-5 w-5 text-yellow-400" />
    <span>Smart Tech Solutions</span>
  </div>
  <div className="flex items-center space-x-3 text-gray-300">
    <Code className="h-5 w-5 text-green-400" />
    <span>CRM / ERP Systems</span>
  </div>
  <div className="flex items-center space-x-3 text-gray-300">
    <Lightbulb className="h-5 w-5 text-purple-400" />
    <span>SaaS Platform Development</span>
  </div>
  <div className="flex items-center space-x-3 text-gray-300">
    <Smartphone className="h-5 w-5 text-pink-400" />
    <span>SEO & Digital Optimization</span>
  </div>
</motion.div>


          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8"
          >
            <a
              href="https://crodlin.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More About CRODLIN
              <motion.span
                className="ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PoweredBy