import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import profile from "./assets/profile.png";
import fb from "./assets/fb.svg";
import ig from "./assets/ig.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import location from "./assets/location.svg";
import cvPdf from "./assets/MolenoCV.pdf";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`m-auto gap-2 flex flex-col min-h-screen items-center justify-start transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-800 to-gray-900' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'}`}>
      <div className={`mt-2 relative flex justify-between items-center w-full max-w-4xl backdrop-blur-xl border rounded-2xl p-5 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
        <button 
          onClick={toggleTheme}
          className={`absolute top-5 right-5 inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 p-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          <span
            className={`h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`}
          />
        </button>
        <div className="flex flex-row gap-4">
          <img 
            src={profile} 
            alt="Profile" 
            className="w-40 h-40 rounded-full object-cover"
          />

      <div className="flex flex-col justify-center gap-1">
          
        <h1 className={`tracking-widest flex items-start text-3xl font-inter font-bold text-left transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <TypeAnimation
            sequence={["ROBERT MOLENO", 2000, "", 50]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </h1>
        <p className={`text-xs font-inter font-light transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          <img src={location} alt="Location" className={`w-4 h-4 inline-block transition-all duration-300 ${isDarkMode ? 'opacity-100' : 'brightness-0'}`} />
          Cavite, Philippines
        </p>
      <p className={`text-sm font-inter font-light transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          IT Student | UI/UX Designer 
        </p>
        <div className="flex w-full gap-2 items-center">
        <a href={cvPdf} download="MolenoCV.pdf" target="_blank" rel="noopener noreferrer" className={`text-xs font-inter font-semibold py-1 px-6 rounded-sm transition duration-300 ease-in-out transform hover:scale-105 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'}`}>
          View CV
        </a>
        <div className="flex flex-row gap-1 justify-start">
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
  <div className="flex flex-row items-center  gap-2  w-full max-w-4xl">
  <div className={`w-full max-w-xl backdrop-blur-xl border rounded-2xl p-5 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}> 
      <h1 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Education</h1>
      <ul className={`list-disc text-xs font-inter pl-5 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <li>Bachelor of Science in Information Technology - CVSU (2022-Present)</li>
        <li>Technical Vocational Computer Programming - LYFJSHS (2018-2020)</li>
        <li>Governor Ferrer Memorial National High School - Main (2014-2018)</li>
        <li>General Artemio Ricarte Memorial School - (2008-2014)</li>
        </ul>
    </div>
    <div className={`w-full max-w-3xl backdrop-blur-xl border rounded-2xl p-5 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
      <h1 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About</h1>
        <p className={`w-full max-w-full mt-2 text-sm font-inter leading-5 text-justify transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Im an aspiring UI/UX designer passionate about creating clean,
                user-friendly, and visually engaging interfaces. I enjoy turning
                ideas into meaningful digital experiences and continuously
                improving my skills in design and front-end development. Im
                always eager to learn, improve my skills, and stay updated with
                modern design trends to create better and more intuitive user
                experiences.
        </p>
    </div> 
  </div>   
</div>
  );
}

export default App;
