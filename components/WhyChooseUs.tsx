'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, DollarSign, Users, Award, Shield, Wrench } from 'lucide-react'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Clock,
      title: 'Fast Turnaround Time',
      description: 'Most repairs completed within 24-48 hours with express service available.',
      color: 'text-blue-500'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden costs. Best rates in Mumbai guaranteed.',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Skilled Technicians',
      description: 'Certified professionals with years of experience in electronics repair.',
      color: 'text-purple-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: '6-month warranty on all repairs with 100% satisfaction guarantee.',
      color: 'text-orange-500'
    },
    {
      icon: Shield,
      title: 'Genuine Parts',
      description: 'Only authentic parts used for all repairs to ensure longevity.',
      color: 'text-red-500'
    },
    {
      icon: Wrench,
      title: 'Modern Tools',
      description: 'Latest diagnostic equipment and repair tools for precise fixes.',
      color: 'text-indigo-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Play Tech?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 14 years of experience and 511+ satisfied customers, 
              we've built Mumbai's most trusted electronics repair service. 
              Here's what sets us apart from the competition.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">14+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">511+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">4.7★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Get Free Quote
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200">
                Call Now: +91-XXXXX-XXXXX
              </button>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`flex-shrink-0 p-3 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs