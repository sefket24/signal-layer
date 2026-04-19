import React from 'react';

const problems = [
  "Missing DNS records",
  "Unclear domain configuration",
  "No reproduction steps",
  "Partial or broken setups"
];

export default function Problem() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
          Most support requests are not complex, they are incomplete.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {problems.map((item, index) => (
            <li key={index} className="flex items-center space-x-3 text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-gray-900 border-l-4 border-gray-200 pl-6 italic">
          Support teams spend time collecting context instead of solving problems.
        </p>
      </div>
    </section>
  );
}
