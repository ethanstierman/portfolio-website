import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "AI Financial Advisor",
        description: "Led a 6-person intern team at Principal's CodeJam to build an AI-powered financial advice web application. Leveraged OpenAI API for personalized recommendations and implemented full-stack features using React, TypeScript, and AWS services.",
        image: "/projects/principal.jpg",
        tags: ["React", "TypeScript", "AWS", "Express.js", "OpenAI API"],
        demoURL: "#",
        gitHubURL: "#",
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "Designed and developed a modern portfolio website using React, Next.js, and TailwindCSS. Features dark/light mode, smooth animations, responsive design, and a contact form integrated with EmailJS for direct communication.",
        image: "/projects/website.jpg",
        tags: ["React", "TailwindCSS", "Next.js", "EmailJS"],
        demoURL: "#",
        gitHubURL: "https://github.com/ethanstierman/portfolio-website",
    },
    {
        id: 3,
        title: "Financial Data Visualizer",
        description: "Engineered a full-stack finance tracker that parses and categorizes transactions with a MongoDB-backed keyword engine, and delivers dynamic, interactive dashboards through Streamlit with real-time visual insights",
        image: "/projects/financialDataVisualizer.png",
        tags: ["Python", "MongoDB", "Streamlit"],
        demoURL: "#",
        gitHubURL: "https://github.com/ethanstierman/finance-data-visualizer",
    },
    {
        id: 4,
        title: "AI/ML Speech Recognition Pipeline",
        description: "Building a speech-to-text system that transforms raw audio into model-ready features through context splicing, subsampling, and character-level tokenization, enabling training and evaluation of deep learning–based ASR models.",
        image: "/projects/speechToText.png",
        tags: ["Python", "NumPy", "KaldiIO "],
        demoURL: "#",
        gitHubURL: "#",
    },
    {
        id: 5,
        title: "Word Ladder Game",
        description: "Engineered a Python-based word game implementing efficient algorithms including breadth-first search for node network navigation and binary search for quick word lookup. Added word frequency analysis for dynamic difficulty adjustment.",
        image: "/projects/wordLadder.jpg",
        tags: ["Python", "Algorithms", "Data Structures"],
        demoURL: "#",
        gitHubURL: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className = "container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-centered"> 
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and creativity in web development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/40 text-secondary-foreground" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoURL} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a 
                                            href={project.gitHubURL} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>                          
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank" 
                        href="https:/github.com/ethanstierman"
                    >
                        Check Out My Github <ArrowRight size = {16}/>   
                    </a>
                </div>
            </div>
        </section>
    );
};