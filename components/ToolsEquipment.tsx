'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wrench, Zap, Eye, Shield, Cpu, Microscope } from 'lucide-react'

const ToolsEquipment = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const equipment = [
    {
      icon: Microscope,
      name: 'Digital Microscopes',
      description: 'High-precision microscopes for micro-soldering and component-level repairs.',
      features: ['40x-1000x magnification', 'LED illumination', 'Digital imaging']
    },
    {
      icon: Zap,
      name: 'Advanced Soldering Stations',
      description: 'Temperature-controlled soldering equipment for delicate electronic work.',
      features: ['Precise temperature control', 'ESD-safe design', 'Multiple tip options']
    },
    {
      icon: Eye,
      name: 'Diagnostic Equipment',
      description: 'Professional diagnostic tools for accurate problem identification.',
      features: ['Multi-meter testing', 'Oscilloscopes', 'Logic analyzers']
    },
    {
      icon: Shield,
      name: 'ESD Protection',
      description: 'Electrostatic discharge protection to safeguard sensitive components.',
      features: ['Anti-static workstations', 'ESD wrist straps', 'Grounded surfaces']
    },
    {
      icon: Cpu,
      name: 'BGA Rework Station',
      description: 'Professional BGA rework equipment for motherboard repairs.',
      features: ['Precise heating control', 'X-ray alignment', 'Automated profiles']
    },
    {
      icon: Wrench,
      name: 'Specialized Tools',
      description: 'Complete set of precision tools for various repair tasks.',
      features: ['Precision screwdrivers', 'Spudger tools', 'Opening tools']
    }
  ]

  const capabilities = [
    'Component-level motherboard repair',
    'Micro-soldering and BGA reballing',
    'LCD/OLED screen replacement',
    'Data recovery from damaged devices',
    'Water damage restoration',
    'Battery replacement and calibration',
    'Software diagnostics and repair',
    'Quality testing and validation'
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Modern <span className="gradient-text">Tools & Equipment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in the latest diagnostic and repair equipment to ensure 
            precise, efficient, and reliable repairs for all your electronic devices.
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {equipment.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <tool.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {tool.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {tool.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Repair Capabilities</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With our advanced equipment and skilled technicians, we can handle 
              the most complex repairs that other service centers can't. From 
              micro-soldering to data recovery, we've got you covered.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{capability}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Quality Assurance</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>Thorough diagnostic testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Precision repair with genuine parts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Comprehensive functionality testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <span>6-month warranty guarantee</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-primary-600">99.5%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-accent-600">24-48h</div>
              <div className="text-sm text-gray-600">Avg. Repair Time</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ToolsEquipment