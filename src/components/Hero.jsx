import React from 'react';
import { Terminal, ChevronRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import SystemMonitor from './SystemMonitor';

const Hero = ({ isDark }) => {
    const theme = {
        subText: isDark ? 'text-slate-400' : 'text-slate-500',
        accentBg: isDark ? 'bg-cyan-400' : 'bg-blue-600',
        card: isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200',
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    <motion.div variants={itemVariants} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${isDark ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' : 'border-blue-600/30 text-blue-700 bg-blue-50'}`}>
                        <Terminal size={14} className="mr-2" />
                        Kotlin • Flutter • Data Science
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        Bridging <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-500' : 'from-blue-600 to-indigo-600'}`}>Mobile UI</span> <br />
                        & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-emerald-400 to-cyan-500' : 'from-teal-600 to-blue-600'}`}>Data Insights</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className={`text-lg md:text-xl ${theme.subText} max-w-lg leading-relaxed`}>
                        I build scalable, pixel-perfect mobile experiences and power them with intelligent data systems. Transitioned from native Android to cross-platform Flutter, now expanding into Data Science.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <a href="#portfolio" className={`px-6 py-3 rounded-lg font-semibold text-white ${theme.accentBg} hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center`}>
                            View Work <ChevronRight size={18} className="ml-2" />
                        </a>
                        <div className="flex space-x-3">
                            {[
                                { href: "https://github.com/Vader-Femi", icon: Github, label: "GitHub" },
                                { href: "https://www.linkedin.com/in/oluwafemi-okedeyi", icon: Linkedin, label: "LinkedIn" },
                                { href: "https://x.com/FemiOkedeyi", icon: Twitter, label: "Twitter" },
                                { href: "mailto:oluwafemi.za@gmail.com", icon: Mail, label: "Email" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? "_self" : "_blank"}
                                    rel="noreferrer"
                                    className={`p-3 rounded-lg border ${theme.card} hover:scale-105 transition-transform text-current`}
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Interactive Decor Element (System Monitor) */}
                <div className="relative hidden md:block">
                    <div className={`absolute -inset-1 rounded-[2.5rem] blur-xl opacity-30 ${isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-blue-300 to-purple-300'}`}></div>
                    <SystemMonitor isDark={isDark} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
