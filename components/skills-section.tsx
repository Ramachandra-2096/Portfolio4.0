"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'

const skills = [
  { name: 'Machine Learning', level: 95 },
  { name: 'Deep Learning', level: 90 },
  { name: 'Natural Language Processing', level: 85 },
  { name: 'Computer Vision', level: 80 },
  { name: 'Data Analysis', level: 90 },
  { name: 'Python', level: 95 },
  { name: 'TensorFlow', level: 85 },
  { name: 'PyTorch', level: 80 },
  { name: 'Scikit-learn', level: 90 },
  { name: 'Big Data Technologies', level: 75 },
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-primary">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}