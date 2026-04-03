import { TypeAnimation } from "react-type-animation";
import profile from "./assets/profile.png";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-gray-900 px-4 py-8">
  <div className="w-full max-w-5xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-10 shadow-2xl">
    
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
      
      <img 
        src={profile} 
        alt="Profile" 
        className="w-48 h-48 rounded-full object-cover"
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

        <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 font-inter font-light leading-8 text-justify">
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
</div>
  );
}

export default App;
