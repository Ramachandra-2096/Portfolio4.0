"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Twitter } from 'lucide-react'

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">Feel free to reach out if you have any questions or if you're interested in collaborating on an AI project.</p>
            <p className="mb-4">Email: ramachandra.udupa@example.com</p>
            <p className="mb-4">Location: Bangalore, India</p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form>
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <Input type="text" placeholder="Subject" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}