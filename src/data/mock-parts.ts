import { CPU, Motherboard, RAM, GPU, Case, PSU, Storage } from "@/types/pc-parts";

export const MOCK_CPUS: CPU[] = [
    {
        id: "cpu-1",
        type: "CPU",
        name: "Intel Core i9-14900K",
        price: 54000,
        brand: "Intel",
        model: "i9-14900K",
        socket: "LGA1700",
        cores: 24,
        threads: 32,
        baseClock: 3.2,
        boostClock: 6.0,
        integratedGraphics: true,
        tdp: 125,
        image: "https://m.media-amazon.com/images/I/61K6+jT07OL._AC_SL1000_.jpg"
    },
    {
        id: "cpu-2",
        type: "CPU",
        name: "AMD Ryzen 7 7800X3D",
        price: 36000,
        brand: "AMD",
        model: "Ryzen 7 7800X3D",
        socket: "AM5",
        cores: 8,
        threads: 16,
        baseClock: 4.2,
        boostClock: 5.0,
        integratedGraphics: true,
        tdp: 120,
        image: "https://m.media-amazon.com/images/I/51w9CjQjGEL._AC_SL1000_.jpg"
    }
];

export const MOCK_MOTHERBOARDS: Motherboard[] = [
    {
        id: "mobo-1",
        type: "Motherboard",
        name: "MSI MPG Z790 Edge WiFi",
        price: 38000,
        brand: "MSI",
        model: "MPG Z790 Edge",
        socket: "LGA1700",
        formFactor: "ATX",
        typeDDR: "DDR5",
        maxRam: 192,
        ramSlots: 4,
        chipset: "Z790",
        wifi: true,
        nvmeSlots: 4,
        image: "https://m.media-amazon.com/images/I/81xD6dYvGTL._AC_SL1500_.jpg"
    },
    {
        id: "mobo-2",
        type: "Motherboard",
        name: "ASUS ROG Strix B650-A Gaming WiFi",
        price: 24500,
        brand: "ASUS",
        model: "ROG Strix B650-A",
        socket: "AM5",
        formFactor: "ATX",
        typeDDR: "DDR5",
        maxRam: 128,
        ramSlots: 4,
        chipset: "B650",
        wifi: true,
        nvmeSlots: 3,
        image: "https://m.media-amazon.com/images/I/81A+S3f8-dL._AC_SL1500_.jpg"
    }
];

export const MOCK_GPUS: GPU[] = [
    {
        id: "gpu-1",
        type: "GPU",
        name: "NVIDIA GeForce RTX 4090 FE",
        price: 180000,
        brand: "NVIDIA",
        model: "RTX 4090",
        vram: 24,
        length: 304,
        recommendedPsu: 850,
        image: "https://m.media-amazon.com/images/I/61tJ+dZ+l+L._AC_SL1500_.jpg"
    },
    {
        id: "gpu-2",
        type: "GPU",
        name: "Gigabyte GeForce RTX 4070 Windforce OC",
        price: 56000,
        brand: "Gigabyte",
        model: "RTX 4070",
        vram: 12,
        length: 261,
        recommendedPsu: 650,
        image: "https://m.media-amazon.com/images/I/71XXyG-iR2L._AC_SL1500_.jpg"
    }
];

export const MOCK_RAM: RAM[] = [
    {
        id: "ram-1",
        type: "RAM",
        name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz",
        price: 12500,
        brand: "Corsair",
        model: "Vengeance RGB",
        capacity: 16,
        count: 2,
        speed: 6000,
        typeDDR: "DDR5",
        latency: "CL30",
        image: "https://m.media-amazon.com/images/I/61+GjG01YVL._AC_SL1500_.jpg"
    }
];

export const MOCK_CASES: Case[] = [
    {
        id: "case-1",
        type: "Case",
        name: "NZXT H9 Flow White",
        price: 16000,
        brand: "NZXT",
        model: "H9 Flow",
        formFactor: ["ATX", "Micro-ATX", "Mini-ITX"],
        maxGpuLength: 435,
        sidePanel: "Glass",
        image: "https://m.media-amazon.com/images/I/71s7+u4yUHL._AC_SL1500_.jpg"
    }
];

export const MOCK_PSUS: PSU[] = [
    {
        id: "psu-1",
        type: "PSU",
        name: "Corsair RM1000e 1000W 80+ Gold",
        price: 14500,
        brand: "Corsair",
        model: "RM1000e",
        wattage: 1000,
        efficiency: "80+ Gold",
        modular: "Full",
        image: "https://m.media-amazon.com/images/I/71v+wI63rDL._AC_SL1500_.jpg"
    }
];

export const MOCK_STORAGE: Storage[] = [
    {
        id: "storage-1",
        type: "Storage",
        name: "Samsung 990 Pro 2TB NVMe SSD",
        price: 18000,
        brand: "Other",
        model: "990 Pro",
        storageType: "NVMe SSD",
        capacity: 2048,
        gen: "Gen4",
        image: "https://m.media-amazon.com/images/I/71W690L+S7L._AC_SL1500_.jpg"
    }
];
