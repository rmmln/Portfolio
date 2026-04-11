import htmlIcon from "../../assets/technicalstacks/html.svg";
import cssIcon from "../../assets/technicalstacks/css.svg";
import tailwindIcon from "../../assets/technicalstacks/tailwind.svg";
import jsIcon from "../../assets/technicalstacks/js.svg";
import reactIcon from "../../assets/technicalstacks/react.svg";
import javaIcon from "../../assets/technicalstacks/java.svg";
import pythonIcon from "../../assets/technicalstacks/python.svg";
import djangoIcon from "../../assets/technicalstacks/django.svg";
import dockerIcon from "../../assets/technicalstacks/docker.svg";
import figmaIcon from "../../assets/technicalstacks/figma.svg";
import qtIcon from "../../assets/technicalstacks/qtdesigner.svg";
import gitIcon from "../../assets/technicalstacks/git.svg";
import sqlIcon from "../../assets/technicalstacks/mysql.svg";

export default function TechStackIcons({ isDarkMode }) {
  return (
    <div className={`mt-2 w-full backdrop-blur-xl border rounded-md px-5 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
      <div className="flex flex-row justify-between items-center">
      <h1 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>TECHNICAL STACK</h1>
      <a className={`text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`} href="">
        View All
      </a>
      </div>
      <div className="row-span-3 mt-3 grid w-full grid-cols-5 gap-1 justify-items-center">
        <div>
            <h1>Frontend</h1>
        </div>
        <img src={htmlIcon} alt="HTML" className="w-7 h-7" title="HTML"/>
        <img src={cssIcon} alt="CSS" className="w-7 h-7" title="CSS"/>
        <img src={tailwindIcon} alt="Tailwind CSS" className="w-7 h-7" title="Tailwind CSS"/>
        <img src={jsIcon} alt="JavaScript" className="w-7 h-7" title="JavaScript"/>
        <img src={reactIcon} alt="React" className="w-7 h-7" title="React"/> 

        <div>
            <h1>Backend</h1>
        </div>
        <img src={javaIcon} alt="Java" className="w-7 h-7" title="Java"/>
        <img src={pythonIcon} alt="Python" className="w-7 h-7" title="Python"/>
        <img src={djangoIcon} alt="Django" className="w-7 h-7" title="Django"/>
        <img src={dockerIcon} alt="Docker" className="w-7 h-7" title="Docker"/>
        <img src={figmaIcon} alt="Figma" className="w-7 h-7" title="Figma"/>
        <img src={qtIcon} alt="Qt Designer" className="w-7 h-7" title="Qt Designer"/>
        <img src={gitIcon} alt="Git" className="w-7 h-7" title="Git"/>
        <img src={sqlIcon} alt="SQL" className="w-7 h-7" title="SQL"/>
        </div>
      </div>
  );
}
