// import './common/style.css';
// import { FaRegFilePdf } from "react-icons/fa";
// import { IoCallOutline } from "react-icons/io5";
// import { TfiEmail } from "react-icons/tfi";
// import { MdPhoneAndroid } from "react-icons/md";
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className='pt-20 min-h-screen'>
//         <motion.div
//         initial={{opacity:0, y:50}}
//         whileInView={{opacity:1, y:0}}
//         transition={{duration:0.3, delay:0.9}}
//         viewport={{once:true}}>
//             <div className='max-w-screen-xl mx-auto px-4'>
//                 <div className="grid md:grid-cols-2 py-20 gap-12">
//                     <div className="">
//                         <div className="introduction-card">
//                             <div className="card-header">
//                                 <p className='text-gray-400 mb-2'><span className='wave'>👋</span> Hi, I'm</p>
//                                 <h1 className='text-5xl md:text-6xl font-bold'>Mayuri Wandhe</h1>
//                                 <h3 className='text-xl mt-2 font-medium tracking-wide bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text
//                                 text-transparent'>Software Development Engineer</h3>
//                             </div>
//                             <div className="card-body">
//                                 <p className='mt-6 text-gray-400 max-w-lg leading-relaxed'>
//                                     Crafting high-performance, scalable applications with 3+ years of industry experience.
//                                 </p>
//                                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-20">
//                                     <div className=''>
//                                         <a type='button' href="./assets/Resume/Mayuri-Wandhe SDE-3+years-2026.pdf"  
//                                             className='px-6 py-3 bg-indigo-800 text-white rounded-lg font-medium inline-flex items-center gap-2 font-medium hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/10 transition duration-300'>
//                                             <FaRegFilePdf />
//                                             Download pdf
//                                         </a>
//                                     </div>
                                
//                                 <div className='relative group inline-block'>
//                                         <div className='absolute bottom-full mb-3 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
//                                             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rushaliwandhe25@gmail.com" target='_blank' 
//                                             className='bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition  bg-indigo-900 p-3 rounded-full'>
//                                                 <TfiEmail />
//                                             </a>
//                                             <a href="tel:+919359809714" className='bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition bg-indigo-900 p-3 rounded-full'>
//                                                 <MdPhoneAndroid />
//                                             </a>
//                                         </div>
//                                         <button
//                                             className='px-6 py-3 bg-transparent border border-indigo-500 text-white rounded-lg font-medium inline-flex items-center gap-2 font-medium hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition duration-300'>
//                                                 <IoCallOutline />
//                                                 Contact me
//                                         </button>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex md:justify-center md:items-center lg:justify-end lg:items-end">
//                         <img src="./assets/images/Profile.jpeg" alt="profile-img" 
//                         className='w-100 flex justify-end rounded-2xl shadow-2xl shadow-indigo-500/40 hover:-translate-y-2 duration-300 transition' />
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
        
//     </section>
//   )
// }

// export default Hero;


import './common/style.css';
import { FaRegFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneAndroid } from "react-icons/md";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >

        <div className="max-w-screen-xl mx-auto px-6">

          <div className="grid md:grid-cols-2 items-center gap-12 py-16">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-gray-400 mb-2 text-lg">
                <span className="wave">👋</span> Hi, I'm
              </p>

              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Mayuri Wandhe
              </h1>

              <h3 className="text-xl mt-4 font-medium text-indigo-400">
                <Typewriter
                  words={[
                    "Software Development Engineer",
                    "Angular Developer",
                    "Frontend Specialist"
                  ]}
                  loop
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h3>

              <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
                Crafting high-performance, scalable applications with 3+ years of industry experience.
              </p>


              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="./assets/Resume/Mayuri-Wandhe SDE-3+years-2026.pdf"
                  className="px-6 py-3 bg-indigo-700 text-white rounded-xl inline-flex items-center gap-2 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 transition duration-300"
                >
                  <FaRegFilePdf />
                  Download PDF
                </a>


                {/* CONTACT BUTTON */}
                {/* <div className="relative group">

                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=rushaliwandhe25@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-indigo-900 border border-white/20 p-3 rounded-full hover:scale-110 transition"
                    >
                      <TfiEmail />
                    </a>

                    <a
                      href="tel:+919359809714"
                      className="bg-indigo-900 border border-white/20 p-3 rounded-full hover:scale-110 transition"
                    >
                      <MdPhoneAndroid />
                    </a>

                  </div>

                  <button className="px-6 py-3 border border-indigo-500 text-white rounded-xl inline-flex items-center gap-2 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 transition duration-300">
                    <IoCallOutline />
                    Contact Me
                  </button>

                </div> */}

              </div>


              {/* SOCIAL ICONS */}
              <div className="flex gap-6 mt-8 text-xl text-gray-400">

                <a
                  href="https://github.com/MayuriWandhe"
                  target="_blank"
                  className="hover:text-indigo-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="http://www.linkedin.com/in/mayuri-wandhe-926b16209"
                  target="_blank"
                  className="hover:text-indigo-400 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rushaliwandhe25@gmail.com" target='_blank'
                  className="hover:text-indigo-400 transition"
                >
                  <TfiEmail />
                </a>

                  <a href="tel:+919359809714" className="hover:text-indigo-400 transition">
                    <MdPhoneAndroid />
                  </a>
              </div>

            </div>


            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end items-center">

              <img
                src="./assets/images/Profile.jpeg"
                alt="profile"
                className="profile-float w-[320px] md:w-[420px] rounded-2xl shadow-2xl shadow-indigo-500/40 hover:scale-105 hover:-translate-y-3 transition duration-500"
              />

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero;