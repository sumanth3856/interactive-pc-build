"use client";

import React from "react";
import { Cpu, IndianRupee, ShieldCheck, Zap, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

export const Features = () => {
  return (
    <section className="py-24 px-4 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Why Build with <span className="text-electric-blue">RigBuilders?</span>
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Feature 1: Visual Builder (Large Card) */}
          <div className="md:col-span-2 neumorphic-card rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-48 h-48" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-end">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric-blue to-blue-700 flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Visual Builder Wizard</h3>
              <p className="text-gray-400">
                Drag, drop, and visualize your build in real-time. See exactly how your rig looks before you buy.
              </p>
            </div>
          </div>

          {/* Feature 2: Indian Pricing (Tall Card on Mobile, Square on Desktop) */}
          <div className="neumorphic-card rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <IndianRupee className="w-32 h-32" />
            </div>
             <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vibrant-pink to-rose-600 flex items-center justify-center shadow-lg shadow-rose-900/50">
                <IndianRupee className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Amazon India Sync</h3>
                <p className="text-sm text-gray-400">
                    Live pricing from Amazon.in. No more USD conversion guess-work.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Compatibility (Square) */}
          <div className="neumorphic-card rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-40 h-40" />
            </div>
             <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                <ShieldCheck className="text-green-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Compatibility Engine</h3>
                <p className="text-sm text-gray-400">
                    AI-powered checks ensure every part fits perfectly together.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4: Performance (Wide Card) */}
          <div className="md:col-span-2 neumorphic-card rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
             <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-electric-blue/5 to-transparent" />
             <div className="relative z-10 flex flex-col h-full justify-center">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                        <Zap className="text-yellow-400 w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                        <Cloud className="text-sky-400 w-6 h-6" />
                    </div>
                 </div>
              <h3 className="text-2xl font-bold text-white mb-2">Cloud Saved & Shareable</h3>
              <p className="text-gray-400 max-w-md">
                Save your progress and share your build lists with the community for feedback.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
