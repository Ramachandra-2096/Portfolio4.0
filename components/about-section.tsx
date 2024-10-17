"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Code, Database } from 'lucide-react'

const milestones = [
  { year: 2015, event: 'Started AI journey' },
  { year: 2018, event: 'Graduated with honors in Computer Science' },
  { year: 2019, event: 'First AI research paper published' },
  { year: 2021, event: 'Joined leading AI research lab' },
  { year: 2023, event: 'Launched groundbreaking AI project' },
]

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              As an AI Developer, I'm passionate about pushing the boundaries of what's possible with artificial intelligence. My journey in the world of AI has been driven by curiosity and a desire to create intelligent systems that can make a positive impact on the world.
            </p>
            <p className="text-lg mb-4">
              With expertise in machine learning, deep learning, and natural language processing, I strive to develop innovative solutions that address complex challenges across various industries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Key Areas of Expertise:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle><Brain className="w-6 h-6 mb-2" /> Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Developing intelligent algorithms and models</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle><Code className="w-6 h-6 mb-2" /> Deep Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Creating neural networks for complex tasks</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle><Database className="w-6 h-6 mb-2" /> Big Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Analyzing and processing large datasets</CardDescription>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">My Journey</h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center mb-4 md:mb-0">
                <div className="text-primary font-bold text-lg">{milestone.year}</div>
                <div className="h-16 w-0.5 bg-primary my-2"></div>
                <div className="text-sm text-center">{milestone.event}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}