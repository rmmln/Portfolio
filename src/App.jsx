import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import profile from "./assets/profile.png";
import fb from "./assets/fb.svg";
import ig from "./assets/ig.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import location from "./assets/location.svg";
import cvPdf from "./assets/MolenoCV.pdf";
import htmlIcon  from "./assets/technicalstacks/html.svg";
import cssIcon from "./assets/technicalstacks/css.svg";
import tailwindIcon from "./assets/technicalstacks/tailwind.svg";
import jsIcon from "./assets/technicalstacks/js.svg";
import reactIcon from "./assets/technicalstacks/react.svg";
import javaIcon from "./assets/technicalstacks/java.svg";
import pythonIcon from "./assets/technicalstacks/python.svg";
import djangoIcon from "./assets/technicalstacks/django.svg";
import dockerIcon from "./assets/technicalstacks/docker.svg";
import figmaIcon from "./assets/technicalstacks/figma.svg";
import qtIcon from "./assets/technicalstacks/qtdesigner.svg";
import gitIcon from "./assets/technicalstacks/git.svg";

import Stepper from "./Stepper";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const educationSteps = [
    { title: "Bachelor of Science in Information Technology - CVSU", year: "2022-Present" },
    { title: "Technical Vocational Computer Programming - LYFJSHS", year: "2018-2020" },
    { title: "Governor Ferrer Memorial National High School - Main", year: "2014-2018" },
    { title: "General Artemio Ricarte Memorial School", year: "2008-2014" },
    
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`m-auto flex min-h-screen w-full flex-col items-center justify-start gap-4 px-4 py-4 transition-colors duration-300 sm:px-6 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-800 to-gray-900' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'}`}>
      <div className="relative flex w-full max-w-3xl justify-between transition-colors duration-300">
        <button 
          onClick={toggleTheme}
          className={`absolute right-0 top-0 inline-flex h-5 w-10 items-center rounded-full p-0.5 transition-colors duration-300 sm:right-2 sm:top-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          <span
            className={`h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`}
          />
        </button>
        <div className="flex w-full flex-col items-center gap-4 pt-8 text-center sm:flex-row sm:items-center sm:gap-5 sm:pt-0 sm:text-left">
          <img 
            src={profile} 
            alt="Profile" 
            className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
          />

      <div className="flex flex-col justify-center gap-1">
          
        <h1 className={`flex items-start justify-center text-3xl font-inter font-bold tracking-[0.2em] transition-colors duration-300 sm:justify-start sm:text-4xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <TypeAnimation
            sequence={["ROBERT MOLENO", 2000, "", 50]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </h1>
        <p className={`text-xs font-inter font-md transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          <img src={location} alt="Location" className={`w-4 h-4 inline-block transition-all duration-300 ${isDarkMode ? 'opacity-100' : 'brightness-0'}`} />
          Cavite, Philippines
        </p>
      <p className={`text-sm font-inter font-md transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          IT Student | UI/UX Designer 
        </p>
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:items-center">
        <a href={cvPdf} download="MolenoCV.pdf" target="_blank" rel="noopener noreferrer" className={`text-xs font-inter font-semibold py-2 px-6 rounded-sm transition duration-300 ease-in-out transform hover:scale-105 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'}`}>
          Download CV
        </a>
        <div className="flex flex-row justify-start gap-1">
          <a href="https://www.facebook.com/rmoleno15" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className={`w-5 h-5 transition duration-300 ease-in-out transform hover:scale-110 ${isDarkMode ? 'opacity-100' : 'invert'}`} />
          </a>
          <a href="https://www.instagram.com/_rm.mndz" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" className={`w-5.5 h-5.5 transition duration-300 ease-in-out transform hover:scale-110 ${isDarkMode ? 'opacity-100 ' : 'invert'}`} />
          </a>
          <a href="https://www.linkedin.com/in/robert-moleno?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">    
            <img src={linkedin} alt="LinkedIn" className={`w-5.5 h-5.5 transition duration-300 ease-in-out transform hover:scale-110 ${isDarkMode ? ' opacity-100 ' : 'invert'}`} />
          </a>
          <a href="https://github.com/rmmln" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className={`w-6 h-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-110 ${isDarkMode ? 'opacity-100' : 'invert'}`} />
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div className="grid w-full max-w-3xl gap-1 lg:grid-cols-[minmax(300px,0.80fr)_minmax(0,2.50fr)]">
        <div className={`row-span-2 backdrop-blur-xl border rounded-md
          xl p-3 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <Stepper steps={educationSteps} isDarkMode={isDarkMode} />
        </div>

        <div className={`w-full backdrop-blur-xl border rounded-md px-5 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <h1 className={`my-2 text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>ABOUT</h1>
          <p className={`w-full max-w-full  text-md font-inter leading-5 text-justify transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Im an aspiring UI/UX designer passionate about creating clean,
            user-friendly, and visually engaging interfaces. I enjoy turning
            ideas into meaningful digital experiences and continuously
            improving my skills in design and front-end development. Im
            always eager to learn, improve my skills, and stay updated with
            modern design trends to create better and more intuitive user
            experiences.
          </p>
        </div>
        <div className={` grid-cols-6 w-full backdrop-blur-xl border rounded-md p-3 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <h1 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>TECHNICAL STACK</h1>
          <div className="row-span-2 mt-2 grid w-full grid-cols-6 gap-3 justify-items-center">
          <img src={htmlIcon} alt="HTML" className="w-7 h-7 mt-2" title="HTML"/>
          <img src={cssIcon} alt="CSS" className="w-7 h-7 mt-2" title="CSS"/>
          <img src={tailwindIcon} alt="Tailwind CSS" className="w-7 h-7 mt-2" title="Tailwind CSS"/>
          <img src={jsIcon} alt="JavaScript" className="w-7 h-7 mt-2" title="JavaScript"/>
          <img src={reactIcon} alt="React" className="w-7 h-7 mt-2" title="React"/> 
          <img src={javaIcon} alt="Java" className="w-7 h-7 mt-2" title="Java"/>
          <img src={pythonIcon} alt="Python" className="w-7 h-7 mt-2" title="Python"/>
          <img src={djangoIcon} alt="Django" className="w-7 h-7 mt-2" title="Django"/>
          <img src={dockerIcon} alt="Docker" className="w-7 h-7 mt-2" title="Docker"/>
          <img src={figmaIcon} alt="Figma" className="w-7 h-7 mt-2" title="Figma"/>
          <img src={qtIcon} alt="Qt Designer" className="w-7 h-7 mt-2" title="Qt Designer"/>
          <img src={gitIcon} alt="Git" className="w-7 h-7 mt-2" title="Git"/>
        </div>
      </div>
        <div className={`mt-0 w-full lg:col-span-2 min-h-[320px] sm:min-h-[50px] rounded-md border px-4 py-3 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'border-white/20 bg-white/10' : 'border-gray-200 bg-white'}`}>
          <h1 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>RECENT PROJECTS</h1>
          <div className="flex flex-row gap-3 mt-2 h-50">
            <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-5 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
            </div>
            <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-5 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
            </div>
            <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-5 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
