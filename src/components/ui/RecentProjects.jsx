import desktopHome from "../../assets/projects/DesktopPetmate.png";
import posxinventory from "../../assets/projects/posxinventory.jpeg";
import coffeelogin from "../../assets/projects/logincoffee.jpeg";

export default function RecentProjects({ isDarkMode }) {
  return (
    <div className={`flex flex-col w-full max-w-5xl backdrop-blur-xl border mt-2 rounded-md p-3 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-row justify-between items-center">
            <h1 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>RECENT PROJECTS</h1>
            <a className={`text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`} href="">
                View All
            </a>
        </div>
      <div className="flex flex-row gap-2 ">
        <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-2 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <img src={desktopHome} alt="Petmate Desktop Home" className="w-full h-auto rounded-md" />
          <h3 className={`font-bold text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Petmate</h3>
        </div>
        <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-2 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <img src={posxinventory} alt="POS X Inventory" className="w-full h-auto rounded-md" />
          <h3 className={`font-bold text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>POS X Inventory</h3>
        </div>
        <div className={`flex flex-col w-full backdrop-blur-xl border rounded-md px-2 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
          <img src={coffeelogin} alt="Coffee Login" className="w-full h-auto rounded-md" />
          <h3 className={`font-bold text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Coffee Login</h3>
          <p className={`text-xs font-inter mt-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            I designed simple login for the Coffee shop project, a UI/UX Design.
            </p>
        </div>
      </div>
    </div>
  );
}