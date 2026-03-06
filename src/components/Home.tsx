import Hero from './Hero'
import Navbar from './navbar/Navbar'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'

const Home = () => {
  return (
    <div>
        <Navbar />
        
        <div className='content bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b]'>
            <Hero />
            <About />
            <Skills />
            <Experience />
        </div>
        {/* <div className="absolute top-40 left-20 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full"></div> */}
    </div>
  )
}

export default Home
