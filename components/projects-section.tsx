"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AI-Powered Image Recognition',
    description: 'Developed a state-of-the-art image recognition system using deep learning techniques.',
    image: 'https://source.unsplash.com/random/800x600?ai',
    tags: ['Python', 'TensorFlow', 'Computer Vision'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Natural Language Processing Chatbot',
    description: 'Created an intelligent chatbot capable of understanding and responding to complex queries.',
    image: 'https://source.unsplash.com/random/800x600?chatbot',
    tags: ['Python', 'NLTK', 'Machine Learning'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Predictive Analytics Dashboard',
    description: 'Built a comprehensive dashboard for visualizing and predicting business metrics using AI.',
    image: 'https://source.unsplash.com/random/800x600?dashboard',
    tags: ['React', 'D3.js', 'Python', 'Scikit-learn'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open(project.demo, '_blank')}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}