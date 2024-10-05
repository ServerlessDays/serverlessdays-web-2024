'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronRight, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Import mascot SVGs
import AnteaterSVG from '@/app/images/mascottes/anteater.svg'
import DinoSVG from '@/app/images/mascottes/dino.svg'
import DogSVG from '@/app/images/mascottes/dog.svg'
import MothSVG from '@/app/images/mascottes/moth.svg'
import OctoSVG from '@/app/images/mascottes/octo.svg'
import OwlSVG from '@/app/images/mascottes/owl.svg'
import logo from '@/app/images/logo.svg'

export function ServerlessDaysLandingComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <header className="container mx-auto px-4 py-6 border-b-0 border-black">
        <nav className="flex items-center justify-between">
          <Image src={logo} alt="ServerlessDays Logo" width={300} />

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

      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Image src={AnteaterSVG} alt="Anteater mascot" className="size-48" />
        <Image src={DinoSVG} alt="Dino mascot" className="size-48" />
        <Image src={DogSVG} alt="Dog mascot" className="size-48" />
        <Image src={MothSVG} alt="Moth mascot" className="size-48" />
        <Image src={OctoSVG} alt="Octo mascot" className="size-48" />
        <Image src={OwlSVG} alt="Owl mascot" className="size-48" />
      </div>

      <main className="container mx-auto px-4 py-4">
        <section className="text-center mb-40 mt-20">
          <h1 className="text-6xl font-bold mb-4">ServerlessDays</h1>
          <p className="text-2xl mb-8">One Day. One Track. One Community.</p>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="font-semibold hover:bg-black hover:text-white transition-colors">
              Upcoming events
            </Button>
            <Button variant="outline" size="lg" className="font-semibold hover:bg-black hover:text-white transition-colors">
              Become a sponsor
            </Button>
            <Button variant="outline" size="lg" className="font-semibold hover:bg-black hover:text-white transition-colors">
              Host an event
            </Button>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">About ServerlessDays</h2>
          <p className="text-lg mb-6 max-w-prose">
            ServerlessDays is a global event series focused on fostering the serverless community. We
            have so far organized <strong>52 events</strong> in <strong>20 countries</strong> across the globe. Each conference is unique,
            locally organized, and not-for-profit.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our core principles are:</h3>
          <ul className="list-disc list-outside ml-5 text-lg space-y-2 max-w-prose">
            <li><strong>Local</strong> - Organized by local community leaders and featuring local speakers.</li>
            <li><strong>Accessible</strong> - Affordable and physically accessible to all attendees.</li>
            <li><strong>Representative</strong> - Reflective of the broader community. Enforces our Code of Conduct.</li>
          </ul>
        </section>

        <section className="mb-20">
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
            Interested in speaking? <a href="#" className="text-black hover:underline">Contact us to share your story.</a>
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
            Interested in sponsoring? <a href="#" className="text-black hover:underline">Reach out to us for opportunities.</a>
          </p>
        </section>

        <section id="host" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">Organize</h2>
          <p className="text-lg mb-4">
            Want to bring ServerlessDays to your area? Join our mission to build a strong local serverless
            community. Contact us at <a href="mailto:organise@serverlessdays.io" className="text-black hover:underline">organise@serverlessdays.io</a>.
          </p>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            ServerlessDays is driven by passionate volunteers. Want to get involved? Contact us!
          </p>
          <p className="mb-4">
            For questions, sponsorships, or press inquiries, reach out at <a href="mailto:hello@serverlessdays.io" className="text-white hover:underline">hello@serverlessdays.io</a>.
          </p>
          <a href="https://twitter.com/ServerlessDays" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:underline">
            <Twitter className="mr-2" /> @ServerlessDays
          </a>
        </div>
      </footer>
    </div>
  )
}