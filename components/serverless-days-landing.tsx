'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronRight, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from 'framer-motion'
// @ts-ignore
import { useInView } from 'react-intersection-observer'

// Import mascot SVGs
import AnteaterSVG from '@/app/images/mascottes/anteater.svg'
import DinoSVG from '@/app/images/mascottes/dino.svg'
import DogSVG from '@/app/images/mascottes/dog.svg'
import MothSVG from '@/app/images/mascottes/moth.svg'
import OctoSVG from '@/app/images/mascottes/octo.svg'
import OwlSVG from '@/app/images/mascottes/owl.svg'
import UnicornSVG from '@/app/images/mascottes/unicorn.svg'
import logo from '@/app/images/logo.svg'

export function ServerlessDaysLandingComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <header className="container mx-auto px-4 py-6 border-b-0 border-black">
        <nav className="flex items-center justify-between">
          <Image src={logo} alt="ServerlessDays Logo" width={300} priority />

          <div className="hidden md:flex space-x-6">
            <a href="#join" className="hover:underline">Upcoming events</a>
            <a href="#sponsor" className="hover:underline">Become a sponsor</a>
            <a href="#host" className="hover:underline">Host an event</a>
            <Link href="/code-of-conduct" className="hover:underline">Code of conduct</Link>
          </div>
          <Button variant="outline" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        
        {isMenuOpen && (
          <div className="mt-4 flex flex-col space-y-2 md:hidden">
            <a href="#join" className="hover:underline">Attend</a>
            <a href="#sponsor" className="hover:underline">Become a sponsor</a>
            <a href="#host" className="hover:underline">Host an event</a>
            <Link href="/code-of-conduct" className="hover:underline">Code of conduct</Link>
          </div>
        )}
      </header>

      <motion.div 
        className="container mx-auto px-4 py-8 justify-between items-center grid grid-cols-2 lg:grid-cols-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={AnteaterSVG} alt="Anteater mascot" className="size-48" />
        <Image src={DinoSVG} alt="Dino mascot" className="size-48" />
        <Image src={DogSVG} alt="Dog mascot" className="size-48" />
        <Image src={UnicornSVG} alt="Unicorn mascot" className="size-48" />
        <Image src={MothSVG} alt="Moth mascot" className="size-48" />
        <Image src={OctoSVG} alt="Octo mascot" className="size-48" />
        <Image src={OwlSVG} alt="Owl mascot" className="size-48" />
      </motion.div>

      <main className="container mx-auto px-4 py-4">
        <motion.section 
          className="text-center mb-40 mt-20 items-center flex flex-col"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-4xl lg:text-6xl font-bold mb-4" variants={itemVariants}>ServerlessDays</motion.h1>
          <motion.p className="text-2xl mb-8" variants={itemVariants}>One Day. One Track. One Community.</motion.p>

          <motion.div className="max-w-xl grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4" variants={itemVariants}>
            <Button variant="default" size="lg" className="font-semibold hover:bg-black hover:text-white transition-colors" onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}>
              Upcoming events
            </Button>
            <Button variant="outline" size="lg" className="font-semibold hover:bg-black hover:text-white transition-colors" onClick={() => document.getElementById('sponsor')?.scrollIntoView({ behavior: 'smooth' })}>
              Become a sponsor
            </Button>
            <Button variant="outline" size="lg" className="font-semibold hover:bg-black hover:text-white transition-colors" onClick={() => document.getElementById('host')?.scrollIntoView({ behavior: 'smooth' })}>
              Host an event
            </Button>
          </motion.div>
        </motion.section>

        <motion.section 
          className="mb-20"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2" variants={itemVariants}>About ServerlessDays</motion.h2>
          <motion.p className="text-lg mb-6 max-w-prose" variants={itemVariants}>
            ServerlessDays is a global event series focused on fostering the serverless community. We
            have so far organized <strong>52 conferences</strong> in <strong>20 countries</strong> across the globe. Each conference is <u>unique</u>,
            <u>locally organized</u>, and <u>not-for-profit</u>.
          </motion.p>
          <motion.h3 className="text-2xl font-semibold mb-4" variants={itemVariants}>Our core principles are:</motion.h3>
          <motion.ul className="list-disc list-outside ml-5 text-lg space-y-2 max-w-prose" variants={itemVariants}>
            <li><strong>Local</strong> - Organized by local community leaders and featuring local speakers.</li>
            <li><strong>Accessible</strong> - Affordable and physically accessible to all attendees.</li>
            <li><strong>Representative</strong> - Reflective of the broader community. Enforces our Code of Conduct.</li>
          </motion.ul>
        </motion.section>

        <section id="join" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">Upcoming conferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((conf) => (
              <div key={conf} className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-semibold mb-2">ServerlessDays {conf}</h3>
                <p className="mb-4">Date: TBA</p>
                <p className="mb-4">Location: TBA</p>
                <a href="#" className="text-black hover:underline inline-flex items-center">
                  Learn more <ChevronRight className="ml-1" />
                </a>
              </div>
            ))}
          </div>
          
          {/* New CTA section */}
          <div className="mt-12 bg-gray-100 border-2 border-black p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Future Events</h3>
            <p className="mb-6">Don&apos;t miss out on upcoming ServerlessDays conferences in your area. Join our mailing list to receive updates and announcements.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 border-2 border-black rounded"
              />
              <Button variant="default" size="lg" className="font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">Our speakers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="aspect-square">
                <Image
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={`Speaker ${i + 1}`}
                  width={200}
                  height={200}
                  className="rounded-full grayscale hover:grayscale-0 transition-all duration-300 border-2 border-black"
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg">
            Interested in speaking? <a href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Speaking%20at%20ServerlessDays" className="text-black hover:underline">Contact us to share your story.</a>
          </p>
        </section>

        <section id="sponsor" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">Our sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src={`/placeholder.svg?height=100&width=200`}
                  alt={`Sponsor ${i + 1}`}
                  width={200}
                  height={100}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg">
            Interested in sponsoring? <a href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Sponsoring%20ServerlessDays" className="text-black hover:underline">Reach out to us for opportunities.</a>
          </p>
        </section>

        <section id="host" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">Organize</h2>
          <p className="text-lg mb-4 max-w-prose">
            Want to bring ServerlessDays to your area? Join our mission to build a strong local serverless
            community. Contact us at <a href="mailto:organise@serverlessdays.io?subject=Interested%20in%20Organizing%20ServerlessDays" className="text-black hover:underline">organise@serverlessdays.io</a>.
          </p>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            ServerlessDays is driven by passionate volunteers. Want to get involved? <a href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Volunteering%20for%20ServerlessDays" className="text-white hover:underline">Contact us!</a>
          </p>
          <p className="mb-4">
            For questions, sponsorships, or press inquiries, reach out at <a href="mailto:hello@serverlessdays.io?subject=ServerlessDays%20Inquiry" className="text-white hover:underline">hello@serverlessdays.io</a>.
          </p>
          <a href="https://twitter.com/ServerlessDays" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:underline">
            <Twitter className="mr-2" /> @ServerlessDays
          </a>
        </div>
      </footer>
    </div>
  )
}