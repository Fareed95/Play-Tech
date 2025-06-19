'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Smartphone, MapPin, Phone, Mail, Clock, Star, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      'Apple Computer Repair',
      'Mobile Phone Repair',
      'Tablet Repair',
      'Laptop Repair',
      'Audio Device Repair',
      'Camera Repair'
    ],
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    socialLinks: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'YouTube', icon: Youtube, href: '#' }
    ]
  }

  return (
    <footer className="bg-tech-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">PLAY TECH</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mumbai's most trusted electronics repair service since 2010. 
              Expert repairs, fast turnaround, and competitive pricing.
            </p>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.7/5</span>
              <span className="text-gray-400">• 511+ Reviews</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {footerLinks.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-tech-800 p-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Warranty Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Visit Our Store</p>
                  <p className="text-gray-300">Chembur East, Mumbai, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors duration-200">
                    +91-98765-43210
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <a href="mailto:info@playtech.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                    info@playtech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Working Hours</p>
                  <p className="text-gray-300">Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 bg-red-600/20 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-300 text-sm font-semibold mb-2">Emergency Repairs</p>
              <a
                href="tel:+919876543210"
                className="text-white font-bold hover:text-red-300 transition-colors duration-200"
              >
                24/7 Emergency Line
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tech-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Play Tech Electronics. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Designed & Developed by{' '}
              <a
                href="https://crodlin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200"
              >
                CRODLIN Technology
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer