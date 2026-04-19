import React from 'react';

const steps = [
  {
    title: "Step 1 — Structured Intake",
    description: "Forces required fields before submission to ensure all baseline context is present.",
    icon: "📝"
  },
  {
    title: "Step 2 — Smart Prompts",
    description: "Dynamically asks for missing context based on the detected issue type.",
    icon: "💡"
  },
  {
    title: "Step 3 — Auto Classification",
    description: "Tags issue type (domain, publish, config, etc.) automatically using pattern matching.",
    icon: "🏷️"
  },
  {
    title: "Step 4 — Signal Filtering",
    description: "Flags or blocks low-quality requests before they reach the support queue.",
    icon: "🛡️"
  }
];

export default function TriageLogic() {
  return (
    <section id="logic" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Triage Layer Logic</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">{step.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2 leading-tight">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-gray-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
