"use client";

import React from "react";
import { useBuilder } from "@/context/BuilderContext";
import { PCVisualizer } from "@/components/builder/PCVisualizer";
import { Navbar } from "@/components/ui/Navbar";
import { PartSelector } from "@/components/builder/PartSelector";

export default function BuilderPage() {
  const { build, totalPrice, compatibilityIssues } = useBuilder();

  return (
    <main className="min-h-screen bg-deep-charcoal text-white pt-24 pb-32 px-4 relative">
      <Navbar />
      
      <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">PC Builder</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left: VS Code Style Editor / Visualizer */}
            <div className="lg:col-span-2">
               <PCVisualizer />
            </div>

            {/* Right: Component Selection */}
            <div className="lg:col-span-1">
               <PartSelector />
            </div>
            
          </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-white/10 p-4 z-40 transition-transform">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Compatibility Indicator */}
              <div className="flex-1">
                  {compatibilityIssues.length > 0 ? (
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                           <span className="w-2 h-2 rounded-full bg-red-500" />
                           <span>{compatibilityIssues.length} Issues Found</span>
                      </div>
                  ) : (
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                           <span>Build Compatible</span>
                      </div>
                  )}
              </div>

              {/* Price */}
              <div className="text-right">
                   <p className="text-xs text-gray-400">Total Estimate</p>
                   <p className="text-2xl font-bold text-white">₹{totalPrice.toLocaleString('en-IN')}</p>
              </div>

              {/* Action */}
              <button className="bg-electric-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/25">
                  Checkout @ Amazon
              </button>
           </div>
           
           {/* Detailed Issues Drawer (Optional/Inline) */}
           {compatibilityIssues.length > 0 && (
               <div className="max-w-7xl mx-auto mt-2 p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <ul className="text-xs text-red-300 list-disc list-inside">
                        {compatibilityIssues.map((issue, i) => (
                            <li key={i}>{issue}</li>
                        ))}
                    </ul>
               </div>
           )}
      </div>

    </main>
  );
}
