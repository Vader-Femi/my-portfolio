import React from 'react';
import { CheckCircle2, Briefcase, Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/constants';

const ExperienceCard = ({ exp, index, isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 h-full flex flex-col
        ${isDark
                    ? 'bg-slate-800/80 border-slate-700 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]'
                    : 'bg-white/80 border-slate-200 hover:border-blue-400/50 hover:shadow-xl'
                }`}
        >
            {/* Header */}
            <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-xl font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap
            ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>
                        {exp.roleType}
                    </span>
                </div>

                <div className={`flex items-center gap-2 text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    <Building2 size={14} />
                    {exp.company}
                </div>

                <div className={`flex items-center gap-2 text-xs font-mono mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    <Calendar size={12} />
                    {exp.duration}
                </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 flex-1">
                {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className={`flex items-start gap-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        <CheckCircle2 size={16} className={`mt-1 flex-shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Experience = ({ isDark }) => {
    return (
        <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
            {/* Background Decor */}
            <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent`} />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Briefcase className="text-blue-500" /> Professional Journey
                    </h2>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        Building scalable solutions and leading technical teams.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {EXPERIENCES.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} index={index} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
