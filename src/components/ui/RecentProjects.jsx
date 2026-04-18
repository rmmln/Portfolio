import React, { useState } from "react";
import { motion } from "framer-motion";

// Assets
import petLogin from "../../assets/projects/petLogin.png";
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


//Pet Information Screenshots
import ssHome from "../../assets/projects/petinfosys/petHome.png";
import ssProfile from "../../assets/projects/petinfosys/petProfile.png";
import ssRecords from "../../assets/projects/petinfosys/petRecords.png";
import ssAppoinments from "../../assets/projects/petinfosys/petAppointment.png";



const projects = [
  {
    title: "Pet Information System",
    img: petLogin,
    screenshots: [
      { img: petLogin, desc: "Login page overview." },
      { img: ssHome, desc: "Main dashboard overview." },
      { img: ssProfile, desc: "Detailed pet profile page." },
      { img: ssRecords, desc: "Medical records management." },
      { img: ssAppoinments, desc: "Appointment scheduling interface." },
    ],
  },
  {
    title: "POS X Inventory System",
    img: posPage,
    screenshots: [
      { img: ssLogin, desc: "Login page UI." },
      { img: ssPos, desc: "POS transaction screen." },
      { img: ssinventory, desc: "Inventory management." },
      { img: ssBuilder, desc: "PC Builder page." },
      { img: ssPullout, desc: "Pullout system." },
      { img: ssDeliveries, desc: "Deliveries tracking." },
      { img: ssHistory, desc: "Transaction history." },
    ],
  },
  {
    title: "Coffee Login Design",
    img: coffeelogin,
    screenshots: [
      { img: coffeelogin, desc: "Coffee themed login UI." },
    ],
  },
];

// infinite scroll
const loopedProjects = [...projects, ...projects];

export default function RecentProjects() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = activeProject?.screenshots || [];

  const next = () => {
    setCurrentIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* PROJECT CAROUSEL */}
      <div className="mt-2 w-full max-w-5xl border rounded-xl p-6 overflow-hidden bg-white/5 border-white/10 text-white">
        <h2 className="text-md font-bold uppercase tracking-[0.2em] mb-4">
          Recent Projects
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {loopedProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveProject(project);
                  setCurrentIndex(0);
                  setOpen(true);
                }}
                className="w-[300px] flex-shrink-0 rounded-xl overflow-hidden bg-zinc-900 cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={project.img}
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-2">
                  <h3 className="font-bold text-sm">{project.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MODAL CAROUSEL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-xl max-w-5xl w-full p-6 text-white relative">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-xl font-bold mb-6">
              {activeProject?.title}
            </h2>

            {/* CAROUSEL */}
            <div className="relative w-full h-[450px] flex flex-col items-center justify-center">

              {/* IMAGE */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={screenshots[currentIndex]?.img}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm text-gray-300 text-center">
                {screenshots[currentIndex]?.desc}
              </p>

              {/* PREV */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded"
              >
                ◀
              </button>

              {/* NEXT */}
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded"
              >
                ▶
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}