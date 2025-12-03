import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/constants';

const EducationCard = ({ edu, index, isDark }) => {
    const isDegree = edu.degree.includes("BS.C");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 group
        ${isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-amber-500/50 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)]'
                    : 'bg-white border-slate-200 hover:border-amber-400/50 hover:shadow-xl'
                }`}
        >
            {/* Background Decor */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-bl-full transition-all duration-500 group-hover:scale-110
        ${isDegree ? (isDark ? 'from-amber-400 to-orange-600' : 'from-amber-300 to-orange-500') : (isDark ? 'from-blue-400 to-cyan-600' : 'from-blue-300 to-cyan-500')}`}
            />

            {/* Header Icon */}
            <div className="mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:rotate-6
          ${isDegree
                        ? (isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-600')
                        : (isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600')
                    }`}
                >
                    {isDegree ? <GraduationCap size={28} /> : <Award size={28} />}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className={`text-xl font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {edu.school}
                    </h3>
                    {edu.grade && (
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap border
              ${isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-slate-50 border-slate-200 text-amber-600'}`}>
                            {edu.grade}
                        </span>
                    )}
                </div>

                <div className={`text-sm font-medium mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {edu.degree}
                </div>

                <div className={`flex items-center gap-2 text-xs font-mono mb-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    <Calendar size={14} />
                    <span>{edu.duration}</span>
                </div>

                {/* Highlights / Skills */}
                <div className={`pt-6 border-t ${isDark ? 'border-slate-700/50' : 'border-slate-100'}`}>
                    <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider opacity-50">
                        <BookOpen size={12} />
                        <span>Key Learnings</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((h, i) => (
                            <span key={i} className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition-colors
                 ${isDark
                                    ? 'bg-slate-700/50 text-slate-300 group-hover:bg-slate-700'
                                    : 'bg-slate-50 text-slate-600 group-hover:bg-slate-100'
                                }`}>
                                {h}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Education = ({ isDark }) => {
    return (
        <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="text-amber-500" /> Education & Certifications
                    </h2>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        Academic background and professional milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EDUCATION.map((edu, index) => (
                        <EducationCard key={index} edu={edu} index={index} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
