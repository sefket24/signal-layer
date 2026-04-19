import React from 'react';

const impacts = [
  "Reduces repeat questions",
  "Cuts back-and-forth in support",
  "Improves quality of incoming requests",
  "Helps teams focus on real issues"
];

export default function Impact() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why this matters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {impacts.map((impact, index) => (
          <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <p className="text-gray-800 font-medium leading-relaxed">
              {impact}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
