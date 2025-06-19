'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { CheckCircle, Award, Users, Wrench } from 'lucide-react'

const OurStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const milestones = [
    {
      year: '2010',
      title: 'Founded Play Tech',
      description: 'Started as a small electronics repair shop in Chembur East with a vision to provide quality repairs.'
    },
    {
      year: '2015',
      title: 'Apple Certified',
      description: 'Became authorized Apple repair center, specializing in MacBook and iMac repairs.'
    },
    {
      year: '2018',
      title: '500+ Customers',
      description: 'Reached milestone of serving over 500 satisfied customers with 4.7-star rating.'
    },
    {
      year: '2023',
      title: 'Modern Facility',
      description: 'Upgraded to state-of-the-art repair facility with latest diagnostic equipment.'
    }
  ]

  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'We never compromise on quality. Every repair is done with precision and care.'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Our certified technicians have years of experience in electronics repair.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Customer satisfaction is our top priority. We go above and beyond.'
    },
    {
      icon: Wrench,
      title: 'Modern Tools',
      description: 'We use the latest diagnostic equipment and genuine parts for all repairs.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Play Tech was founded in 2010 with a simple mission: to provide Mumbai with 
              the most reliable and professional electronics repair service. What started 
              as a small repair shop in Chembur East has grown into the city's most trusted 
              electronics service center.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Over the years, we've built our reputation on quality workmanship, 
              honest pricing, and exceptional customer service. Our team of skilled 
              technicians uses modern diagnostic equipment and genuine parts to ensure 
              every repair meets the highest standards.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">14+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">511+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg"
              alt="Play Tech Repair Center"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary-600 to-accent-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">Since 2010</div>
              <div className="text-sm opacity-90">Serving Mumbai</div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="gradient-text">Journey</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="gradient-text">Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory