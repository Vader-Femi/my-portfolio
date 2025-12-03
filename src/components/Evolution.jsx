import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Smartphone, BrainCircuit } from 'lucide-react';

const Evolution = ({ isDark }) => {
    const steps = [
        {
            year: "2020",
            title: "The Kotlin Foundation",
            subtitle: "Android Native",
            description: "Started with native Android development. Mastered the lifecycle, intents, and clean architecture patterns using Kotlin.",
            icon: <Smartphone size={24} />,
            color: "text-green-500",
            bg: "bg-green-500",
            border: "border-green-500"
        },
        {
            year: "2024",
            title: "Cross-Platform Scalability",
            subtitle: "Flutter & Dart",
            description: "Shifted to Flutter to build scalable, maintainable apps for both iOS and Android from a single codebase. Focused on UI aesthetics and performance.",
            icon: <TrendingUp size={24} />,
            color: "text-blue-500",
            bg: "bg-blue-500",
            border: "border-blue-500"
        },
        {
            year: "2025",
            title: "Intelligent Systems",
            subtitle: "Data Science & AI",
            description: "Integrating predictive models into mobile applications. Bridging the gap between frontend UX and backend intelligence.",
            icon: <BrainCircuit size={24} />,
            color: "text-purple-500",
            bg: "bg-purple-500",
            border: "border-purple-500"
        }
    ];

    return (
        <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-800/30' : 'bg-slate-100/50'}`}>
            {/* Background Elements */}
            <div className={`absolute inset-0 opacity-30 ${isDark ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200 via-slate-100 to-slate-50'}`} />

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold mb-4">Evolution of a Developer</h2>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        A journey from native mobile development to intelligent data-driven systems.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className={`hidden md:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 rounded-full
            ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`}
                    />

                    {/* Connecting Line (Mobile) */}
                    <div className={`md:hidden absolute left-8 top-0 w-1 h-full rounded-full
            ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-20 md:pl-0 md:text-center group"
                            >
                                {/* Node Point */}
                                <div className={`absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full z-20 transition-all duration-500
                  ${isDark ? 'bg-slate-900' : 'bg-white'} border-4 ${step.border} group-hover:scale-150`}
                                />

                                {/* Card Content */}
                                <div className={`relative p-6 rounded-2xl border transition-all duration-300 md:mb-12 md:group-even:mt-24 md:group-odd:mb-24
                  ${isDark
                                        ? 'bg-slate-800 border-slate-700 hover:border-slate-600 shadow-lg'
                                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
                                    } group-hover:-translate-y-2`}
                                >
                                    {/* Icon Badge */}
                                    <div className={`inline-flex p-3 rounded-xl mb-4 ${step.bg} bg-opacity-10 ${step.color}`}>
                                        {step.icon}
                                    </div>

                                    <div className={`text-sm font-mono font-bold mb-2 opacity-60 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                        {step.year}
                                    </div>

                                    <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {step.title}
                                    </h3>

                                    <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${step.color}`}>
                                        {step.subtitle}
                                    </div>

                                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Evolution;
