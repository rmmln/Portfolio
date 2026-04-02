import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className="h-screen flex items-start justify-start">
      
      <div className="m-3 w-1/2 h-90 relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-12 shadow-2xl">
        
        {/* glow effect */}
        <div className=" absolute inset-0 rounded-2xl bg-white/2 blur-xl"></div>

      <h1 className="text-3xl md:text-6xl font-bold text-width-5">
        <TypeAnimation
          sequence={[
            "ROBERT MOLENO",
            2000,
            "",
            500,
          ]}
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </h1>
      <p>I’m an aspiring UI/UX designer passionate about creating clean, user-friendly, and visually engaging interfaces. 
        I enjoy turning ideas into meaningful digital experiences and continuously improving my skills in design and front-end development.
        I’m always eager to learn, improve my skills, and stay updated with modern design trends to create better and more intuitive user experiences.</p>
    </div>
    </div>
  );
}

export default App;