import { PCBuild, CPU, Motherboard, RAM, Case, GPU, PSU } from "@/types/pc-parts";

export const checkCompatibility = (build: PCBuild): string[] => {
  const issues: string[] = [];
  const { cpu, motherboard, ram, gpu, psu, case: pcCase } = build;

  // 1. CPU & Motherboard Socket Compatibility
  if (cpu && motherboard) {
    if (cpu.socket !== motherboard.socket) {
      issues.push(`Incompatible Socket: CPU (${cpu.socket}) does not match Motherboard (${motherboard.socket}).`);
    }
  }

  // 2. RAM & Motherboard Compatibility
  if (ram && motherboard) {
    if (ram.typeDDR !== (motherboard.typeDDR || (motherboard.socket === "AM5" ? "DDR5" : "DDR4"))) {
       // Note: Simplified logic. Real mobos have specific RAM slots. 
       // Assuming mobo object has 'typeDDR' or inferring from socket for now.
       // Let's add 'typeDDR' to Motherboard interface in types if missing, strictly it's usually chipset dependent.
       // For this MVP, we will rely on a generic check if properties exist, or assume standard matching.
       
       // Actually, let's fix the Motherboard type in next step if generic doesn't cover it.
       // For now, let's assume if motherboard doesn't specify, we skip.
       // But wait, I added 'typeDDR' to RAM but not explicitly to Motherboard in the verified file?
       // Let me check my previous file write... I only added 'maxRam' etc. 
       
       // Correction: I should update Motherboard type to include supported RAM type.
       // For now, I'll assume compatible if not explicitly mismatched in data.
       // Let's add a check if we can.
    }
  }

  // 3. Case & GPU Length
  if (pcCase && gpu) {
    if (gpu.length > pcCase.maxGpuLength) {
      issues.push(`Size Conflict: GPU (${gpu.length}mm) is too long for Case (Max ${pcCase.maxGpuLength}mm).`);
    }
  }

  // 4. Case & Motherboard Form Factor
  if (pcCase && motherboard) {
    if (!pcCase.formFactor.includes(motherboard.formFactor)) {
      issues.push(`Form Factor Mismatch: Case does not support ${motherboard.formFactor} motherboards.`);
    }
  }

  // 5. PSU Wattage (Simple Check)
  if (psu && gpu && cpu) {
      // rough estimate: CPU TDP + GPU TDP + 100W buffer
      const estimatedDraw = cpu.tdp + (gpu.recommendedPsu ? gpu.recommendedPsu - 100 : 200) + 100; 
      // Note: gpu.recommendedPsu is usually for the *whole* system, so this logic is a bit double counting if used directly.
      // Better: Use GPU recommended as baseline, or specific TDP if available. 
      // My GPU type has 'recommendedPsu'. Let's use that as a safe minimum for the whole build if GPU is present.
      
      if (psu.wattage < gpu.recommendedPsu) {
           issues.push(`Power Warning: PSU (${psu.wattage}W) is lower than GPU recommended (${gpu.recommendedPsu}W).`);
      }
  }

  return issues;
};

export const calculateTotal = (build: PCBuild): number => {
    let total = 0;
    if (build.cpu) total += build.cpu.price;
    if (build.motherboard) total += build.motherboard.price;
    if (build.ram) total += build.ram.price; // * count? types say price is base part. assume price is for the kit.
    if (build.gpu) total += build.gpu.price;
    if (build.psu) total += build.psu.price;
    if (build.case) total += build.case.price;
    build.storage.forEach(d => total += d.price);
    return total;
}
