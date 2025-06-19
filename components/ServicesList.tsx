'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Laptop, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Headphones, 
  Camera,
  Gamepad2,
  Watch,
  Tv,
  HardDrive,
  Battery,
  Wifi
} from 'lucide-react'

const ServicesList = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      category: 'Computer Repairs',
      icon: Laptop,
      color: 'from-blue-500 to-blue-600',
      services: [
        'MacBook Pro/Air Repair',
        'iMac Screen Replacement',
        'Mac Mini Upgrades',
        'Logic Board Repair',
        'Keyboard Replacement',
        'Battery Replacement',
        'Data Recovery',
        'Software Installation'
      ]
    },
    {
      category: 'Mobile Phone Repairs',
      icon: Smartphone,
      color: 'from-green-500 to-green-600',
      services: [
        'iPhone Screen Repair',
        'Android Screen Replacement',
        'Battery Replacement',
        'Charging Port Repair',
        'Camera Repair',
        'Speaker/Microphone Fix',
        'Water Damage Repair',
        'Software Issues'
      ]
    },
    {
      category: 'Tablet Repairs',
      icon: Tablet,
      color: 'from-purple-500 to-purple-600',
      services: [
        'iPad Screen Replacement',
        'Android Tablet Repair',
        'Battery Replacement',
        'Charging Port Fix',
        'Home Button Repair',
        'Camera Replacement',
        'Software Restoration',
        'Touch Screen Issues'
      ]
    },
    {
      category: 'Laptop Services',
      icon: Monitor,
      color: 'from-orange-500 to-orange-600',
      services: [
        'Screen Replacement',
        'Keyboard Repair',
        'Motherboard Repair',
        'Hard Drive Replacement',
        'RAM Upgrades',
        'Cooling Fan Repair',
        'Power Jack Repair',
        'Virus Removal'
      ]
    },
    {
      category: 'Audio Devices',
      icon: Headphones,
      color: 'from-pink-500 to-pink-600',
      services: [
        'Headphone Jack Repair',
        'Speaker Replacement',
        'Bluetooth Issues',
        'Volume Control Fix',
        'Cable Replacement',
        'Driver Installation',
        'Sound Quality Issues',
        'Wireless Connectivity'
      ]
    },
    {
      category: 'Camera Repairs',
      icon: Camera,
      color: 'from-indigo-500 to-indigo-600',
      services: [
        'Lens Replacement',
        'Shutter Repair',
        'LCD Screen Fix',
        'Battery Issues',
        'Memory Card Problems',
        'Autofocus Repair',
        'Flash Repair',
        'Firmware Updates'
      ]
    },
    {
      category: 'Gaming Devices',
      icon: Gamepad2,
      color: 'from-red-500 to-red-600',
      services: [
        'Controller Repair',
        'Console Overheating',
        'Disc Drive Issues',
        'HDMI Port Repair',
        'Power Supply Fix',
        'Joystick Replacement',
        'Button Repair',
        'Software Issues'
      ]
    },
    {
      category: 'Smart Watches',
      icon: Watch,
      color: 'from-teal-500 to-teal-600',
      services: [
        'Screen Replacement',
        'Battery Replacement',
        'Strap Repair',
        'Water Damage',
        'Charging Issues',
        'Software Problems',
        'Sensor Calibration',
        'Connectivity Issues'
      ]
    },
    {
      category: 'TV & Monitors',
      icon: Tv,
      color: 'from-yellow-500 to-yellow-600',
      services: [
        'Screen Repair',
        'Backlight Issues',
        'Power Problems',
        'HDMI Port Repair',
        'Remote Control Issues',
        'Audio Problems',
        'Smart TV Software',
        'Display Calibration'
      ]
    },
    {
      category: 'Data Services',
      icon: HardDrive,
      color: 'from-gray-500 to-gray-600',
      services: [
        'Data Recovery',
        'Hard Drive Repair',
        'SSD Replacement',
        'File Transfer',
        'Backup Solutions',
        'Cloud Setup',
        'Data Migration',
        'Storage Upgrades'
      ]
    },
    {
      category: 'Power Issues',
      icon: Battery,
      color: 'from-emerald-500 to-emerald-600',
      services: [
        'Battery Replacement',
        'Charging Port Repair',
        'Power Adapter Issues',
        'Overheating Problems',
        'Power Management',
        'Circuit Board Repair',
        'Voltage Issues',
        'Power Optimization'
      ]
    },
    {
      category: 'Connectivity',
      icon: Wifi,
      color: 'from-cyan-500 to-cyan-600',
      services: [
        'WiFi Issues',
        'Bluetooth Problems',
        'Network Setup',
        'Router Configuration',
        'Signal Boosting',
        'Antenna Repair',
        'Connection Troubleshooting',
        'Network Security'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All <span className="gradient-text">Repair Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electronics repair services with expert technicians, 
            genuine parts, and competitive pricing. We fix it right the first time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((category, index) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Icon & Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {category.category}
                </h3>
              </div>

              {/* Services List */}
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
                    {service}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors duration-200">
                  Get Quote →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Don't See Your Device?</h3>
          <p className="text-lg mb-6 opacity-90">
            We repair many more devices! Contact us for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
              Call Now: +91-98765-43210
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
              WhatsApp Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesList