import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaAngular,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
  } from "react-icons/fa";
  
  import {
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiExpress,
  } from "react-icons/si";
import { motion } from 'framer-motion';
  
const Skills = () => {

    const skills = [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Angular", icon: FaAngular },
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
    ];

  return (
    <section id='skills' className='py-24 px-6'>
        <motion.div className=''
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.9, delay:0.3}}
        viewport={{once: true}}>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-16'>
                    <p className='text-indigo-400 uppercase tracking-[0.2em] text-sm  mb-3 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'>
                        My Expertise
                    </p>
                    <h2 className='text-4xl md:text-5xl font-bold'>Skiils & Technologies</h2>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {skills.map((skill, index)=>{
                        const Icon = skill.icon
                        return (
                            <div key={index} className='flex flex-col items-center bg-white/5 border border-white/10 rounded-xl
                                py-5 px-4 backdrop-blur hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:-translate-y-2 transition-all duration-300'>
                                <Icon className='text-4xl text-indigo-400 mb-3' />
                                <p className='text-sm text-gray-300'>{skill.name}</p>
                            </div>
                        )
                    })}
                
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Skills
