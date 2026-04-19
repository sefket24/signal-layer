'use client';

import React, { useState } from 'react';

export default function InteractiveExample() {
  const [isImproved, setIsImproved] = useState(false);

  return (
    <section id="example" className="py-24 px-6 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-100 italic">From low-signal to high-signal</h2>
        
        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 md:p-12 shadow-2xl relative">
          {!isImproved ? (
            <div className="flex flex-col items-center animate-in fade-in duration-500">
              <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-6 py-4 rounded-xl mb-8 font-mono text-lg">
                "My site isn’t working"
              </div>
              <button 
                onClick={() => setIsImproved(true)}
                className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
              >
                Improve request
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
                <div className="space-y-4">
                  <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                    <span className="text-gray-500 block mb-1">Domain:</span>
                    <span className="text-emerald-400">connected</span>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                    <span className="text-gray-500 block mb-1">DNS:</span>
                    <span className="text-red-400">missing A record</span>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                    <span className="text-gray-500 block mb-1">Platform:</span>
                    <span className="text-emerald-400">site builder publish</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                    <span className="text-gray-500 block mb-1">Issue type:</span>
                    <span className="text-blue-400">misconfiguration vs propagation</span>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded border border-gray-700 h-full">
                    <span className="text-gray-500 block mb-1">Repro steps:</span>
                    <span className="text-emerald-400">included</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsImproved(false)}
                className="mt-12 text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                Reset example
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
