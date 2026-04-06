import { TypeAnimation } from "react-type-animation";
import profile from "./assets/profile.png";
import fb from "./assets/fb.svg";
import ig from "./assets/ig.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import location from "./assets/location.svg";
function App() {
  return (
    <div className="gap-2 flex flex-col min-h-screen flex items-center justify-start bg-gradient-to-br from-black via-gray-800 to-gray-900">
      <div className="flex w-full max-w-xl p-5 shadow-4xl">
        <div className="flex flex-row items-center  md:gap-4">
          <img 
            src={profile} 
            alt="Profile" 
            className="w-40 h-40 rounded-full object-cover"
          />

      <div className="flex flex-col gap-1">
          
        <h1 className="tracking-widest flex items-start text-3xl font-inter font-bold text-white text-center md:text-left">
          <TypeAnimation
            sequence={["ROBERT MOLENO", 2000, "", 50]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </h1>
        <p className="text-xs text-white font-inter font-light">
          <img src={location} alt="Location" className="w-4 h-4 inline-block opacity-80" />
          Cavite, Philippines
        </p>
      <p className="text-sm text-white font-inter font-light">
          IT Student | UI/UX Designer 
        </p>
        <div className="flex w-full gap-2">
        <button className=" mt-3 bg-white hover:bg-gray-100 text-sm text-gray-900 font-inter font-semibold py-0 px-6 rounded-sm transition duration-300 ease-in-out transform hover:scale-105">
          Resume
        </button>
        <div className="flex flex-row gap-1 justify-start ">
          <button>
            <img src={fb} alt="Facebook" className="mt-3 w-5 h-5 transition duration-300 ease-in-out transform hover:scale-110" />
          </button>
          <button>
            <img src={ig} alt="Instagram" className="mt-3 w-5.5 h-5.5 transition duration-300 ease-in-out transform hover:scale-110" />
          </button>
          <button>
            <img src={linkedin} alt="LinkedIn" className="mt-3 w-5 h-5 transition duration-300 ease-in-out transform hover:scale-110" />
          </button>
          <button>
            <img src={github} alt="GitHub" className="mt-3 w-5.5 h-5.5 rounded-lg transition duration-300 ease-in-out transform hover:scale-110" />
          </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div className="flex gap-2">
  <div className="w-full max-w-xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-4xl"> 

    </div>
    <div className="w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-4xl">
      <h1 className="text-white text-3xl font-bold">About</h1>
        <p className=" mt-2 text-sm text-white font-inter font-light leading-5 text-justify">
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
