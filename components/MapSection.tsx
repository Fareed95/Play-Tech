'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation, Car, Train } from 'lucide-react'

const MapSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directions = [
    {
      icon: Train,
      title: 'By Train',
      description: 'Chembur Station (Central Line) - 5 minutes walk',
      color: 'text-blue-500'
    },
    {
      icon: Car,
      title: 'By Car',
      description: 'Free parking available. Near Diamond Garden',
      color: 'text-green-500'
    },
    {
      icon: Navigation,
      title: 'GPS Navigation',
      description: 'Search "Play Tech Chembur" on Google Maps',
      color: 'text-purple-500'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find <span className="gradient-text">Our Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our repair center in Chembur East, Mumbai. Easy to reach by train, 
            car, or public transport with free parking available.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Directions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Reach Us</h3>
            
            {directions.map((direction, index) => (
              <motion.div
                key={direction.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-gray-100`}>
                  <direction.icon className={`h-6 w-6 ${direction.color}`} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{direction.title}</h4>
                  <p className="text-gray-600">{direction.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">Our Address</h4>
                  <p className="opacity-90 leading-relaxed">
                    Play Tech Electronics<br />
                    Chembur East, Mumbai<br />
                    Maharashtra 400071<br />
                    India
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96 lg:h-full min-h-[400px]">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.759006487361!2d72.90074251060541!3d19.06215359888837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7eaf5ac7701%3A0x2145b64336762e10!2sPlay%20tech!5e0!3m2!1sen!2sin!4v1750862451583!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Play Tech Location"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Directions?</h3>
            <p className="text-gray-600 mb-6">
              Having trouble finding us? Call us and we'll guide you to our location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Call for Directions
              </a>
              <a
                href="https://maps.app.goo.gl/26hniovtxLZaHorQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection