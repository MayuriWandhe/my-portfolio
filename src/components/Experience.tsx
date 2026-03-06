import { motion } from "framer-motion"

const experience = [
    {
        company : 'Instaacoders Technology',
        role : 'Software Development Engineer',
        duration : 'Feb 2024 – Jul 2025',
        points : [
            "Developed scalable web applications using Angular and TypeScript",
            "Built reusable UI components and responsive layouts",
            "Integrated REST APIs and optimized frontend performance",
            "Collaborated with backend and design teams"
        ]
    },
    {
        company : 'Piexxi Technology LLP',
        role : 'Web Developer',
        duration : 'Dec 2022 – Jun 2023',
        points : [
           "Developed responsive interfaces using Angular",
            "Worked on debugging and performance optimization",
            "Integrated API services for frontend communication"
        ]
    },
    {
        company : 'Procohat Technology Pvt Ltd',
        role : 'Frontend Developer',
        duration : 'Aug 2021 – Oct 2022',
        points : [
            "Built UI components using Angular and Angular Material",
            "Implemented reactive forms and dynamic UI logic",
            "Improved application responsiveness and usability"
        ]
    }
]
const Experience = () => {
  return (
        <section id='experience' className='py-24 px-6'>
            <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, delay:0.3}}
                viewport={{once:true}}>
                <h2 className="text-4xl font-bold text-center mb-16">
                    Experience
                </h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-4 top-0 h-full w-[2px] bg-indigo-500/30"></div>
                    {experience.map((exp, index)=>(
                        <div className="relative pl-12 mb-12 group" key={index}>
                        <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-indigo-500 border-4 border-black group-hover:scale-110 transition"></div>
                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-xl rounded-xl hover:border-indigo-500/40 transition hover:bg-indigo-500/5 hover:-translate-y-2 duration-300">
                            <h3 className="text-xl font-semibold text-white">{exp.role} </h3>
                            <p className="text-indigo-400 text-sm">{exp.company}</p>
                            <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                            <ul className="space-y-2">
                                {exp.points.map((pt, i)=>(
                                    <li className="text-gray-300 text-sm flex gap-2" key={i}>
                                        <span className="text-indigo-400">•</span>
                                        {pt}
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>
                    ))

                    }
                    
                </div>
            </motion.div>
           
        </section>
  )
}

export default Experience
