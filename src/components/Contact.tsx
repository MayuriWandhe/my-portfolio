import  emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import React, { useState } from "react"

const Contact = () => {

    const enquiryData = {
        name : '', 
        email : '',
        message : ''
    }

    const [enquiry, setEnquiry] = useState(enquiryData)

    const inputHandler = async(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
            const {name, value } = e.target
            console.log(e);
            setEnquiry((prev)=>({
                ...prev,
                [name]: value
            }))
    }
    const submit = (e:React.FormEvent) =>{
        e.preventDefault();
        console.log(enquiry);
        emailjs.send(
            "service_joon3mj",
            "template_ivokroc",
            enquiry,
            "ioTlPvMFrCPAH-zOH"
        ).then(()=>{
            alert("Message sent successfully!");
            setEnquiry(enquiryData);
        }).catch((error)=>{
            alert("Failed to send message");
            console.log(error);
            
        })
    }
  return (
    <section id='contact' className="py-25 px-4">
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.3, delay:0.9}}
        viewport={{once:true}}>
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
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rushaliwandhe25@gmail.com"  target="_blank"
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
                            <a href="https://www.instagram.com/_rushu_zone_?igsh=MThyMjZxbmJxczZtbw==" target="_blank" className="bg-white/5 border border-white/10 p-3 rounded-full hover:-translate-y-2 transition duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100009605836495&mibextid=LQQJ4d" target="_blank" className="bg-white/5 border border-white/10 p-3 rounded-full hover:-translate-y-2 transition duration-300">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={submit} className="space-y-6">
                            <input type="text" name="name" placeholder="Your Name" onChange={inputHandler} className="bg-white/5 w-full p-4 border border-white/10 rounded-lg text-white focus:border-indigo-500/50 outline-none" />
                            <input type="email" name="email" placeholder="Your Email" onChange={inputHandler} className="bg-white/5 w-full p-4 border border-white/10 rounded-lg text-white focus:border-indigo-500/50 outline-none" />
                            <textarea placeholder="Your Message" name="message" rows={5} onChange={inputHandler} className="bg-white/5 w-full p-4 border border-white/10 rounded-lg text-white focus:border-indigo-500/50 outline-none" />
                            <button type="submit" className="w-full bg-indigo-500/50 p-5 rounded-lg hover:text-indigo-500/50 hover:bg-transparent hover:border hover:border-indigo-500/50 hover:cursor-pointer">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
       
    </section>
  )
}

export default Contact
