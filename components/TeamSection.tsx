'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Wrench, Users } from 'lucide-react'

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    {
      name: 'Rajesh Patel',
      role: 'Lead Technician',
      experience: '12+ Years',
      specialization: 'Apple Computer Repairs',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      certifications: ['Apple Certified', 'Electronics Expert']
    },
    {
      name: 'Amit Kumar',
      role: 'Mobile Repair Specialist',
      experience: '8+ Years',
      specialization: 'Smartphone & Tablet Repairs',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      certifications: ['Mobile Certified', 'Android Expert']
    },
    {
      name: 'Priya Sharma',
      role: 'Customer Service Manager',
      experience: '6+ Years',
      specialization: 'Customer Relations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      certifications: ['Service Excellence', 'Quality Assurance']
    }
  ]

  const stats = [
    {
      icon: Users,
      number: '15+',
      label: 'Expert Technicians',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Certifications',
      color: 'text-green-500'
    },
    {
      icon: Wrench,
      number: '100+',
      label: 'Years Combined Experience',
      color: 'text-purple-500'
    }
  ]

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
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our skilled technicians bring years of experience and professional 
            certifications to ensure your devices receive the best care possible.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className={`inline-flex p-4 rounded-2xl bg-gray-100 mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              {/* Photo */}
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-primary-200 transition-colors duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {member.experience}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.specialization}</p>

              {/* Certifications */}
              <div className="space-y-2">
                {member.certifications.map((cert, certIndex) => (
                  <span
                    key={certIndex}
                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Our Team Philosophy</h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            "Every device tells a story, and every repair is a chance to restore not just 
            functionality, but peace of mind. We treat every customer's device as if it were our own."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
              Meet Our Team
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
              Join Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection