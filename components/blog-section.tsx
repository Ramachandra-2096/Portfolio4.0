"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    title: 'The Future of AI in Healthcare',
    excerpt: 'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment.',
    date: 'May 15, 2023',
    readTime: '5 min read',
    image: 'https://source.unsplash.com/random/800x600?ai,healthcare'
  },
  {
    title: 'Understanding Neural Networks',
    excerpt: 'A deep dive into the architecture and functioning of neural networks in machine learning.',
    date: 'April 22, 2023',
    readTime: '7 min read',
    image: 'https://source.unsplash.com/random/800x600?neural,network'
  },
  {
    title: 'Ethics in AI Development',
    excerpt: 'Discussing the importance of ethical considerations in the development of AI systems.',
    date: 'March 10, 2023',
    readTime: '6 min read',
    image: 'https://source.unsplash.com/random/800x600?ethics,ai'
  }
]

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date} • {post.readTime}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}