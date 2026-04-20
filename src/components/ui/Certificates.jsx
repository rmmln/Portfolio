export default function Certificates({ isDarkMode }) {
  const certifications = [
    { title: "Hackathon 2025 (Java Language)" },
    { title: "LinkedIT Webinar on Agile & Scrum (2024)" },
    { title: "Dean’s Lister - First Semester, A.Y 2023-2024 (1.48)" }
  ];
 
  return (
    <div className={`w-full h-full backdrop-blur-xl border rounded-md p-4 shadow-4xl transition-all duration-300 ${
      isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'
    }`}>
      {/* Header na kapareho ng format sa Skills */}
      <h1 className={`mb-6 text-md font-bold tracking-[0.2em] transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        CERTIFICATIONS
      </h1>

      <div className="flex flex-wrap gap-2">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`px-3  rounded-full border transition-all duration-300 hover:scale-105 cursor-default ${
              isDarkMode
                ? 'bg-zinc-800/50 border-white/5 text-zinc-200 hover:border-blue-500/50 hover:text-white'
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-white hover:shadow-md hover:text-blue-600'
            }`}
          >
            {/* Same font size and style as your Tech Stack pills */}
            <p className="text-sm font-medium font-inter">
              {cert.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}