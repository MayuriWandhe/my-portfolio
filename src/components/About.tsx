import '../components/common/style.css';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id='about' className='min-h-screen flex items-center justify-center px-6 py-24'>
        <motion.div className='max-w-4xl text-center'
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration : 0.9, delay:0.3}}
            viewport={{once:true}}>
            <div className="text-center">
            {/* text-indigo-400 */}
                <p className=' text-sm tracking-[0.2em] uppercase mb-3 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'>
                    A little About Me
                </p>
                <h2  className='text-4xl md:text-5xl font-bold text-white mb-8'>Who I Am & What I Do</h2> 
                <div className="max-w-2xl space-y-6 text-gray-300 leading-relaxed  mx-auto  text-center">
                    <p>
                    With over 3 years of hands-on experience in web development, I specialize in building scalable and high-performance applications.
                    </p>
                    <p>
                        My focus lies in writing clean, maintainable code and designing systems that are both efficient and user-friendly.
                    </p>
                    <p>
                        I thrive in collaborative environments and continuously push myself to learn, improve, and adapt to new technologies.
                    </p>
                </div>
                <div className='grid md:grid-cols-3 gap-6 mt-12'>
                    <div className='bg-white/5 border border-white/10 backdrop-blur p-6 rounded-xl 
                    hover:-translate-y-2 hover:border-indigo-500/40  hover:bg-indigo-500/5 transition-all duration-300'>
                        <h3 className='text-indigo-400 font-semibold mb-2'>3+ Years Experience</h3>
                        <p className='text-gray-400 text-sm'>Building scalable and maintainable web applications.</p>
                    </div>
                    <div className='bg-white/5 border border-white/10 backdrop-blur p-6 rounded-xl 
                    hover:-translate-y-2 hover:border-indigo-500/40  hover:bg-indigo-500/5 transition-all duration-300'>
                        <div className="text-indigo-400 font-semibold mb-2">Performance Focused</div>
                        <p className='text-gray-400 text-sm'>Optimizing applications for speed and reliability.</p>
                    </div>
                    <div className='bg-white/5 border border-white/10 backdrop-blur p-6 rounded-xl
                    hover:-translate-y-2 hover:border-indigo-500/40  hover:bg-indigo-500/5 transition-all duration-300'>
                        <h3 className='text-indigo-400 font-semibold mb-2'>Continuous Learner</h3>
                        <div className='text-gray-400 text-sm'>Always exploring modern tools and best practices.</div>
                    </div>
                </div>               
            </div>
        </motion.div>
    </section>
  )
}

export default About
