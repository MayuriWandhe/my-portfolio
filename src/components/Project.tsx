import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
    {
      title: "SoloHomes",
      description:
        "Modern real estate platform designed to simplify property discovery for buyers, sellers, and agents. Features intelligent search, property listing management, and tour scheduling.",
      tech: ["Angular", "TypeScript", "SCSS", "REST API"],
      github: "#",
      live: "https://dev.solo-homes.com/sell",
    },
    {
      title: "All Pass",
      description:
        "Large-scale event management system handling speaker invitations, registrations, logistics, and attendee coordination across web and mobile platforms.",
      tech: ["Angular", "TypeScript", "Bootstrap", "API Integration"],
      github: "#",
      live: "http://eventpro.piexxi.in/event-home",
    },
    {
      title: "Boiler World Expo",
      description:
        "Interactive exhibition platform allowing exhibitors and visitors to share media, explore booths, and interact through comments, likes, and content feeds.",
      tech: ["Angular", "Reactive Forms", "REST API", "Media Upload"],
      github: "#",
      live: "https://www.boilerworldexpo.com/",
    },
    {
        title: "Brahmand Ayurveda",
        description:
          "Clinic management system enabling patient registration, appointment booking, and doctor-patient communication through a responsive dashboard.",
        tech: ["Angular", "TypeScript", "Authentication", "Dashboard"],
        github: "#",
        live: "#",
      },
    ];
    
const Project = () => {
  return (
    <section id="project" className="py-24 px-6">
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.3, delay:0.9}}
        viewport={{once:true}}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-indigo-500 uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        My work
                    </p>
                    <h3 className="text-4xl text-white font-bold mb-3">Featured Projects</h3>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A selection of projects showcasing my experience building
                        scalable web applications and modern user interfaces.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index)=>(
                        <div key={index} className="bg-white/5 border border-white/10 hover:bg-indigo-500/5 p-8 rounded-2xl border border-white/10
                        hover:border-indigo-500/50 hover:-translate-y-2 duration-300 transition">
                            <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((techs, i)=>(
                                    <span key={i} className="px-3 py-1 text-xs bg-indigo-500/10 text-indigo-300 rounded-full">{techs}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href={project.live} target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                                    <ExternalLink size={18}/>
                                    live
                                </a> 
                            </div>
                        </div>
                    ))}                   
                </div>
               
            </div>
        </motion.div>
    </section>
  )
}

export default Project
