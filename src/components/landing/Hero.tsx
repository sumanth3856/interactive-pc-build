"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Users, Cpu, ShoppingCart } from "lucide-react";
import { GlobeAnimation } from "./GlobeAnimation";

export const Hero = () => {
  const [stars, setStars] = useState<Array<{left: number, top: number, delay: number, opacity: number}>>([]);

  useEffect(() => {
    const generatedStars = [...Array(50)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 60,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a12]">
      
      {/* Cosmic Background with Gradient Arc */}
      <div className="absolute inset-0 z-0">
        {/* Top arc glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-purple-600/20 via-blue-600/10 to-transparent rounded-[100%] blur-3xl" />
        
        {/* Stars effect */}
        <div className="absolute inset-0 opacity-40">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.delay}s`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 pt-32">
        {/* ... (rest of the component remains same, just ensuring wrapper structure matches) */}
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
            BUILD YOUR
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
            DREAM RIG
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-6">
          In the age of <span className="text-white font-medium">Visual Building</span>
        </p>
        
        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          India's first visual PC builder with real-time compatibility checks. 
          See your build come together piece by piece with live Amazon pricing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link 
            href="/builder"
            className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] hover:-translate-y-1 hover:scale-105"
          >
            Start Building
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/guides"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            View Guides
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-20 relative z-20">
          {/* User Avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-[#0a0a12] flex items-center justify-center text-xs font-bold">R</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-[#0a0a12] flex items-center justify-center text-xs font-bold">A</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-[#0a0a12] flex items-center justify-center text-xs font-bold">S</div>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">15,000+</p>
              <p className="text-gray-500 text-xs">Builds Created</p>
            </div>
          </div>

          <div className="w-px h-10 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" />
            <div className="text-left">
              <p className="text-white font-semibold">500+</p>
              <p className="text-gray-500 text-xs">Components</p>
            </div>
          </div>

          <div className="w-px h-10 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <p className="text-white font-semibold">Daily</p>
              <p className="text-gray-500 text-xs">Price Updates</p>
            </div>
          </div>
        </div>
      </div>


      {/* 3D Globe Animation (Merged Background Layer) */}
      <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden pointer-events-none translate-y-50 md:translate-y-0 scale-125 md:scale-100 origin-bottom">
        <div className="w-full h-[500px] md:h-[600px] opacity-70 mix-blend-screen">
            <GlobeAnimation />
        </div>
      </div>

      
      {/* Trusted By Section (Bottom Overlay) */}
      <div className="relative z-10 w-full py-5 border-t border-white/5 backdrop-blur-sm bg-black/10 mt-auto">
        <p className="text-center text-gray-500 text-[10px] tracking-[0.2em] uppercase mb-4">Trusted By</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using text for now, but styled to look like logos */}
          <span className="text-lg font-bold text-gray-300">amazon</span>
          <span className="text-lg font-bold text-gray-300 tracking-tighter">intel</span>
          <span className="text-lg font-bold text-gray-300">AMD</span>
          <span className="text-lg font-bold text-gray-300">NVIDIA</span>
          <span className="text-lg font-bold text-gray-300 font-serif">CORSAIR</span>
        </div>
      </div>
      
    </section>
  );
};
