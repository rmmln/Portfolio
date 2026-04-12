import React from "react";
import { motion } from "framer-motion";

// Assets
import desktopHome from "../../assets/projects/DesktopPetmate.png";
import posxinventory from "../../assets/projects/posxinventory.jpeg";
import coffeelogin from "../../assets/projects/logincoffee.jpeg";

const projects = [
  { title: "Pet Information System", img: desktopHome, desc: "In our capstone, i created a pet management dashboard using Python." },
  { title: "POS X Inventory System", img: posxinventory, desc: "I made a UI/UX design for the Point of Sales and Inventory system." },
  { title: "Coffee Login Design", img: coffeelogin, desc: "I made a simple Coffee Login and homepage design using Figma and try prototyping." },
];

// Dinuplicate natin para pagdating sa gitna, yung dulo ay kamukha ng simula
const loopedProjects = [...projects, ...projects];

export default function RecentProjects({ isDarkMode }) {
  return (
    <div className={`mt-2 w-full max-w-5xl border rounded-xl p-6 overflow-hidden ${
      isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'
    }`}>
      
      <div className="flex justify-between items-center mb-2 px-2">
        <h2 className="text-md font-bold uppercase tracking-[0.2em]">Recent Projects</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Ito yung gumagalaw na container */}
        <motion.div 
          className="flex gap-4 w-max" // w-max para hindi mag-wrap yung items pababa
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ 
            ease: "linear", 
            duration: 20, // Bagalan natin para mas swabe tingnan
            repeat: Infinity 
          }}
        >
          {loopedProjects.map((project, index) => (
            <div 
              key={index} 
              className={`w-[300px] md:w-[350px] flex-shrink-0 rounded-xl overflow-hidden border 
                transition-all duration-500 ease-in-out hover:scale-105 
                ${isDarkMode ? 'bg-zinc-900 border-white/10' : 'bg-gray-50 border-gray-200'}`}
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <img 
                    src={project.img} 
                    alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Info */}
              <div className="p-2">
                <h3 className="font-bold text-sm uppercase">{project.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{project.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Shadow overlays para magmukhang pumapasok/lumalabas sa screen */}
        <div className={`absolute inset-y-0 left-0 w-20 pointer-events-none z-10 bg-gradient-to-r ${
          isDarkMode ? 'from-[#0f172a]' : 'from-white'
        } to-transparent`} />
        
        <div className={`absolute inset-y-0 right-0 w-20 pointer-events-none z-10 bg-gradient-to-l ${
          isDarkMode ? 'from-[#0f172a]' : 'from-white'
        } to-transparent`} />
      </div>
    </div>
  );
}
