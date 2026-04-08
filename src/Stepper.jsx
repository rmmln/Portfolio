function Stepper({ steps, isDarkMode }) {
  return (
    <div className="mt-1 overflow-x-auto pb-1">
      <ol className="flex min-w-max items-start">
        {steps.map((step, index) => (
          <li key={`${step.title}-${step.year}`} className="flex items-start">
            <div className="flex flex-col items-center pt-1">
              <span className={`h-3 w-3 rounded-full ${isDarkMode ? "bg-white" : "bg-gray-900"}`} />
            </div>
            <div className="ml-2 w-44">
              <p className={`text-xs font-semibold leading-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {step.title}
              </p>
              <p className={`mt-1 text-[11px] ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {step.year}
              </p>
            </div>
            {index < steps.length - 1 && (
              <span className={`mx-3 mt-2 h-0.5 w-10 rounded ${isDarkMode ? "bg-white/50" : "bg-gray-400"}`} />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Stepper;
