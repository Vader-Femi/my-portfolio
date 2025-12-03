import React from 'react';
import {
  Box,       // For Bloc
  Syringe,   // For Dependency Injection
  FileSpreadsheet, // For Excel fallback
  Code,
} from 'lucide-react';

import {
  SiFlutter,
  SiKotlin,
  SiPython,
  SiFirebase,
  SiGit,
  SiJetpackcompose,
  SiMaterialdesign,
  SiWearos,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiDart
} from "react-icons/si";

import { FaJava, FaFileExcel } from "react-icons/fa";

// Helper function to get the icon based on the string name
export const getTechIcon = (techName) => {
  const size = 14;
  const className = "inline-block mr-1 mb-0.5";

  const name = techName.toLowerCase();

  if (name.includes('flutter')) return <SiFlutter size={size} className={className} />;
  if (name.includes('kotlin')) return <SiKotlin size={size} className={className} />;
  if (name.includes('python')) return <SiPython size={size} className={className} />;
  if (name.includes('java')) return <FaJava size={size} className={className} />;
  if (name.includes('dart')) return <SiDart size={size} className={className} />;
  if (name.includes('firebase')) return <SiFirebase size={size} className={className} />;
  if (name.includes('git')) return <SiGit size={size} className={className} />;
  if (name.includes('compose')) return <SiJetpackcompose size={size} className={className} />;
  if (name.includes('material')) return <SiMaterialdesign size={size} className={className} />;
  if (name.includes('excel')) return <FaFileExcel size={size} className={className} />;
  if (name.includes('wear')) return <SiWearos size={size} className={className} />;

  // Data Science specific
  if (name.includes('tensor')) return <SiTensorflow size={size} className={className} />;
  if (name.includes('scikit')) return <SiScikitlearn size={size} className={className} />;
  if (name.includes('pandas')) return <SiPandas size={size} className={className} />;

  // Concepts
  if (name.includes('bloc')) return <Box size={size} className={className} />;
  if (name.includes('injection')) return <Syringe size={size} className={className} />;

  return <Code size={size} className={className} />;
};
