'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000)
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "919876543210"
  const message = "Hi! I need help with electronics repair. Can you assist me?"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 max-w-xs mb-2"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="pr-6">
                  <h4 className="font-bold text-gray-900 mb-1">Need Quick Help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Chat with us on WhatsApp for instant support and quick quotes!
                  </p>
                  <div className="text-xs text-gray-500">
                    ⚡ Usually replies within minutes
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-30"></div>
            
            {/* Icon */}
            <MessageCircle className="h-8 w-8 text-white relative z-10" />
            
            {/* Notification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            >
              1
            </motion.div>
          </motion.a>

          {/* Floating Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-20 right-0 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
          >
            Chat with us!
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat