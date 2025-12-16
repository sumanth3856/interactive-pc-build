"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

export const Navbar = () => {
  const { scrollY } = useScroll();
  
  // Progressive blur: 0px at top -> 12px after scrolling 50px
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  // Progressive background: Transparent at top -> Black/40 after scrolling 50px
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)"]);
  // Progressive border: Transparent -> Visible
  const borderColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.nav 
        style={{
            backdropFilter: backdropBlur,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
        }}
        className={cn(
          "rounded-full px-6 py-3 flex items-center justify-between w-full max-w-2xl",
          "border transition-shadow", // distinct border class for motion to control color
          "shadow-lg shadow-black/20"
        )}
      >
        {/* Logo area */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-vibrant-pink flex items-center justify-center">
             <span className="font-bold text-white text-xs">RB</span>
           </div>
           <span className="font-bold text-lg tracking-tight text-white group-hover:text-electric-blue transition-colors">
             RigBuilders
           </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          <Link href="/builder" className="hover:text-white transition-colors">Builder</Link>
          <Link href="/showcase" className="hover:text-white transition-colors">Showcase</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-vibrant-pink text-[10px] font-bold text-white rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          
          <button className="md:hidden text-gray-300 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link 
            href="/start-build"
            className="hidden md:block bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/5 transition-all"
          >
            Start Build
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};
