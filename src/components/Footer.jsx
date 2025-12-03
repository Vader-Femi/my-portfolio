import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = ({ isDark }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/Vader-Femi", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/oluwafemi-okedeyi", label: "LinkedIn" },
        { icon: Twitter, href: "https://x.com/FemiOkedeyi", label: "Twitter" },
        { icon: Mail, href: "mailto:oluwafemi.za@gmail.com", label: "Email" }
    ];

    return (
        <footer className={`relative pt-24 pb-12 overflow-hidden ${isDark ? 'bg-slate-900 border-t border-slate-800' : 'bg-slate-50 border-t border-slate-200'}`}>

            {/* Background Glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 opacity-20 blur-3xl rounded-full pointer-events-none
        ${isDark ? 'bg-blue-500/30' : 'bg-blue-400/30'}`}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Let's build something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                                intelligent together.
                            </span>
                        </h2>
                        <p className={`text-lg max-w-xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            Open for Mobile Development and Data Science opportunities.
                            Currently exploring the intersection of Flutter and AI.
                        </p>

                        <a
                            href="mailto:oluwafemi.za@gmail.com"
                            className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                ${isDark ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                            <Mail className="mr-2" size={20} />
                            Get In Touch
                        </a>
                    </motion.div>

                    <div className={`w-full h-px mb-12 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />

                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
                        <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                            © {new Date().getFullYear()} Femi Okedeyi. All rights reserved.
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-2 rounded-lg transition-colors duration-300
                    ${isDark
                                            ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                                            : 'text-slate-500 hover:text-black hover:bg-slate-200'
                                        }`}
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={scrollToTop}
                            className={`p-3 rounded-full transition-all duration-300 group
                ${isDark
                                    ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                    : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-black shadow-sm border border-slate-200'
                                }`}
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
