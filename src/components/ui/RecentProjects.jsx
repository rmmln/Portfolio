import React, { useState } from "react";
import { motion } from "framer-motion";

// LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

// Assets
import desktopHome from "../../assets/projects/DesktopPetmate.png";
import posPage from "../../assets/projects/posPage.png";
import coffeelogin from "../../assets/projects/logincoffee.jpeg";

// POS screenshots
import ssLogin from "../../assets/projects/posxinventory/loginPage.png";
import ssPos from "../../assets/projects/posxinventory/posPage.png";
import ssinventory from "../../assets/projects/posxinventory/inventoryPage.png";
import ssBuilder from "../../assets/projects/posxinventory/pcBuildPage.png";
import ssPullout from "../../assets/projects/posxinventory/pulloutPage.png";
import ssDeliveries from "../../assets/projects/posxinventory/deliveriesPage.png";
import ssHistory from "../../assets/projects/posxinventory/historyPage.png";

// ALL IMAGES (isang gallery na)
const allImages = [
  { src: desktopHome, title: "Pet Information System" },
  { src: posPage, title: "POS X Inventory System" },
  { src: coffeelogin, title: "Coffee Login Design" },

  { src: ssLogin, title: "POS Login" },
  { src: ssPos, title: "POS Page" },
  { src: ssinventory, title: "Inventory Page" },
  { src: ssBuilder, title: "PC Builder" },
  { src: ssPullout, title: "Pullout" },
  { src: ssDeliveries, title: "Deliveries" },
  { src: ssHistory, title: "History" },
];

const projects = [
  {
    title: "Pet Information System",
    img: desktopHome,
    desc: "In our capstone, I created a pet management dashboard using Python.",
  },
  {
    title: "POS X Inventory System",
    img: posPage,
    desc: "UI/UX design for POS and Inventory system.",
  },
  {
    title: "Coffee Login Design",
    img: coffeelogin,
    desc: "Simple coffee login UI using Figma.",
  },
];

// loop for animation
const loopedProjects = [...projects, ...projects];

export default function RecentProjects({ isDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`mt-2 w-full max-w-5xl border rounded-xl p-6 overflow-hidden ${
        isDarkMode
          ? "bg-white/5 border-white/10 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-2 px-2">
        <h2 className="text-md font-bold uppercase tracking-[0.2em]">
          Recent Projects
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* CAROUSEL */}
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {loopedProjects.map((project, index) => (
            <div
              key={index}
              className={`w-[300px] md:w-[350px] flex-shrink-0 rounded-xl overflow-hidden border 
              transition-all duration-500 hover:scale-105
              ${
                isDarkMode
                  ? "bg-zinc-900 border-white/10"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              {/* CLICKABLE IMAGE */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-zinc-900 cursor-pointer group"
                onClick={() => setOpen(true)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition">
                  View Gallery
                </div>
              </div>

              {/* TEXT */}
              <div className="p-2">
                <h3 className="font-bold text-sm uppercase">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* LEFT SHADOW */}
        <div
          className={`absolute inset-y-0 left-0 w-20 pointer-events-none z-10 bg-gradient-to-r ${
            isDarkMode ? "from-[#0f172a]" : "from-white"
          } to-transparent`}
        />

        {/* RIGHT SHADOW */}
        <div
          className={`absolute inset-y-0 right-0 w-20 pointer-events-none z-10 bg-gradient-to-l ${
            isDarkMode ? "from-[#0f172a]" : "from-white"
          } to-transparent`}
        />
      </div>

      {/* LIGHTBOX (SMALLER VIEW) */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={allImages}
        plugins={[Captions]}
        styles={{
          container: {
            backgroundColor: "rgba(0,0,0,0.9)",
          },
          slide: {
            maxWidth: "800px",
            margin: "0 auto",
          },
          image: {
            borderRadius: "12px",
          },
        }}
      />
    </div>
  );
}