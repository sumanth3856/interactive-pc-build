"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/20 backdrop-blur-sm mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-vibrant-pink flex items-center justify-center">
                 <span className="font-bold text-white text-xs">RB</span>
             </div>
             <p className="text-gray-400 text-sm">
               The first visual PC builder designed for the Indian gaming community.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/builder" className="hover:text-electric-blue">Builder</Link></li>
              <li><Link href="/guides" className="hover:text-electric-blue">Guides</Link></li>
              <li><Link href="/showcase" className="hover:text-electric-blue">Showcase</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-electric-blue">About</Link></li>
              <li><Link href="/blog" className="hover:text-electric-blue">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-electric-blue">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-electric-blue hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-vibrant-pink hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} RigBuilders India. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
