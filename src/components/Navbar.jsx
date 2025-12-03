import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ isDark, toggleTheme }) => {
    const theme = {
        nav: isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-200',
        accentBg: isDark ? 'bg-cyan-400' : 'bg-blue-600',
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-40 backdrop-blur-md border-b ${theme.nav} transition-colors duration-500`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${theme.accentBg} text-white font-bold text-lg`}>
                            O
                        </div>
                        <span className="font-bold text-xl tracking-tight">Femi's Portfolio</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full hover:bg-gray-200/20 transition-colors`}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
