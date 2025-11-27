import { useState } from 'react'
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
    const projects = [
        {
            title: "Project 1",
            description: "A cool visualization project.",
            tags: ["React", "Three.js", "Vite"],
            link: "#",
            github: "#"
        },
        {
            title: "Project 2",
            description: "Interactive web application.",
            tags: ["Vue", "Firebase"],
            link: "#",
            github: "#"
        },
        {
            title: "Project 3",
            description: "Mobile-first responsive design.",
            tags: ["CSS", "HTML"],
            link: "#",
            github: "#"
        }
    ]

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-cyan-500/30">
            <header className="container mx-auto px-6 py-12 flex justify-between items-center">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold tracking-tight text-cyan-400"
                >
                    NeoRedcraft
                </motion.h1>
                <nav className="flex gap-6">
                    <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                </nav>
            </header>

            <main className="container mx-auto px-6">
                <section className="py-20 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-extrabold mb-6 leading-tight"
                    >
                        Building immersive <span className="text-cyan-400">web experiences</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-400 mb-8"
                    >
                        I am a creative developer passionate about modern web technologies. Check out my work below.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-4"
                    >
                        <a href="https://github.com/NeoRedcraft" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="mailto:email@example.com" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors">
                            <Mail size={24} />
                        </a>
                    </motion.div>
                </section>

                <section id="projects" className="py-20">
                    <h3 className="text-3xl font-bold mb-12 border-b border-neutral-800 pb-4">Featured Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                                    <div className="flex gap-2">
                                        <a href={project.github} className="text-neutral-500 hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.link} className="text-neutral-500 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                                <p className="text-neutral-400 mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-neutral-800 rounded-md text-neutral-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="py-20 text-center">
                    <h3 className="text-3xl font-bold mb-6">Let's work together</h3>
                    <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <a href="mailto:email@example.com" className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors">
                        Get in Touch
                    </a>
                </section>
            </main>

            <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
                <p>&copy; {new Date().getFullYear()} NeoRedcraft. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
