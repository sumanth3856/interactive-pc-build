"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { PCBuild, PCPart, CPU, Motherboard, RAM, GPU, Storage, PSU, Case } from "@/types/pc-parts";
import { checkCompatibility, calculateTotal } from "@/lib/compatibility";

interface BuilderContextType {
  build: PCBuild;
  setPart: (type: string, part: PCPart | null) => void;
  addStorage: (disk: Storage) => void;
  removeStorage: (id: string) => void;
  compatibilityIssues: string[];
  totalPrice: number;
}

const initialBuild: PCBuild = {
  cpu: null,
  motherboard: null,
  ram: null,
  gpu: null,
  storage: [],
  psu: null,
  case: null,
  totalPrice: 0,
  compatibilityIssues: [],
};

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  const [build, setBuild] = useState<PCBuild>(initialBuild);
  const [compatibilityIssues, setCompatibilityIssues] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Recalculate on build change
  useEffect(() => {
    const issues = checkCompatibility(build);
    setCompatibilityIssues(issues);
    
    const total = calculateTotal(build);
    setTotalPrice(total);
  }, [build]);

  const setPart = (type: string, part: PCPart | null) => {
    setBuild((prev) => ({
      ...prev,
      [type]: part,
    }));
  };

  const addStorage = (disk: Storage) => {
    setBuild((prev) => ({
      ...prev,
      storage: [...prev.storage, disk],
    }));
  };

  const removeStorage = (id: string) => {
      setBuild((prev) => ({
          ...prev,
          storage: prev.storage.filter(d => d.id !== id),
      }));
  };

  return (
    <BuilderContext.Provider value={{ build, setPart, addStorage, removeStorage, compatibilityIssues, totalPrice }}>
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error("useBuilder must be used within a BuilderProvider");
  }
  return context;
};
