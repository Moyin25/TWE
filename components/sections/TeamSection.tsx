"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & CEO",
    bio: "Climate scientist with 15+ years of experience in environmental research and policy.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@tweather.org",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "Director of Operations",
    bio: "Community organizer passionate about environmental justice and sustainable development.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@tweather.org",
    },
  },
  {
    name: "Emma Thompson",
    role: "Head of Communications",
    bio: "Environmental journalist and storyteller dedicated to making climate science accessible.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emma@tweather.org",
    },
  },
  {
    name: "Dr. James Park",
    role: "Research Director",
    bio: "Renewable energy expert focused on innovative solutions for sustainable communities.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@tweather.org",
    },
  },
  {
    name: "Aisha Patel",
    role: "Community Engagement Lead",
    bio: "Grassroots organizer building bridges between science and community action.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aisha@tweather.org",
    },
  },
  {
    name: "Carlos Silva",
    role: "Technology Director",
    bio: "Software engineer developing digital tools for environmental monitoring and education.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "carlos@tweather.org",
    },
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-gray-50 dark:bg-[#0c2b2d] relative overflow-hidden">
      {/* Optional background flare */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(163,228,148,0.4),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(163,228,148,0.1),transparent_70%)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-hartone font-bold text-black dark:text-white mb-8">Meet Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto">
            The passionate individuals driving our mission forward with expertise, dedication, and unwavering commitment
            to environmental action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social media icons */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-black dark:text-black mb-1">{member.name}</h3>
                  <p className="text-green-dark dark:text-green-dark font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
