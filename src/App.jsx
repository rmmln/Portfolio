import { TypeAnimation } from "react-type-animation";
import profile from "./assets/profile.png";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-gray-900 ">
      <div className="w-full max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-2 md:p-10 shadow-4xl">
    
    <div className="flex flex-col md:flex-row items-center  md:gap-10">
      
      <img 
        src={profile} 
        alt="Profile" 
        className="w-60 h-60 rounded-full object-cover"
      />

      <div className="flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-white text-center md:text-left">
          <TypeAnimation
            sequence={["ROBERT MOLENO", 2000, "", 500]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </h1>

        <p className="mt-2 text-sm sm:text-base md:text-lg text-white font-inter font-light leading-6 text-justify">
          Im an aspiring UI/UX designer passionate about creating clean,
          user-friendly, and visually engaging interfaces. I enjoy turning
          ideas into meaningful digital experiences and continuously
          improving my skills in design and front-end development. Im
          always eager to learn, improve my skills, and stay updated with
          modern design trends to create better and more intuitive user
          experiences.
        </p>
        <button className="flex justify-center mt-3 bg-gray-500 hover:bg-gray-900 text-white font-inter font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Resume
        </button>
      </div>

    </div>

  </div>
</div>
  );
}

export default App;
