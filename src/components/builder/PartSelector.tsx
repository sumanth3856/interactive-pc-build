"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Check, Info } from "lucide-react";
import { useBuilder } from "@/context/BuilderContext";
import { MOCK_CPUS, MOCK_MOTHERBOARDS, MOCK_GPUS, MOCK_RAM, MOCK_CASES, MOCK_PSUS, MOCK_STORAGE } from "@/data/mock-parts";
import { PCPart } from "@/types/pc-parts";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "cpu", label: "1. Processor", data: MOCK_CPUS },
  { id: "motherboard", label: "2. Motherboard", data: MOCK_MOTHERBOARDS },
  { id: "ram", label: "3. Memory", data: MOCK_RAM },
  { id: "gpu", label: "4. Graphics Card", data: MOCK_GPUS },
  { id: "storage", label: "5. Storage", data: MOCK_STORAGE, isMulti: true },
  { id: "psu", label: "6. Power Supply", data: MOCK_PSUS },
  { id: "case", label: "7. Cabinet", data: MOCK_CASES },
];

export const PartSelector = () => {
  const { build, setPart, addStorage, removeStorage, compatibilityIssues } = useBuilder();
  const [activeCategory, setActiveCategory] = useState("cpu");

  const currentCategoryData = CATEGORIES.find(c => c.id === activeCategory);

  const handleSelect = (part: PCPart) => {
      if (activeCategory === "storage") {
          // Check if already added
          const exists = build.storage.find(s => s.id === part.id);
          if (exists) {
              removeStorage(part.id);
          } else {
              addStorage(part as any);
          }
      } else {
          // Toggle selection
          if (build[activeCategory as keyof typeof build] === part) {
               setPart(activeCategory, null);
          } else {
               setPart(activeCategory, part);
          }
      }
  };

  const isSelected = (partId: string) => {
      if (activeCategory === "storage") {
          return build.storage.some(s => s.id === partId);
      }
      const current = build[activeCategory as keyof typeof build] as PCPart | null;
      return current?.id === partId;
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col h-[600px]">
      
      {/* Category Tabs */}
      <div className="flex overflow-x-auto border-b border-white/10 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors",
              activeCategory === cat.id 
                ? "bg-electric-blue/10 text-electric-blue border-b-2 border-electric-blue" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Parts List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
         {currentCategoryData?.data.map((part) => (
             <div 
                key={part.id}
                onClick={() => handleSelect(part)}
                className={cn(
                    "relative group flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-all",
                    isSelected(part.id)
                        ? "bg-electric-blue/20 border-electric-blue"
                        : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"
                )}
             >
                {/* Image */}
                <div className="relative w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                    <Image src={part.image} alt={part.name} fill className="object-contain p-1" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white truncate">{part.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{part.brand}</span>
                        <span>•</span>
                        <span>{part.model}</span>
                    </div>
                </div>

                {/* Price & Action */}
                <div className="text-right shrink-0">
                    <div className="font-bold text-electric-blue">₹{part.price.toLocaleString('en-IN')}</div>
                    
                    {isSelected(part.id) && (
                        <div className="absolute top-2 right-2 text-electric-blue">
                            <Check className="w-4 h-4" />
                        </div>
                    )}
                </div>
             </div>
         ))}
      </div>

    </div>
  );
};
