export default function TechStackIcons({ isDarkMode }) {
  const skillGroups = [
    {
      category: "Software Development",
      skills: ["React", "JavaScript", "Python", "Django", "MySQL", "Git"]
    },
    {
      category: "Design & UI/UX",
      skills: ["Figma", "Qt Designer", "Tailwind CSS", "Canva", "Visual Studio"]
    },
    {
      category: "Hardware & Technical",
      skills: ["Hardware Troubleshooting", "PC Assembly/Disassembly", "Network Cabling" ]
    }
  ];

  return (
    <div className={`mt-2 w-full backdrop-blur-xl border rounded-xl px-6 py-6 transition-all duration-300 ${
      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100 shadow-sm'
    }`}>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-md font-black tracking-[0.2em] uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Skills & Expertise
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {/* Category Title */}
            <h3 className={`text-xs font-bold uppercase tracking-widest ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {group.category}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-sm font-medium rounded-full border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-zinc-800/50 border-white/5 text-zinc-400 hover:border-blue-500/50 hover:text-white' 
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-white hover:shadow-md hover:text-blue-600'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}