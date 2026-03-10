import Hero from './Hero'
import Navbar from './navbar/Navbar'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Project from './Project'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        
        <div className='content bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e1b4b]'>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Project />
            <Education />
            <Contact />
            <Footer />
        </div>
        {/* <div className="absolute top-40 left-20 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full"></div> */}
    </div>
  )
}

export default Home
