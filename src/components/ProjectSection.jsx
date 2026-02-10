import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects =[
    {
        id:1,
        title: "E-commerce Website",
        description : "A full-featured e-commerce platform for browsing, purchasing, and managing products online",
        image: "/projects/picture1.png",
        tags: ["React", "Django", "Bootstrap"],
        demoUrl: "https://jyoriyastore.vercel.app/",
        githubUrl: "https://github.com/harshJyoriya1009/Shoppit"
    },
    
    {
        id:2,
        title: "AI Code review Agent",
        description : "AI-powered tool that analyzes GitHub code files and provides score, charts, and improvement suggestions using n8n + Django + React.",
        image: "/projects/picture7.png",
        tags: ["React-js","Django", "N8N"],
        demoUrl: "#",
        githubUrl: "https://github.com/harshJyoriya1009/Code_review_frontend"
    },
    {
        id:3,
        title: "Daily News App",
        description : "Delivers the latest news updates from multiple sources in real time",
        image: "/projects/picture2.png",
        tags: ["React","News API", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "https://github.com/harshJyoriya1009/NEWSHUB-REACT-APP"
    },
    
    {
        id:4,
        title: "Tweet App",
        description : "A social app for posting, liking, and managing tweets in real time",
        image: "/projects/picture3.png",
        tags: ["React", "Django", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "https://github.com/harshJyoriya1009/Tweet"
    },
    
    {
        id:5,
        title: "Feedback Form ",
        description : "An AI-powered feedback form built with N8N and OpenAI to automate response collection and analysis",
        image: "/projects/picture4.jpg",
        tags: ["N8N", "OpenAI"],
        demoUrl: "#",
        githubUrl: "#"
    },
    
    {
        id:6,
        title: "Word Converter",
        description : "Converts text between different formats quickly and accurately",
        image: "/projects/picture5.png",
        tags: ["React", "Bootstarp"],
        demoUrl: "https://word-converter-react.vercel.app/",
        githubUrl: "https://github.com/harshJyoriya1009/Word-Converter-React"
    },
    
    // {
    //     id:7,
    //     title: "Password generator",
    //     description : "Generates secure, random passwords instantly to enhance online security",
    //     image: "/projects/picture6.png",
    //     tags: ["React", "Bootstarp"],
    //     demoUrl: "#",
    //     githubUrl: "https://github.com/harshJyoriya1009/Password-maker"
    // },
    
];

export const ProjectSection =()=>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="conatiner mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-12xl mx-auto">
                Here are some of my projects
            </p>

            <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) =>(
                    <div key={key} className="ground bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 groud-hver:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>(
                                    <span className="px-2 py-1 text-s font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex itmes-center mx-auto gap-2 " href="https://github.com/harshJyoriya1009" target="_blank">Check myGithub <ArrowRight size={20}/></a>
            </div>
        </div>
    </section>
};