import React, { useState, useEffect } from 'react';
// 1. Generic UI Icons (Keep these from Lucide)
import {
  Moon, Sun, Download, Smartphone, Database, Code, Layers,
  Github, Linkedin, Mail, Terminal, BarChart2, Cpu, ExternalLink, ChevronRight,
  Twitter, 
  Box,       // For Bloc
  Syringe,   // For Dependency Injection
  FileSpreadsheet, // For Excel fallback
  Briefcase, // For Experience
  GraduationCap, // For Education
  Calendar, // For Dates
  CheckCircle2,
  Panda,
  Bug, // Added Bug icon
  RefreshCcw, // Added Reset icon
  Trophy, // Added Trophy icon
  Battery, // Added Battery icon
  BatteryCharging, // Added Battery Charging icon
  MapPin // Added MapPin
} from 'lucide-react';

// 2. Brand Logos (Import these from react-icons)
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

// 3. Stable FontAwesome Imports
import { FaJava, FaFileExcel, FaGooglePlay } from "react-icons/fa";
import { FaFlutter } from 'react-icons/fa6';

// Helper function to get the icon based on the string name
const getTechIcon = (techName) => {
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

// --- DATA SECTIONS ---

const FlutterApps = [
  {
    id: 1,
    title: "Petit",
    description: "A cross-platform compression application. It makes images smaller in size so they take up less space and send faster — without compromising quality. It works with different types of images like JPG, PNG, HEIF, and HEIC",
    stack: ["Flutter", "Dart", "Compression", "Flutter Super"],
    apkUrl: "https://github.com/Vader-Femi/Petit",
    playUrl: "https://appetize.io/app/b_5q7h4bxybf3vgeckafpxufi7xe?device=pixel7&osVersion=15.0",
    icon: "/assets/images/petit.png",
    color: "bg-orange-500"
  },
  {
    id: 2,
    title: "Habitar",
    description: "A habit-tracking app using Flutter, integrating Bloc and Flutter Super for robust state management. Applied clean architecture principles to ensure clear feature separation. Leveraged Firebase for authentication and remote data storage.",
    stack: ["Bloc", "Firebase", "Drift DB", "Clean Arch", "Notifications"],
    apkUrl: "https://github.com/Vader-Femi/Habitar",
    playUrl: "https://appetize.io/app/b_b6g3rbmshvvykreskmfo3mevdq",
    icon: "/assets/images/habitar.png",
    color: "bg-blue-500"
  },
];

const KotlinApps = [
  {
    id: 1,
    title: "Watchlist",
    description: "Android application leveraging TMDB API to offer access to over 2 million movies and TV series. Implements a visually pleasing UI using Jetpack Compose and Material 3 Design principles.",
    stack: ["Jetpack Compose", "TMDB API", "Retrofit", "Dagger-Hilt", "MVI"],
    apkUrl: "https://github.com/Vader-Femi/Watchlist",
    playUrl: "https://appetize.io/app/rz2scysw7s6sytetrycafienu4?device=pixel7&osVersion=13.0&scale=75",
    icon: "/assets/images/watchlist2.png",
    color: "bg-red-500"
  },
  {
    id: 2,
    title: "Devfesttttt",
    description: "A Wear OS version of the Devfest 2022 mobile app. Multi-module application connecting paired Android and Wear OS devices.",
    stack: ["Jetpack Compose", "Wear OS", "Room DB", "Dagger-Hilt"],
    apkUrl: "https://github.com/Vader-Femi/Devfesttttt",
    playUrl: null, // Figma link provided in source, usually not playable directly
    icon: "/assets/images/devfesttttt2.jpg",
    color: "bg-yellow-500"
  },
  {
    id: 3,
    title: "Class Konnect",
    description: "Android video call app made using Jitsi Meet SDK to improve E-Learning. Connects up to 75 participants synchronously.",
    stack: ["Jetpack Compose", "Jitsi Meet", "Firebase", "Dagger-Hilt"],
    apkUrl: "https://github.com/Vader-Femi/Class-Konnect",
    playUrl: "https://appetize.io/app/xrbg72g6pdiaaemtcibupyyx3i?device=pixel7&osVersion=13.0&scale=75",
    icon: "/assets/images/class-konnect.png",
    color: "bg-teal-500"
  },
  // {
  //   id: 4,
  //   title: "Bill Reminder",
  //   description: "Reminder app that saves paid and unpaid bills in a local room database. Uses Alarm Manager for notifications.",
  //   stack: ["Alarm Manager", "Room DB", "Material Design"],
  //   apkUrl: "https://github.com/Vader-Femi/Bill-Reminder",
  //   playUrl: "https://appetize.io/app/zamspmfniqj244yxgs2jpsdma4?device=pixel7&osVersion=13.0&scale=75",
  //   icon: "/assets/images/bill-reminder.png",
  //   color: "bg-green-600"
  // },
  // {
  //   id: 5,
  //   title: "2FA",
  //   description: "Authentication app generating Time-Based One-Time-Passwords. Uses Jetpack Datastore and Base32 encryption.",
  //   stack: ["Base32", "CI/CD", "Jetpack Datastore"],
  //   apkUrl: "https://github.com/Vader-Femi/2FA",
  //   playUrl: "https://appetize.io/app/kb3hfjs3s5g5nrehn4wwx5vlz4?device=pixel7&osVersion=13.0&scale=75",
  //   icon: "/assets/images/2fa.png",
  //   color: "bg-indigo-600"
  // }
];

const DATA_PROJECTS = [
  // {
  //   id: 1,
  //   title: "Customer Churn Prediction",
  //   description: "Predicting user attrition using Random Forest classifiers on a dataset of 100k+ retail customers.",
  //   stack: ["Python", "Scikit-Learn", "Pandas", "Excel"],
  //   accuracy: "94.2%",
  //   link: "#"
  // },
  // {
  //   id: 2,
  //   title: "Market Sentiment Analysis",
  //   description: "NLP pipeline analyzing Twitter feeds to gauge sentiment towards emerging tech trends.",
  //   stack: ["TensorFlow", "NLP", "Bert"],
  //   accuracy: "89.5%",
  //   link: "#"
  // }
];

const EXPERIENCES = [
    {
        company: "Our Days Calendar",
        role: "Mobile App Development Intern",
        roleType: "Full-Time",
        duration:"March 2025 – Till Date",
        highlights: [
            "Contributed to a live app on the Play Store and App Store with over 10k+ downloads",
            "Improved app performance and stability, code readability, and customer satisfaction",
            "Collaborated on key features, and improved user interface using Flutter and state provider",
            "Worked closely with the team to debug, test, and ship updates",
            "Contributed over 100 commits and 60+ pull requests to production code"
        ],
    },
    {
        company: "Lagos state ICT Training",
        role: "Data Science Internship",
        roleType: "Internship",
        duration:"January 2025 - April 2025",
        highlights: [
            "Contributed to a live app on the Play Store and App Store with over 10k+ downloads",
            "Collaborated on key features, optimised app performance, and improved user interface using Flutter and state provider",
            "Worked closely with the team to debug, test, and ship updates",
            "Contributed over 30 commits and 10+ pull requests to production code"
        ],
    },
    {
        company: "Osun State University",
        role: "Software Development Trainer",
        roleType: "Full-Time",
        duration:"August 2023 – July 2024",
        highlights: [
            "Facilitated weekly hands-on practical sessions for over 1000 students in Data Structure & Algorithm, Java, Python, and C language",
            "Collaborated with lecturers and students on practical programming language concepts"
        ],
    },
    {
        company: "Arkounting Business Concepts",
        role: "Android Developer",
        roleType: "Full-Time",
        duration:"January 2022 – October 2022",
        highlights: [
            "Revamped an Android application for making loan requests and repayments using Kotlin and Paystack Api",
            "Elevated app performance and user experience by applying MVVM architecture guidelines",
            "Setup a helpdesk software to improve customer service experience by up to 66%"
        ],
    }
];

const EDUCATION = [
    {
      school: "Lagos State University",
      degree: "BS.C, Computer Science",
      grade: "CGPA - 3.86",
      duration: "September 2018 - Jun 2023",
      highlights: [
        "Software Engineering",
        "Operating Systems",
        "Data Structure and Algorithms",
        "Object Oriented Programming",
        "Artificial Intelligence"
      ]
    },
    {
      school: "GDSC SSA Student Summit 2023",
      degree: "Certificate of Participation",
      grade: "",
      duration: "March 2023",
      highlights: [
        "Android Development",
        "Wear OS - Tiles & Watch Faces",
        "Android Work Manager",
      ],
    },
    {
      school: "Google Africa Developer Training 2022",
      degree: "Associate Android Developer Scholarship",
      grade: "Skill IQ - 182",
      duration: "June 2022 – September 2022",
      highlights: [
        "Background Jobs with Work Manager",
        "Kotlin Coroutines",
        "Android Architecture Components",
        "Managing Lifecycle and Viewmodel Data"
      ],
    },
    {
      school: "Google Africa Developer Training 2021",
      degree: "Associate Android Developer Scholarship",
      grade: "Skill IQ - 147",
      duration: "June 2021 – October 2021",
      highlights: [
        "Introduction to Kotlin",
        "Android Navigation Components",
        "Firebase UI",
        "Android Room Foundamentals"
      ],
    }
];

// --- SUB-COMPONENTS ---

// NEW: Experience Timeline (Replaces Tabs)
const ExperienceTimeline = ({ isDark }) => {
  return (
    <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4 md:ml-6 space-y-12">
      {EXPERIENCES.map((exp, index) => (
        <div key={index} className="relative pl-8 md:pl-12 group">
          {/* Timeline Dot */}
          <div className={`absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 transition-all duration-300
            ${isDark ? 'bg-slate-900 border-blue-500 group-hover:bg-blue-500' : 'bg-white border-blue-600 group-hover:bg-blue-600'} 
            group-hover:scale-125 z-10`}
          ></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
             <div>
               <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
               <div className={`text-md font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'} flex items-center mt-1`}>
                 {exp.company} 
                 <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                   {exp.roleType}
                 </span>
               </div>
             </div>
             <span className={`mt-2 sm:mt-0 text-xs font-mono px-3 py-1 rounded border self-start sm:self-center ${isDark ? 'border-slate-700 text-slate-400 bg-slate-800/50' : 'border-slate-200 text-slate-500 bg-slate-50'}`}>
               {exp.duration}
             </span>
          </div>

          <div className={`p-5 rounded-xl border transition-colors duration-300 ${isDark ? 'bg-slate-800/30 border-slate-700 hover:bg-slate-800/50' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'}`}>
            <ul className="space-y-3">
              {exp.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className={`flex items-start gap-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                  <CheckCircle2 size={16} className={`mt-1 flex-shrink-0 ${isDark ? 'text-blue-500/70' : 'text-blue-500'}`} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

// NEW: Clean Tech Education Cards (Replaces Teenage Engineering)
const EducationCards = ({ isDark }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {EDUCATION.map((edu, index) => (
        <div 
          key={index} 
          className={`relative p-6 rounded-2xl overflow-hidden border transition-all duration-300 group
            ${isDark 
              ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-orange-500/50' 
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:border-orange-400/50 hover:shadow-lg'
            }`}
        >
          {/* Decoration Circle */}
          <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 transition-all group-hover:scale-150
            ${isDark ? 'bg-orange-500' : 'bg-orange-600'}`}></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700 text-orange-400' : 'bg-orange-50 text-orange-600'}`}>
                <GraduationCap size={24} />
              </div>
              {edu.grade && (
                <div className={`flex flex-col items-end`}>
                  <span className="text-[10px] uppercase opacity-60 font-bold">Performance</span>
                  <span className={`text-sm font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>{edu.grade}</span>
                </div>
              )}
            </div>

            <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {edu.school}
            </h3>
            <div className={`text-sm mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {edu.degree}
            </div>

            <div className={`flex items-center gap-2 text-xs mb-6 font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              <Calendar size={12} />
              <span>{edu.duration}</span>
            </div>

            <div className={`pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
              <div className="flex flex-wrap gap-2">
                {edu.highlights.slice(0, 4).map((h, i) => (
                   <span key={i} className={`text-[10px] px-2 py-1 rounded-md font-medium ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'}`}>
                     {h}
                   </span>
                ))}
                {edu.highlights.length > 4 && (
                  <span className={`text-[10px] px-2 py-1 rounded-md font-medium ${isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-100 text-slate-400'}`}>
                    +{edu.highlights.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- REPLACEMENT: BUG SMASHER MINI-GAME ---

const BugSmasher = ({ isDark }) => {
  const [bugs, setBugs] = useState([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30 second rounds
  
  // New State for Phone Status
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(false);

  // Time Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Battery Effect
  useEffect(() => {
    let battery = null;
    
    const updateBattery = () => {
      setBatteryLevel(Math.round(battery.level * 100));
      setIsCharging(battery.charging);
    };

    if ('getBattery' in navigator) {
      navigator.getBattery().then((b) => {
        battery = b;
        updateBattery();
        battery.addEventListener('levelchange', updateBattery);
        battery.addEventListener('chargingchange', updateBattery);
      });
    }

    return () => {
      if (battery) {
        battery.removeEventListener('levelchange', updateBattery);
        battery.removeEventListener('chargingchange', updateBattery);
      }
    };
  }, []);

  // Game Loop
  useEffect(() => {
    let interval;
    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => {
        // Spawn random bug
        if (Math.random() > 0.3) { // 70% chance to spawn per tick
          const newBug = {
            id: Date.now(),
            x: Math.random() * 80 + 10, // 10% to 90% width
            y: Math.random() * 80 + 10, // 10% to 90% height
            type: Math.random() > 0.8 ? 'critical' : 'minor' // 20% critical bugs
          };
          setBugs(prev => [...prev, newBug]);
        }
        setTimeLeft(prev => prev - 1);
      }, 800); // Speed of spawning
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    return () => clearInterval(interval);
  }, [gameActive, timeLeft]);

  const smashBug = (id, type) => {
    setBugs(prev => prev.filter(b => b.id !== id));
    setScore(prev => prev + (type === 'critical' ? 5 : 1));
  };

  const startGame = () => {
    setScore(0);
    setBugs([]);
    setTimeLeft(30);
    setGameActive(true);
  };

  return (
    <div className={`relative w-full h-80 md:h-96 rounded-2xl border-4 overflow-hidden flex flex-col shadow-2xl transition-colors ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
      
      {/* Phone Status Bar Mock */}
      <div className={`w-full px-4 py-2 flex justify-between items-center text-xs font-mono ${isDark ? 'bg-black text-white' : 'bg-white text-black'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
         <span>{currentTime}</span>
         <div className="flex gap-1">
           <span className="font-bold">BUG_SMASHER_v1.0</span>
         </div>
         <div className="flex items-center gap-1">
           <span>{batteryLevel}%</span>
           {isCharging ? <BatteryCharging size={14} /> : <Battery size={14} />}
         </div>
      </div>

      {/* Game Area */}
      <div className="relative flex-1 w-full overflow-hidden">
        
        {/* Background Grid */}
        <div className={`absolute inset-0 opacity-10 pointer-events-none`} 
             style={{ backgroundImage: `linear-gradient(${isDark ? '#333' : '#ccc'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#333' : '#ccc'} 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
        </div>

        {!gameActive ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
             <div className={`mb-4 p-4 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <Bug size={48} className={isDark ? 'text-red-400' : 'text-red-600'} />
             </div>
             <h3 className="text-2xl font-bold mb-2">Debug Mode</h3>
             <p className={`text-sm mb-6 max-w-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
               {timeLeft === 0 ? `Game Over! Final Score: ${score}` : "Developers spend 50% of their time debugging. Can you keep up?"}
             </p>
             <button 
               onClick={startGame}
               className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
             >
               {timeLeft === 0 ? <RefreshCcw size={18}/> : <Trophy size={18}/>}
               {timeLeft === 0 ? "Try Again" : "Start Debugging"}
             </button>
          </div>
        ) : (
          // Active Game Elements
          <>
            {bugs.map(bug => (
              <button
                key={bug.id}
                onClick={() => smashBug(bug.id, bug.type)}
                style={{ top: `${bug.y}%`, left: `${bug.x}%` }}
                className={`absolute p-2 rounded-full transform hover:scale-90 active:scale-75 transition-transform animate-bounce
                  ${bug.type === 'critical' ? 'text-red-500 bg-red-100 shadow-red-500/50' : 'text-yellow-500 bg-yellow-100 shadow-yellow-500/50'} shadow-lg cursor-pointer`}
              >
                <Bug size={bug.type === 'critical' ? 32 : 24} strokeWidth={2.5} />
              </button>
            ))}
          </>
        )}
      </div>

      {/* Controls / Footer */}
      <div className={`w-full px-6 py-3 flex justify-between items-center ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
         <div className="flex flex-col">
           <span className="text-xs uppercase tracking-wider opacity-60">Score</span>
           <span className="text-2xl font-mono font-bold">{score}</span>
         </div>
         <div className="flex flex-col text-right">
           <span className="text-xs uppercase tracking-wider opacity-60">Time</span>
           <span className={`text-2xl font-mono font-bold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : ''}`}>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
         </div>
      </div>
    </div>
  );
};

// --- Main Application ---

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('all'); // all, mobile, data

  // Toggle Theme
  const toggleTheme = () => setIsDark(!isDark);

  // Theme Classes
  const theme = {
    bg: isDark ? 'bg-slate-900' : 'bg-slate-50',
    text: isDark ? 'text-slate-100' : 'text-slate-800',
    card: isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200',
    accent: isDark ? 'text-cyan-400' : 'text-blue-600',
    accentBg: isDark ? 'bg-cyan-400' : 'bg-blue-600',
    subText: isDark ? 'text-slate-400' : 'text-slate-500',
    nav: isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-200',
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme.bg} ${theme.text} font-sans selection:bg-blue-500 selection:text-white`}>

      {/* Floating Header */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b ${theme.nav} transition-colors duration-500`}>
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
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${isDark ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' : 'border-blue-600/30 text-blue-700 bg-blue-50'}`}>
              <Terminal size={14} className="mr-2" />
              Kotlin • Flutter • Data Science
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Bridging <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-500' : 'from-blue-600 to-indigo-600'}`}>Mobile UI</span> <br />
              & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-emerald-400 to-cyan-500' : 'from-teal-600 to-blue-600'}`}>Data Insights</span>
            </h1>

            <p className={`text-lg md:text-xl ${theme.subText} max-w-lg leading-relaxed`}>
              I build scalable, pixel-perfect mobile experiences and power them with intelligent data systems. Transitioned from native Android to cross-platform Flutter, now expanding into Data Science.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#portfolio" className={`px-6 py-3 rounded-lg font-semibold text-white ${theme.accentBg} hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center`}>
                View Work <ChevronRight size={18} className="ml-2" />
              </a>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/Vader-Femi"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border ${theme.card} hover:scale-105 transition-transform text-current`}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/oluwafemi-okedeyi"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border ${theme.card} hover:scale-105 transition-transform text-current`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/FemiOkedeyi"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border ${theme.card} hover:scale-105 transition-transform text-current`}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="mailto:oluwafemi.za@gmail.com"
                  className={`p-3 rounded-lg border ${theme.card} hover:scale-105 transition-transform text-current`}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Decor Element (Bug Smasher Game) */}
          <div className="relative hidden md:block">
            <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-30 ${isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-blue-300 to-purple-300'}`}></div>
            {/* Replaced DataVizDemo with BugSmasher */}
            <BugSmasher isDark={isDark} />
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className={`py-10 border-y ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap gap-8">
          <span className="text-xl font-bold flex items-center gap-2"><FaFlutter/> Flutter</span>
          <span className="text-xl font-bold flex items-center gap-2"><SiDart/> Dart</span>
          <span className="text-xl font-bold flex items-center gap-2"><Box/> Bloc</span>
          <span className="text-xl font-bold flex items-center gap-2"><SiKotlin/> Kotlin</span>
          <span className="text-xl font-bold flex items-center gap-2"><SiPython/> Python</span>
          <span className="text-xl font-bold flex items-center gap-2"><SiFirebase/> Firebase</span>
          <span className="text-xl font-bold flex items-center gap-2"><SiGit/> Git</span>
          <span className="text-xl font-bold flex items-center gap-2"><SiJetpackcompose/> Jetpack Compose</span>
          <span className="text-xl font-bold flex items-center gap-2"><SiMaterialdesign/> Material Design</span>
          <span className="text-xl font-bold flex items-center gap-2"><SiWearos/> Wear Os</span>
          <span className="text-xl font-bold flex items-center gap-2"><Syringe/> Dependency Injection</span>
          <span className="text-xl font-bold flex items-center gap-2"><FileSpreadsheet/> Excel</span>
          <span className="text-xl font-bold flex items-center gap-2"><Panda/> Pandas</span>
        </div>
      </section>

      {/* NEW SECTION: Experiences (Moved Above Portfolio) */}
      <section className={`py-20 ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
         <div className="max-w-6xl mx-auto px-4">
             <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
               <Briefcase size={32} className="text-blue-500" /> Experience
             </h2>
             <ExperienceTimeline isDark={isDark} />
         </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
            <p className={`${theme.subText}`}>A mix of production apps and data experiments.</p>
          </div>
          <div className={`flex space-x-2 mt-4 md:mt-0 p-1 rounded-lg border ${theme.card}`}>
            {['all', 'flutter', 'kotlin', 'data'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSection(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${activeSection === tab ? (isDark ? 'bg-slate-700 text-white' : 'bg-slate-200 text-black') : 'opacity-60 hover:opacity-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Render Flutter Apps */}
          {(activeSection === 'all' || activeSection === 'flutter') && FlutterApps.map((app) => (
            <div key={app.id} className={`group relative rounded-2xl overflow-hidden border ${theme.card} hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col h-full`}>
              {/* Image/Icon Render Logic */}
              <div className={`h-48 ${app.color} bg-opacity-10 flex items-center justify-center relative overflow-hidden`}>
                {app.icon.includes('/') || app.icon.includes('.') ? (
                  // If it looks like a path, render IMG
                  <img
                    src={app.icon}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=App+Icon" }}
                  />
                ) : (
                  // Else render Emoji/Text
                  <>
                    <div className={`absolute inset-0 ${app.color} opacity-10`}></div>
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                  </>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{app.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full border ${isDark ? 'border-slate-600' : 'border-slate-200'}`}>APK</span>
                </div>
                <p className={`text-sm ${theme.subText} mb-6 flex-1`}>{app.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {app.stack.map(tech => (
                    <span key={tech} className={`flex items-center text-xs font-mono px-2 py-1 rounded ${isDark ? 'bg-slate-700 text-cyan-300' : 'bg-blue-50 text-blue-700'}`}>
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Replaced "Run App" with "Play Store" link */}
                  {app.playUrl && (
                    <a
                      href={app.playUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center py-2 rounded-lg font-medium text-sm transition-colors ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                    >
                      <FaGooglePlay size={16} className="mr-2" /> Run App
                    </a>
                  )}
                  {/* APK Link */}
                  <a
                    href={app.apkUrl}
                    className={`flex items-center justify-center py-2 rounded-lg font-medium text-sm border transition-colors ${theme.card} hover:bg-gray-100 dark:hover:bg-slate-700 ${!app.playUrl ? 'col-span-2' : ''}`}
                  >
                    <Download size={16} className="mr-2" /> APK
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Render Kotlin Apps */}
          {(activeSection === 'all' || activeSection === 'kotlin') && KotlinApps.map((app) => (
            <div key={app.id} className={`group relative rounded-2xl overflow-hidden border ${theme.card} hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col h-full`}>
              {/* Image/Icon Render Logic */}
              <div className={`h-48 ${app.color} bg-opacity-10 flex items-center justify-center relative overflow-hidden`}>
                {app.icon.includes('/') || app.icon.includes('.') ? (
                  // If it looks like a path, render IMG
                  <img
                    src={app.icon}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=App+Icon" }}
                  />
                ) : (
                  // Else render Emoji/Text
                  <>
                    <div className={`absolute inset-0 ${app.color} opacity-10`}></div>
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                  </>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{app.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full border ${isDark ? 'border-slate-600' : 'border-slate-200'}`}>APK</span>
                </div>
                <p className={`text-sm ${theme.subText} mb-6 flex-1`}>{app.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {app.stack.map(tech => (
                    <span key={tech} className={`flex items-center text-xs font-mono px-2 py-1 rounded ${isDark ? 'bg-slate-700 text-cyan-300' : 'bg-blue-50 text-blue-700'}`}>
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Replaced "Run App" with "Play Store" link */}
                  {app.playUrl && (
                    <a
                      href={app.playUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center py-2 rounded-lg font-medium text-sm transition-colors ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                    >
                      <FaGooglePlay size={16} className="mr-2" /> Run App
                    </a>
                  )}
                  {/* APK Link */}
                  <a
                    href={app.apkUrl}
                    className={`flex items-center justify-center py-2 rounded-lg font-medium text-sm border transition-colors ${theme.card} hover:bg-gray-100 dark:hover:bg-slate-700 ${!app.playUrl ? 'col-span-2' : ''}`}
                  >
                    <Download size={16} className="mr-2" /> APK
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Render Data Projects */}
          {(activeSection === 'all' || activeSection === 'data') && DATA_PROJECTS.map((project) => (
            <div key={project.id} className={`group rounded-2xl p-6 border ${theme.card} hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                  <BarChart2 size={24} />
                </div>
                <ExternalLink size={20} className="opacity-50 hover:opacity-100 cursor-pointer" />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
              <p className={`text-sm ${theme.subText} mb-6 flex-1`}>{project.description}</p>

              <div className={`p-4 rounded-lg mb-6 font-mono text-sm ${isDark ? 'bg-slate-900' : 'bg-gray-50 border border-gray-100'}`}>
                <div className="flex justify-between mb-2">
                  <span className="opacity-60">Model Accuracy</span>
                  <span className="text-emerald-500 font-bold">{project.accuracy}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: project.accuracy }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className={`flex items-center text-xs font-mono px-2 py-1 rounded ${isDark ? 'bg-slate-700 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}`}>
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
      
      {/* NEW SECTION: Education (Clean Tech Style) */}
      <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
         <div className="max-w-6xl mx-auto px-4">
             <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
               <GraduationCap size={32} className="text-amber-500" /> Education & Certifications
             </h2>
             <EducationCards isDark={isDark} />
         </div>
      </section>

      {/* Timeline / Bio Section */}
      <section className={`py-20 ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Evolution of a Developer</h2>

          <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4 md:ml-0 space-y-12">

            <div className="relative pl-8 md:pl-0">
              <div className="md:absolute md:-left-4 md:w-8 md:h-8 rounded-full bg-green-500 border-4 border-white dark:border-slate-900"></div>
              <div className="md:w-1/2 md:ml-auto md:pl-12">
                <span className="text-sm font-mono text-green-500 mb-1 block">2020 - Android Native</span>
                <h3 className="text-xl font-bold mb-2">The Kotlin Foundation</h3>
                <p className={`${theme.subText}`}>Started with native Android development. Mastered the lifecycle, intents, and clean architecture patterns using Kotlin.</p>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="md:absolute md:-left-4 md:w-8 md:h-8 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
              <div className="md:w-1/2 md:mr-auto md:pr-12 md:text-right">
                <span className="text-sm font-mono text-blue-500 mb-1 block">2022 - Flutter</span>
                <h3 className="text-xl font-bold mb-2">Cross-Platform Scalability</h3>
                <p className={`${theme.subText}`}>Shifted to Flutter to build scalable, maintainable apps for both iOS and Android from a single codebase. Focused on UI aesthetics and performance.</p>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="md:absolute md:-left-4 md:w-8 md:h-8 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 animate-pulse"></div>
              <div className="md:w-1/2 md:ml-auto md:pl-12">
                <span className="text-sm font-mono text-purple-500 mb-1 block">Present - Data Science</span>
                <h3 className="text-xl font-bold mb-2">Intelligent Systems</h3>
                <p className={`${theme.subText}`}>Integrating predictive models into mobile applications. Bridging the gap between frontend UX and backend intelligence.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Let's build something intelligent.</h2>
          <p className={`mb-8 ${theme.subText}`}>Open for Mobile Development and Data Science opportunities.</p>
          <a href="mailto:oluwafemi.za@gmail.com" className={`inline-block px-8 py-3 rounded-full font-bold text-white ${theme.accentBg} hover:opacity-90 transition-opacity`}>
            Get In Touch
          </a>
          <div className="mt-12 text-sm opacity-50">
            © {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind.
          </div>
        </div>
      </footer>

    </div>
  );
}