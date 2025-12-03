import React from 'react';
import { motion } from 'framer-motion';
import { Box, Syringe, FileSpreadsheet } from 'lucide-react';
import {
    SiFlutter,
    SiKotlin,
    SiPython,
    SiFirebase,
    SiGit,
    SiJetpackcompose,
    SiMaterialdesign,
    SiWearos,
    SiDart,
    SiPandas
} from "react-icons/si";
import { FaFlutter } from 'react-icons/fa6';

const TechStack = ({ isDark }) => {
    const techs = [
        { name: "Flutter", icon: <FaFlutter /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Bloc", icon: <Box /> },
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Jetpack Compose", icon: <SiJetpackcompose /> },
        { name: "Material Design", icon: <SiMaterialdesign /> },
        { name: "Wear OS", icon: <SiWearos /> },
        { name: "Dependency Injection", icon: <Syringe /> },
        { name: "Excel", icon: <FileSpreadsheet /> },
        { name: "Pandas", icon: <SiPandas /> },
    ];

    return (
        <section className={`py-10 border-y overflow-hidden ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <div className="flex">
                <motion.div
                    className="flex gap-12 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...techs, ...techs].map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 text-xl font-bold opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
