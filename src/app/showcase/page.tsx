"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { Heart, Share2, Award } from "lucide-react";

const SHOWCASE_BUILDS = [
    {
        id: 1,
        title: "White Ice Minimalist",
        author: "Rahul S.",
        image: "https://m.media-amazon.com/images/I/71s7+u4yUHL._AC_SL1500_.jpg",
        likes: 1240,
        tags: ["White", "Minimal", "RTX 4090"],
        badge: "Build of the Week"
    },
    {
        id: 2,
        title: "The Red Devil",
        author: "Amit K.",
        image: "https://m.media-amazon.com/images/I/71s7+u4yUHL._AC_SL1500_.jpg", // Placeholder
        likes: 850,
        tags: ["Red", "Gaming", "AORUS"],
        badge: null
    },
    {
        id: 3,
        title: "Productivity Powerhouse",
        author: "Sneha G.",
        image: "https://m.media-amazon.com/images/I/71s7+u4yUHL._AC_SL1500_.jpg", // Placeholder
        likes: 2100,
        tags: ["Workstation", "Intel i9", "128GB RAM"],
        badge: "Top Rated"
    }
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-deep-charcoal text-white pt-24 pb-20 px-4">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vibrant-pink to-purple-400">
                    Community Showcase
                </h1>
                <p className="text-gray-400 max-w-xl">
                    Discover incredible rigs built by the Indian gaming community. Get inspired for your next masterpiece.
                </p>
            </div>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all">
                Submit Your Build
            </button>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOWCASE_BUILDS.map((build) => (
                <div key={build.id} className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-electric-blue/50 transition-all duration-300">
                    
                    {/* Badge */}
                    {build.badge && (
                        <div className="absolute top-4 left-4 z-20 bg-yellow-500/90 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                            <Award className="w-3 h-3" /> {build.badge}
                        </div>
                    )}

                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image 
                            src={build.image} 
                            alt={build.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content (Overlay on Image for immersive feel or below?) Let's put below for clarity */}
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                             <div>
                                 <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">{build.title}</h3>
                                 <p className="text-sm text-gray-400">by {build.author}</p>
                             </div>
                             <button className="p-2 bg-white/5 rounded-full hover:bg-vibrant-pink/20 hover:text-vibrant-pink transition-colors">
                                 <Heart className="w-5 h-5" />
                             </button>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {build.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-500">
                            <span>{build.likes.toLocaleString()} Likes</span>
                            <button className="flex items-center gap-1 hover:text-white transition-colors">
                                <Share2 className="w-4 h-4" /> Share
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
