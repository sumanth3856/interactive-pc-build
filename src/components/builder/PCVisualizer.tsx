import React from "react";
import { useBuilder } from "@/context/BuilderContext";
import { cn } from "@/lib/utils";
import { Box, CircuitBoard, Cpu, MemoryStick, MonitorPlay } from "lucide-react";

export const PCVisualizer = () => {
    const { build } = useBuilder();
    const { case: pcCase, motherboard, gpu, cpu, ram } = build;

    return (
        <div className="relative w-full h-[500px] md:h-[600px] bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center p-8">
            
            {/* Base Layer: Case */}
            <div className={cn(
                "relative w-full h-full border-4 border-dashed rounded-xl flex items-center justify-center transition-all duration-500",
                pcCase ? "border-electric-blue bg-electric-blue/5 border-solid" : "border-gray-700 opacity-50"
            )}>
                {!pcCase && <span className="text-gray-600 font-mono">No Case Selected</span>}
                
                {pcCase && (
                    <div className="absolute inset-4 border-2 border-gray-600/50 rounded-lg flex items-center justify-center">
                         {/* Icon for Case (Background) */}
                         <Box className="w-full h-full text-gray-800/50 p-10" strokeWidth={0.5} />
                    </div>
                )}

                {/* Layer: Motherboard */}
                {motherboard && (
                    <div className="absolute w-[70%] h-[70%] bg-green-900/40 border border-green-500/50 rounded-md backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <CircuitBoard className="w-full h-full text-green-500/50 p-4" strokeWidth={1} />
                        
                        {/* Layer: CPU */}
                        {cpu && (
                             <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500/20 border border-blue-400 rounded flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] z-30">
                                 <Cpu className="text-blue-400 w-10 h-10 animate-pulse" />
                             </div>
                        )}

                        {/* Layer: RAM */}
                        {ram && (
                             <div className="absolute top-1/4 right-[15%] w-4 h-24 flex gap-1 z-30">
                                 <div className="w-1.5 h-full bg-vibrant-pink/60 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                                 <div className="w-1.5 h-full bg-vibrant-pink/60 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                             </div> 
                        )}
                        
                        {/* Layer: GPU */}
                        {gpu && (
                             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-purple-900/80 border border-purple-500 rounded flex items-center justify-center shadow-lg z-40 transform translate-y-2">
                                  <MonitorPlay className="text-purple-300 w-6 h-6 mr-2" />
                                  <span className="text-purple-300 text-xs font-bold tracking-widest">{gpu.model || "GPU"}</span>
                             </div>
                        )}
                    </div>
                )}
            </div>
            
            {/* Grid Background */}
            <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-10 pointer-events-none z-0">
                {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-white/20" />
                ))}
            </div>
        </div>
    );
};
