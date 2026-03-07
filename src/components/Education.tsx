import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react'

const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      university: "Rashtrasant Tukadoji Maharaj Nagpur University",
      duration: "2017 – 2021",
    },
  ];
  
const Education = () => {
  return (
    <section id='education' className='py-24 px-6'>
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.3, delay:0.9}}
        viewport={{once:true}}>
            <div className='max-w-5xl mx-auto'>
                <div className='text-center mb-16'>
                    <p className='text-sm text-indigo-500 uppercase tracking-[0.2em] mb-3'>ACADEMIC BACKGROUND</p>
                    <h3 className='text-4xl font-bold'>Education</h3>
            
                </div>
            
                <div className='space-y-8 mx-auto'>
                    {education.map((ed, index)=>(
                        <div key={index} className='flex items-start gap-6 bg-white/5 border border-white/10 max-w-6xl p-8 rounded-2xl
                        hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:-translate-y-2 duration-300 transition'>
                            <div className='text-indigo-400 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20'>
                                <GraduationCap size={22} />
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold text-white'>
                                    {ed.degree}
                                </h3>
                                <p className='indigo-400'>{ed.field}</p> 
                                <p className='text-gray-400 mt-1'>{ed.university}</p>
                                <p className='text-gray-500 text-sm mt-2'>{ed.duration}</p>
                            </div>
                        </div>
                    ))}
                    
                    
                </div>
            </div>
        </motion.div>
       
    </section>
  )
}

export default Education
