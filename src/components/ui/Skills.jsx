export default function Skills({ isDarkMode }) {
    return (
        <div className={`mt-2 w-full backdrop-blur-xl border rounded-md px-5 py-2 shadow-4xl transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
            <h1 className={`my-2 text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>SKILLS</h1>
            <p className={`my-2 text-md font-md transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>JavaScript</p>
            <p className={`my-2 text-md font-md transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>React</p>
            <p className={`my-2 text-md font-md transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Node.js</p>
        </div>
    );
}
