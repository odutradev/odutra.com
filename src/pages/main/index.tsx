import Technologies from './subcomponentes/Technologies'
import Experience from './subcomponentes/Experience'
import Education from './subcomponentes/Education'
import Projects from './subcomponentes/Projects'
import Contact from './subcomponentes/Contact'
import Header from './subcomponentes/Header'
import Footer from './subcomponentes/Footer'
import Hero from './subcomponentes/Hero'

import type { MainPageProps } from './types'

const MainPage = (_props: MainPageProps) => {
  return (
    <div className="antialiased min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default MainPage
