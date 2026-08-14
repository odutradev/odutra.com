import Technologies from './subcomponentes/Technologies'
import Experience from './subcomponentes/Experience'
import Projects from './subcomponentes/Projects'
import Contact from './subcomponentes/Contact'
import Header from './subcomponentes/Header'
import Footer from './subcomponentes/Footer'
import Hero from './subcomponentes/Hero'

const MainPage = () => {
  return (
    <div className="antialiased min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default MainPage
