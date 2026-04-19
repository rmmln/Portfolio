function Stepper({ steps, isDarkMode }) {
  return (
    <div>
      <h1 className={`text-md font-bold tracking-[0.2em] transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        EDUCATION
      </h1>
      <ol
        className={`relative mt-2 space-y-2 before:absolute before:bottom-0 before:left-[3px] before:top-2 before:w-px before:rounded before:content-[''] ${
          isDarkMode ? "before:bg-white/25" : "before:bg-gray-300"
        }`}
      >
        {steps.map((step, index) => (
          <li key={`${step.degree}-${step.year}`} className="relative flex items-start gap-2">
            <div className="relative z-9 flex h-6 w-[8px] items-center justify-center  leading-none">
              <span className={`mt-px block h-2 w-2 rounded-full ${isDarkMode ? "bg-white" : "bg-gray-900"}`} />
            </div>
            <div className="flex-1 mt-2">
              <p className={`text-medium font-semibold leading-5 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {step.degree}
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                {step.school}
              </p>
              <p className={`text-xs tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
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
