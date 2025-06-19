'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Laptop, Smartphone, Tablet, Monitor, Headphones, Camera } from 'lucide-react'
import Link from 'next/link'

const FeaturedServices = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Laptop,
      title: 'Apple Computer Repair',
      description: 'MacBook, iMac, Mac Mini repairs with genuine parts and expert technicians.',
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile Phone Repair',
      description: 'iPhone, Android screen replacement, battery, charging port repairs.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Tablet,
      title: 'Tablet Repair',
      description: 'iPad, Android tablet screen, battery, and software issue repairs.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Monitor,
      title: 'Laptop Repair',
      description: 'All brands laptop repair including screen, keyboard, motherboard fixes.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Headphones,
      title: 'Audio Device Repair',
      description: 'Headphones, speakers, earbuds repair and replacement services.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Camera,
      title: 'Camera Repair',
      description: 'Digital camera, DSLR, action camera repair and maintenance.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Featured <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional electronics repair services with modern tools, skilled technicians, 
            and competitive pricing. We fix it right the first time.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300">
                <span>Learn More</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All Services
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedServices