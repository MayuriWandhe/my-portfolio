import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"

const Contact = () => {
  return (
    <section id='contact' className="py-25 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-sm bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-3 tracking-[0.2em] uppercase"> GET IN TOUCH </p>
                <h3 className="text-4xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400 max-w-xl mx-auto"> 
                    I'm always open to discussing new opportunities,
                    collaborations, or interesting projects.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <a href="mailto:rushaliwandhe25@gmail.com" 
                    className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-500/5 hover:border-indigo-500/50">
                        <Mail className="text-indigo-400" size={22} />
                        <div className="items-center">
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="text-white">rushaliwandhe25@gmail.com</p>
                        </div>
                    </a>

                    <a href="tel:+919359809714"
                    className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl  hover:bg-indigo-500/5 hover:border-indigo-500/50">
                        <Phone className="text-indigo-400" size={22} />
                        <div className="items-center">
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="text-white">+91 9359809714</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/mayuri-wandhe-926b16209" target="_blank"
                    className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl  hover:bg-indigo-500/5 hover:border-indigo-500/50">
                        <Linkedin className="text-indigo-400" size={22} />
                        <div className="items-center">
                            <p className="text-sm text-gray-400">LinkdIn</p>
                            <p className="text-white">https://www.linkedin.com/in/mayuri-wandhe-926b16209</p>
                        </div>
                    </a>

                    <a href="https://github.com/MayuriWandhe" target="_blank"
                    className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl  hover:bg-indigo-500/5 hover:border-indigo-500/50">
                        <Github className="text-indigo-400" size={22} />
                        <div className="items-center">
                            <p className="text-sm text-gray-400">GitHub</p>
                            <p className="text-white">https://github.com/MayuriWandhe</p>
                        </div>
                    </a>

                    <div className="flex py-2 gap-5">
                        <a href="" className="bg-white/5 border border-white/10 p-3 rounded-full hover:-translate-y-2 transition duration-300">
                            <Instagram size={20} />
                        </a>
                        <a href="" className="bg-white/5 border border-white/10 p-3 rounded-full hover:-translate-y-2 transition duration-300">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    </section>
  )
}

export default Contact
