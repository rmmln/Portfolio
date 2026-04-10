import desktopHome from "../../assets/projects/DesktopPetmate.png";

export default function RecentProjects({ isDarkMode }) {
  return (
    <div className={`flex flex-col w-full backdrop-blur-xl border mt-2 rounded-md p-3 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
      <h1 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>RECENT PROJECTS</h1>
      <div className="flex flex-row gap-2  h-full">
        <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-2 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <img src={desktopHome} alt="Petmate Desktop Home" className="w-full  rounded-md" />
          <h3 className={`font-bold text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Petmate</h3>
        </div>
        <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-2 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <img src={desktopHome} alt="Project 2" className="w-full h-auto rounded-md" />
          <h3 className={`font-bold text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project 2</h3>
        </div>
        <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-2 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <img src={desktopHome} alt="Project 3" className="w-full h-auto rounded-md" />
          <h3 className={`font-bold text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Design</h3>
          <p className={`text-xs font-inter mt-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            I designed simple login for the Coffee shop project, a UI/UX Design.
            </p>
        </div>
      </div>
    </div>
  );
}