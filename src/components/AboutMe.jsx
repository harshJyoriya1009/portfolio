import { Code } from "lucide-react"
import { User } from "lucide-react"
import { Briefcase } from "lucide-react"

export const AboutMe =() =>{
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                About <span className="text-primary">ME</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & AI Automation Enthusiast </h3>
                    <p className="text-muted-foreground">I build modern web applications using Python, Django, and React, with a strong focus on performance and user experience. I enjoy developing clean, efficient, and reliable products.</p>
                    <p className="text-muted-foreground">Alongside web development, I work with AI tools and automation to build smart chatbot solutions and automate real-world processes.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="https://www.linkedin.com/in/harsh-jyoriya-1bb657308/" target="_blank" className="cosmic-button">Get in Touch</a>
                        <a href={`${import.meta.env.BASE_URL}projects/Harsh_Resume.pdf`} download="Harsh_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development </h4>
                                <p className="text-muted-foreground">I develop scalable and efficient web solutions using Python, Django, and React, ensuring smooth functionality and clean design.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover"><div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> AI Automation</h4>
                                <p className="text-muted-foreground">I develop smart automation systems and conversational AI that make processes faster, smoother, and more efficient.</p>
                            </div>
                        </div>
                        </div>
                    <div className="gradient-border p-6 card-hover"><div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">I coordinate tasks, teams, and timelines to keep projects on track and ensure every goal is delivered with quality.</p>
                            </div>
                        </div>
                        </div>

                </div>

            </div>
        </div>
    </section>
}