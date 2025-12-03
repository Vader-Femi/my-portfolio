import React, { useState } from 'react';
import { Download, BarChart2, ExternalLink, ArrowUpRight, Github } from 'lucide-react';
import { FaGooglePlay } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { FlutterApps, KotlinApps, DATA_PROJECTS } from '../data/constants';
import { getTechIcon } from '../utils/icons';

const ProjectCard = ({ project, isDark, type }) => {
    const isData = type === 'data';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className={`group relative rounded-3xl overflow-hidden border flex flex-col h-full
        ${isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]'
                    : 'bg-white border-slate-200 hover:border-blue-400/50 hover:shadow-2xl'
                }`}
        >
            {/* Image / Icon Area */}
            <div className={`relative h-52 overflow-hidden ${project.color || 'bg-slate-100'} bg-opacity-10`}>
                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-10 ${project.color || 'bg-slate-500'}`} />

                {project.icon && (project.icon.includes('/') || project.icon.includes('.')) ? (
                    <div className="w-full h-full flex items-center justify-center p-8">
                        <img
                            src={project.icon}
                            alt={project.title}
                            className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=App+Icon" }}
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-7xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            {project.icon || <BarChart2 size={64} />}
                        </div>
                    </div>
                )}

                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                    </h3>
                    {isData ? (
                        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                            <BarChart2 size={12} /> Data
                        </div>
                    ) : (
                        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                            APK
                        </div>
                    )}
                </div>

                <p className={`text-sm mb-6 flex-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                </p>

                {/* Data Accuracy Bar */}
                {isData && project.accuracy && (
                    <div className={`p-3 rounded-xl mb-6 text-sm ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
                        <div className="flex justify-between mb-2">
                            <span className="opacity-70 text-xs uppercase tracking-wider">Accuracy</span>
                            <span className="text-emerald-500 font-bold">{project.accuracy}</span>
                        </div>
                        <div className="w-full bg-slate-700/30 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: project.accuracy }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="bg-emerald-500 h-full rounded-full"
                            />
                        </div>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(tech => (
                        <span key={tech} className={`flex items-center text-[10px] font-medium px-2.5 py-1 rounded-md border 
              ${isDark
                                ? 'border-slate-700 bg-slate-800 text-slate-300'
                                : 'border-slate-200 bg-slate-50 text-slate-600'
                            }`}>
                            {getTechIcon(tech)}
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    {project.playUrl ? (
                        <button
                            onClick={() => window.open(project.playUrl, '_blank')}
                            className={`flex items-center justify-center py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-95
                ${isDark
                                    ? 'bg-white text-black hover:bg-slate-200'
                                    : 'bg-black text-white hover:bg-slate-800'
                                }`}
                        >
                            <FaGooglePlay size={16} className="mr-2" /> Run App
                        </button>
                    ) : null}

                    <a
                        href={project.apkUrl || project.link || "#"}
                        className={`flex items-center justify-center py-2.5 rounded-xl font-semibold text-sm border transition-all active:scale-95
              ${isDark
                                ? 'border-slate-600 hover:bg-slate-700 text-white'
                                : 'border-slate-300 hover:bg-slate-50 text-slate-700'
                            } ${!project.playUrl ? 'col-span-2' : ''}`}
                    >
                        {isData ? <ExternalLink size={16} className="mr-2" /> : <Download size={16} className="mr-2" />}
                        {isData ? 'View Analysis' : 'Download APK'}
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = ({ isDark }) => {
    const [activeSection, setActiveSection] = useState('all'); // all, mobile, data

    const theme = {
        subText: isDark ? 'text-slate-400' : 'text-slate-500',
    };

    return (
        <section id="portfolio" className={`py-24 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4">

                {/* Header & Filters */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
                        <p className={`${theme.subText} max-w-md`}>
                            A collection of mobile applications and data science projects demonstrating full-stack capabilities.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`flex p-1.5 rounded-xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}
                    >
                        {['all', 'flutter', 'kotlin', 'data'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveSection(tab)}
                                className={`px-5 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all duration-300
                  ${activeSection === tab
                                        ? (isDark ? 'bg-slate-700 text-white shadow-lg' : 'bg-white text-black shadow-md')
                                        : 'opacity-60 hover:opacity-100'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>

                        {(activeSection === 'all' || activeSection === 'flutter') && FlutterApps.map((app) => (
                            <ProjectCard key={`flutter-${app.id}`} project={app} isDark={isDark} type="mobile" />
                        ))}

                        {(activeSection === 'all' || activeSection === 'kotlin') && KotlinApps.map((app) => (
                            <ProjectCard key={`kotlin-${app.id}`} project={app} isDark={isDark} type="mobile" />
                        ))}

                        {(activeSection === 'all' || activeSection === 'data') && DATA_PROJECTS.map((project) => (
                            <ProjectCard key={`data-${project.id}`} project={project} isDark={isDark} type="data" />
                        ))}

                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
