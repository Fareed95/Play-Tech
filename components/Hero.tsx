'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Star, CheckCircle, Clock, Award, Users } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Clock, label: 'Years Experience', value: '14+' },
    { icon: Users, label: 'Happy Customers', value: '511+' },
    { icon: Award, label: 'Star Rating', value: '4.7' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800">
      <div className="absolute inset-0 tech-pattern opacity-20"></div>

      {/* Floating Blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <CheckCircle className="h-5 w-5 text-accent-400" />
              <span className="text-white font-medium">Trusted Since 2010</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Mumbai's Most
              <span className="block gradient-text">Trusted Electronics</span>
              Repair Center
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Expert repairs for Apple computers, laptops, mobiles & more.
              Fast turnaround, competitive pricing, and skilled technicians with modern tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-8"
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.7/5</span>
              <span className="text-gray-300">• 511+ Reviews</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Book Your Repair Now
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 flex items-center justify-center"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Image and 3 Floating Stat Boxes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative">
              {/* Top-right stat box */}
              {(() => {
                const Icon = stats[0].icon
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -top-6 -right-6 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stats[0].value}</div>
                        <div className="text-sm text-gray-600">{stats[0].label}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })()}

              {/* Image */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg"
                  alt="Electronics Repair Service"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Bottom-left stat box */}
              {(() => {
                const Icon = stats[2].icon
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stats[2].value}</div>
                        <div className="text-sm text-gray-600">{stats[2].label}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })()}
            </div>

            {/* Below image stat box */}
            {(() => {
              const Icon = stats[1].icon
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="mt-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stats[1].value}</div>
                      <div className="text-sm text-gray-600">{stats[1].label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })()}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
