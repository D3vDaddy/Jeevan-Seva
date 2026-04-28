import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
