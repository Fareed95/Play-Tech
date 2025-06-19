'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from 'lucide-react'

const ContactInfo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactMethods =  [
    {
      icon: Phone,
      title: 'Phone',
      primary: '+91-98765-43210',
      secondary: 'Call for instant support',
      action: 'tel:+919876543210',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+91-98765-43210',
      secondary: 'Chat with us instantly',
      action: 'https://wa.me/919876543210',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@playtech.com',
      secondary: 'Send us your queries',
      action: 'mailto:info@playtech.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Website',
      primary: 'www.playtech.com',
      secondary: 'Visit our website',
      action: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 6:00 PM' },
    { day: 'Public Holidays', hours: 'Closed' }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact <span className="gradient-text">Information</span>
            </h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-900 font-semibold">{method.primary}</p>
                    <p className="text-gray-600 text-sm">{method.secondary}</p>
                  </div>
                  <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                    →
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-2">Emergency Repairs</h3>
              <p className="mb-4 opacity-90">
                Need urgent repair? We offer same-day emergency service for critical devices.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                Emergency Line
              </a>
            </motion.div>
          </motion.div>

          {/* Business Hours & Location */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-green-800 font-medium text-sm">
                  ✅ We're currently open! Call now for immediate assistance.
                </p>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Play Tech Electronics</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Chembur East, Mumbai<br />
                    Maharashtra, India<br />
                    PIN: 400071
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Landmarks</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Near Chembur Station</li>
                    <li>• Opposite Diamond Garden</li>
                    <li>• 5 minutes from Chembur Camp</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                  <p className="text-gray-600">Free parking available for customers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo