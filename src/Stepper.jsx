function Stepper({ steps, isDarkMode }) {
  return (
    <div>
      <h1 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        Education
      </h1>
      <ol
        className={`relative mt-4 space-y-3 before:absolute before:bottom-1 before:left-[3px] before:top-2 before:w-px before:rounded before:content-[''] ${
          isDarkMode ? "before:bg-white/25" : "before:bg-gray-300"
        }`}
      >
        {steps.map((step, index) => (
          <li key={`${step.title}-${step.year}`} className="relative flex items-start gap-2">
            <div className="relative z-10 flex h-4 w-[8px] items-start justify-center pt-1 leading-none">
              <span className={`mt-px block h-1.5 w-1.5 rounded-full ${isDarkMode ? "bg-white" : "bg-gray-900"}`} />
            </div>
            <div className="flex-1">
              <p className={`text-sm font-semibold leading-5 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {step.title}
              </p>
              <p className={`mt-1 text-xs tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {step.year}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Stepper;
