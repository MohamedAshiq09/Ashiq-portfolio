// "use client";

// import { useEffect } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   ChevronDown,
//   Download,
//   Mail,
//   Github,
//   Linkedin,
//   Twitter,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { TypewriterText } from "@/components/typewriter-text";
// import { FloatingElements } from "@/components/particle-system";

// import { ParticleSystem } from "@/components/particle-system";

// const socialLinks = [
//   {
//     name: "GitHub",
//     href: "https://github.com/santhoshkumar0918",
//     icon: Github,
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/santhosh-kumar-k-a727ba2a7",
//     icon: Linkedin,
//   },
//   { name: "Twitter", href: "https://x.com/Santhosh0918_", icon: Twitter },
// ];

// export function Hero() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 700 };
//   const x = useSpring(mouseX, springConfig);
//   const y = useSpring(mouseY, springConfig);

//   const rotateX = useTransform(y, [-300, 300], [10, -10]);
//   const rotateY = useTransform(x, [-300, 300], [-10, 10]);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = document
//         .getElementById("hero-section")
//         ?.getBoundingClientRect();
//       if (rect) {
//         mouseX.set(e.clientX - rect.left - rect.width / 2);
//         mouseY.set(e.clientY - rect.top - rect.height / 2);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   const scrollToProjects = () => {
//     document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="hero-section"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <ParticleSystem />
//         <FloatingElements />
//       </div>

//       {/* Gradient Orbs */}
//       <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           {/* Animated Introduction */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-6"
//           >
//             <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-blue-400 backdrop-blur-sm">
//               👋 Welcome to my digital world
//             </span>
//           </motion.div>

//           {/* Name with 3D Effect */}
//           <motion.div
//             style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//             className="mb-6"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.2 }}
//               className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4"
//             >
//               <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
//                 Santhosh
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
//                 Kumar
//               </span>
//             </motion.h1>
//           </motion.div>

//           {/* Typewriter Effect */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mb-8"
//           >
//             <TypewriterText
//               text="Full-Stack Web3 Developer"
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-4"
//             />
//             <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
//               Crafting the Future of Web3 - One Line of Code at a Time
//             </p>
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
//           >
//             <Button
//               onClick={scrollToProjects}
//               className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
//             >
//               <span className="relative z-10 flex items-center">
//                 View My Work
//                 <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
//             </Button>

//             <Button
//               asChild
//               variant="outline"
//               className="px-8 py-4 border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-semibold rounded-full transition-all duration-300 hover:scale-105"
//             >
//               <a href="/resume.pdf" download="SanthoshKumar_Resume.pdf">
//                 <Download className="mr-2 h-4 w-4" />
//                 Download Resume
//               </a>
//             </Button>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex justify-center space-x-6 mb-12"
//           >
//             {socialLinks.map((link, index) => (
//               <motion.a
//                 key={link.name}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.8 + index * 0.1 }}
//               >
//                 <link.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Contact CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             className="text-center"
//           >
//             <Button
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               variant="ghost"
//               className="text-gray-400 hover:text-white font-medium transition-colors duration-300"
//             >
//               <Mail className="mr-2 h-4 w-4" />
//               Let&apos;s build something amazing together
//             </Button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="w-1 h-3 bg-white/50 rounded-full mt-2"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }




"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ChevronDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";
import { FloatingElements } from "@/components/particle-system";

import { ParticleSystem } from "@/components/particle-system";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MohamedAshiq09",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/m%C3%B8h%CE%BBm%CE%BEd%CE%BBs%CC%B4hiq%E1%B7%88s%CC%B4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://x.com/Ash__05_", icon: Twitter },
];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document
        .getElementById("hero-section")
        ?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950"
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(6,182,212,0.1)_60deg,transparent_120deg,rgba(16,185,129,0.1)_180deg,transparent_240deg,rgba(6,182,212,0.1)_300deg,transparent_360deg)] animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(16,185,129,0.08)_60deg,transparent_120deg,rgba(6,182,212,0.08)_180deg,transparent_240deg,rgba(16,185,129,0.08)_300deg,transparent_360deg)] animate-spin" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <ParticleSystem />
        <FloatingElements />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400/60 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping delay-1500"></div>

      {/* Gradient Orbs with Animation */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-teal-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Hexagonal Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwIDFMMzAgMzBNMzAgMzBMMzAgNTlNMzAgMzBMMTUuNTggMTUuNU0zMCAzMEw0NC40MiAxNS41TTMwIDMwTDQ0LjQyIDQ0LjVNMzAgMzBMMTUuNTggNDQuNSIgc3Ryb2tlPSJyZ2JhKDYsMTgyLDIxMiwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] bg-[size:60px_60px]"></div>
      </div>

      {/* Animated Border Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-sm font-medium text-cyan-300 backdrop-blur-sm">
              🚀 Welcome to my digital space
            </span>
          </motion.div>

          {/* Name with 3D Effect */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4"
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Mohamed
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Ashiq
              </span>
            </motion.h1>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <TypewriterText
              text="Full-Stack Web3 Developer"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mb-4"
            />
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Building Tomorrow's Digital Experiences with Modern Web Technologies
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Explore My Work
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </Button>

            <Button
              asChild
              variant="outline"
              className="px-8 py-4 border-cyan-400/20 text-cyan-100 hover:bg-cyan-500/10 hover:border-cyan-400/30 font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <a href="/resume.pdf" download="MohamedAshiq_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-slate-800/50 border border-cyan-400/20 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <link.icon className="h-5 w-5 text-slate-300 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="ghost"
              className="text-slate-400 hover:text-cyan-300 font-medium transition-colors duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Let&apos;s create something extraordinary together
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-cyan-400/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}