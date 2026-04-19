'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="py-24 px-6 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-display">
        Filtering low-signal support requests before they reach your team
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
        Built from patterns seen in real user issues like domains, DNS, and incomplete setups.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button 
          onClick={() => document.getElementById('logic')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full cursor-pointer hover:bg-gray-800 transition-colors shadow-sm"
        >
          See how it works
        </button>
        <button 
          onClick={() => document.getElementById('example')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-2 text-gray-600 font-medium cursor-pointer hover:text-gray-900 transition-colors text-sm"
        >
          View example
        </button>
      </div>
    </section>
  );
}
