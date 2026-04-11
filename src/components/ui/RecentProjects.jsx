import desktopHome from "../../assets/projects/DesktopPetmate.png";
import posxinventory from "../../assets/projects/posxinventory.jpeg";
import coffeelogin from "../../assets/projects/logincoffee.jpeg";

export default function RecentProjects({ isDarkMode }) {
  const projects = [
    {
      title: "Petmate",
      description: "Pet management dashboard with service tracking.",
      img: desktopHome,
    },
    {
      title: "POS X Inventory",
      description: "Inventory management system with real-time updates.",
      img: posxinventory,
    },
    {
      title: "Coffee Login",
      description: "Simple, elegant login UI/UX design for a local cafe.",
      img: coffeelogin,
    },
  ];

  const theme = {
    container: isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200',
    card: isDarkMode ? 'bg-white/10 border-white/10 hover:bg-white/15' : 'bg-white border-gray-200 hover:shadow-lg',
    textPrimary: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
  };

  return (
    <div className={`mt-2 w-full max-w-5xl border rounded-xl p-6 transition-all duration-300 ${theme.container}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-xl font-bold tracking-tight ${theme.textPrimary}`}>
          RECENT PROJECTS
        </h2>
        <a href="#" className="text-sm font-semibold text-blue-500 hover:underline">
          View All
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group flex flex-col border rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${theme.card}`}
          >
            {/* Image Wrapper */}
            <div className="aspect-video overflow-hidden bg-gray-200">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className={`font-bold text-base ${theme.textPrimary}`}>
                {project.title}
              </h3>
              <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${theme.textSecondary}`}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}