"use client";
import Image from "next/image";
import Link from "next/link";
import Stars from "@/components/Stars";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  const projects = [
    { 
      title: "Own Portfolio", 
      tech: "Next.js, TypeScript",
      imagePath: "/projects/portfolio.png" 
    },
    { 
      title: "Discord Clone", 
      tech: "Rust, TypeScript, JavaScript, Python, C++",
      imagePath: "/projects/discord.svg" 
    },
    { 
      title: "Coming Soon", 
      tech: "???",
      imagePath: "/projects/empty.png" 
    },
  ];

  const skills = ["Full-Stack Development", "Cloud Architecture", "Blockchain", "AI/ML", "DevOps", "UI/UX Design"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black/95 via-[#0d0718]/90 to-[#1a0526]/85 text-gray-100 font-[family-name:var(--font-geist-sans)] relative">
      {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden bg-transparent backdrop-blur-sm">
        <div className="absolute inset-0 z-0">
          <Stars />
        </div>
        
        <div className="container mx-auto px-6 py-20 text-center relative z-10 h-full flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4a1b6d_0%,transparent_70%)] opacity-20" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Batuhan Eroğlu
            <span className="block text-2xl md:text-3xl mt-4 text-purple-200">Full-Stack Developer</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-purple-100 opacity-90 leading-relaxed">
              2+ years of experience in full-stack development
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-24">
            <Link 
              href="#projects" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-900/50"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  const offset = 80; // Header yüksekliği
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <ScrollAnimation>
        <section id="projects" className="container mx-auto px-6 py-12  bg-transparent backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-300">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-purple-900/10 hover:bg-purple-900/20 transition-all p-6 rounded-xl border border-purple-800/50 hover:border-purple-500 group relative overflow-hidden">
                <div className="h-48 mb-4 relative rounded-lg overflow-hidden flex items-center justify-center bg-purple-900/20">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    width={96}
                    height={96}
                    className="object-contain h-24 w-24 filter brightness-125 contrast-75"
                    style={{
                      filter: 'drop-shadow(0 0 12px rgba(139, 92, 246, 0.3))'
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200">{project.title}</h3>
                <p className="text-sm text-purple-400 opacity-90">{project.tech}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Skills */}
      <section className="container mx-auto px-6 -mt-80 bg-transparent backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-300">Expertise Areas</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-purple-900/20 hover:bg-purple-900/30 px-6 py-2 border border-purple-800 rounded-full text-sm hover:bg-purple-800/40 transition-colors cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-20 text-center bg-transparent backdrop-blur-sm">
        <div className="max-w-2xl mx-auto bg-purple-900/10 border-purple-800/30 rounded-2xl p-8 border border-purple-800/50">
          <h2 className="text-3xl font-bold mb-6 text-purple-200">Get in Touch</h2>
          <p className="mb-8 text-purple-300">Send me an email for inquiries or collaborations</p>
          
          <div className="mt-10">
            <a 
              href="mailto:batuhaneroglu145@gmail.com" 
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 text-lg"
            >
              📧 batuhaneroglu145@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/50 mt-20 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <Link 
              href="https://github.com/hhydraaa" 
              target="_blank" 
              className="text-purple-400 hover:text-purple-300 transition-colors hover:scale-125"
            >
              <Image 
                src="/github-icon.svg" 
                width={28}
                height={28}
                alt="GitHub"
                className="inline-block w-7 h-7"
              />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/batuhan-eroğlu-9b788622b/" 
              target="_blank" 
              className="text-purple-400 hover:text-purple-300 transition-colors hover:scale-125"
            >
              <Image 
                src="/linkedin-icon.svg" 
                width={28}
                height={28}
                alt="LinkedIn"
                className="inline-block w-7 h-7 hover:filter hover:brightness-125"
              />
            </Link>
          </div>
          <p className="text-sm text-purple-500">
            © 2025 All rights reserved. Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}