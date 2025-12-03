import React, { useState, useEffect } from 'react';
import { Battery, Wifi, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';

const SystemMonitor = ({ isDark }) => {
    const [logs, setLogs] = useState([
        "> init_portfolio_v2.0",
        "> loading_modules...",
        "> connecting_to_satellite...",
        "> done."
    ]);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [batteryLevel, setBatteryLevel] = useState(100);

    // Random data for the "Graph"
    const [activityBars, setActivityBars] = useState(Array(12).fill(50));

    // Time & Activity Loop
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

            // Randomize bars
            setActivityBars(prev => prev.map(() => Math.floor(Math.random() * 100)));

            // Add random log occasionally
            if (Math.random() > 0.8) {
                const tasks = [
                    "compiling_dart_code...",
                    "training_neural_net...",
                    "fetching_api_data...",
                    "optimizing_assets...",
                    "deploying_to_prod...",
                    "garbage_collection_init..."
                ];
                const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
                setLogs(prev => [`> ${randomTask}`, ...prev.slice(0, 5)]);
            }

        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Battery Effect
    useEffect(() => {
        if ('getBattery' in navigator) {
            navigator.getBattery().then((b) => setBatteryLevel(Math.round(b.level * 100)));
        }
    }, []);

    // TE Colors
    const bgBase = isDark ? 'bg-zinc-900' : 'bg-gray-100';
    const borderColor = isDark ? 'border-zinc-700' : 'border-gray-300';
    const textColor = isDark ? 'text-zinc-300' : 'text-gray-700';
    const accentColor = 'text-orange-500';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative w-full h-80 md:h-96 rounded-[2rem] border-4 ${borderColor} overflow-hidden flex flex-col shadow-2xl transition-colors ${bgBase}`}
        >

            {/* STATUS BAR */}
            <div className={`w-full px-5 py-3 flex justify-between items-center text-[10px] font-mono tracking-widest uppercase border-b ${borderColor} ${textColor} bg-black/5`}>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>SYS_ONLINE</span>
                </div>
                <span>{currentTime}</span>
                <div className="flex items-center gap-1">
                    <span>{batteryLevel}%</span>
                    <Battery size={12} />
                </div>
            </div>

            {/* MAIN DISPLAY */}
            <div className="flex-1 p-4 flex flex-col gap-4 font-mono">

                {/* Top Section: Activity Graph & Stats */}
                <div className="flex gap-4 h-1/2">
                    {/* Graph */}
                    <div className={`flex-1 border ${borderColor} rounded-lg p-2 flex items-end gap-1 bg-black/10`}>
                        {activityBars.map((height, i) => (
                            <motion.div
                                key={i}
                                className={`flex-1 rounded-sm transition-all duration-500 ${isDark ? 'bg-orange-500' : 'bg-orange-600'}`}
                                style={{ height: `${height}%`, opacity: 0.5 + (height / 200) }}
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                            ></motion.div>
                        ))}
                    </div>

                    {/* Stats Grid */}
                    <div className="w-1/3 flex flex-col gap-2">
                        <div className={`flex-1 border ${borderColor} rounded-lg p-2 flex flex-col justify-center items-center`}>
                            <span className="text-[9px] opacity-60 uppercase">CPU_LOAD</span>
                            <span className={`text-lg font-bold ${accentColor}`}>{Math.floor(Math.random() * 30) + 20}%</span>
                        </div>
                        <div className={`flex-1 border ${borderColor} rounded-lg p-2 flex flex-col justify-center items-center`}>
                            <span className="text-[9px] opacity-60 uppercase">RAM_USE</span>
                            <span className={`text-lg font-bold ${textColor}`}>64%</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Terminal & Info */}
                <div className="flex gap-4 h-1/2">
                    {/* Terminal */}
                    <div className={`w-2/3 border ${borderColor} rounded-lg p-3 overflow-hidden relative bg-black`}>
                        <div className="absolute top-0 left-0 w-full px-2 py-1 text-[9px] text-gray-500 border-b border-gray-800 bg-gray-900 uppercase">
                            Terminal_Output
                        </div>
                        <div className="mt-4 flex flex-col justify-end h-full">
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 0.9, x: 0 }}
                                    className="text-xs text-green-400 font-mono truncate"
                                >
                                    {log}
                                </motion.div>
                            ))}
                            <div className="text-xs text-green-400 animate-pulse">_</div>
                        </div>
                    </div>

                    {/* Controls mockup */}
                    <div className="w-1/3 flex flex-col gap-2">
                        <div className={`flex-1 border ${borderColor} rounded-lg flex items-center justify-center gap-2 ${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                            <Wifi size={16} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                            <span className="text-[9px] uppercase">NET_OK</span>
                        </div>
                        <div className={`flex-1 border ${borderColor} rounded-lg flex items-center justify-center gap-2 ${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                            <HardDrive size={16} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                            <span className="text-[9px] uppercase">DSK_OK</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* BOTTOM DECOR */}
            <div className={`px-4 py-2 border-t ${borderColor} flex justify-between items-center text-[9px] uppercase tracking-widest opacity-50`}>
                <span>ID: DEV-001</span>
                <span>LOC: LAGOS</span>
            </div>
        </motion.div>
    );
};

export default SystemMonitor;
