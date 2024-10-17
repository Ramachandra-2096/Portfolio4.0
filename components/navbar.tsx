"use client"

import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed w-full z-10 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              RU
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/#projects" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link href="/#skills" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </Link>
              <Link href="/#blog" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}