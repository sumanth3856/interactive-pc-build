export type Brand = "Intel" | "AMD" | "NVIDIA" | "Corsair" | "MSI" | "ASUS" | "Gigabyte" | "NZXT" | "Other";

export interface BasePart {
  id: string;
  name: string;
  price: number;
  image: string; // URL for visualizer
  brand: Brand;
  model: string;
}

export interface CPU extends BasePart {
  type: "CPU";
  socket: string; // e.g., "LGA1700", "AM5"
  cores: number;
  threads: number;
  baseClock: number; // GHz
  boostClock: number; // GHz
  integratedGraphics: boolean;
  tdp: number; // Watts
}

export interface Motherboard extends BasePart {
  type: "Motherboard";
  socket: string; // Must match CPU
  formFactor: "ATX" | "Micro-ATX" | "Mini-ITX";
  typeDDR: "DDR4" | "DDR5"; // Explicit support
  maxRam: number; // GB
  ramSlots: number;
  chipset: string;
  wifi: boolean;
  nvmeSlots: number;
}

export interface RAM extends BasePart {
  type: "RAM";
  capacity: number; // GB (per stick)
  count: number; // Number of sticks in kit
  speed: number; // MHz (e.g., 3200, 6000)
  typeDDR: "DDR4" | "DDR5";
  latency: string; // e.g., "CL16"
}

export interface GPU extends BasePart {
  type: "GPU";
  vram: number; // GB
  length: number; // mm (for case compatibility)
  recommendedPsu: number; // Watts
}

export interface Storage extends BasePart {
  type: "Storage";
  storageType: "NVMe SSD" | "SATA SSD" | "HDD";
  capacity: number; // GB
  gen?: string; // e.g., "Gen4", "Gen3"
}

export interface PSU extends BasePart {
  type: "PSU";
  wattage: number; // Watts
  efficiency: "80+ Bronze" | "80+ Gold" | "80+ Platinum" | "Titanium";
  modular: "Full" | "Semi" | "Non";
}

export interface Case extends BasePart {
  type: "Case";
  formFactor: ("ATX" | "Micro-ATX" | "Mini-ITX")[]; // Supported form factors
  maxGpuLength: number; // mm
  sidePanel: "Glass" | "Mesh" | "Solid";
}

export type PCPart = CPU | Motherboard | RAM | GPU | Storage | PSU | Case;

export interface PCBuild {
  cpu: CPU | null;
  motherboard: Motherboard | null;
  ram: RAM | null;
  gpu: GPU | null;
  storage: Storage[];
  psu: PSU | null;
  case: Case | null;
  totalPrice: number;
  compatibilityIssues: string[];
}
