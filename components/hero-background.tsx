"use client"

import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const ParticleSystem = () => {
  const particlesRef = useRef<THREE.Points>(null)

  useEffect(() => {
    if (particlesRef.current) {
      const geometry = new THREE.BufferGeometry()
      const vertices = []
      const colors = []

      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * 20 - 10
        const y = Math.random() * 20 - 10
        const z = Math.random() * 20 - 10

        vertices.push(x, y, z)

        const r = Math.random()
        const g = Math.random()
        const b = Math.random()

        colors.push(r, g, b)
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      })

      particlesRef.current.geometry = geometry
      particlesRef.current.material = material
    }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.001
      particlesRef.current.rotation.y += 0.002
    }
  })

  return <points ref={particlesRef} />
}

export const HeroBackground = () => {
  return (
    <div className="hero-background">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleSystem />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}