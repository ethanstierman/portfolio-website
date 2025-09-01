import { Briefcase, Code, GraduationCap } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative"> 
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Software Engineering Student & Developer
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a Computer Science student at the University of Iowa with a 4.15 GPA, 
                            pursuing a minor in Business Administration. From my experiences working as a Software 
                            Engineering Intern at Principal Financial, and previously at Iowa DOT and University of Iowa ITS,
                            I've developed a strong foundation in full-stack development and cloud technologies.
                        </p>

                        <p className="text-muted-foreground">
                            My passion lies in creating efficient, scalable applications that solve real business 
                            problems. I have experience with both front-end and back-end development, and I'm 
                            always eager to learn new technologies and tackle challenging projects.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get in Touch
                            </a>

                            <a 
                                href="/resume.pdf" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                download="Ethan_Stierman_Resume.pdf"
                                aria-label="Download resume"
                            >
                                {" "}
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="text-primary w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Development Skills</h4>
                                    <p className="text-muted-foreground">
                                        Proficient in Java, Python, TypeScript, and JavaScript. Experienced with 
                                        AWS, React, Next.js, and various other modern development tools and frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="text-primary w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Education</h4>
                                    <p className="text-muted-foreground">
                                        Computer Science major at the University of Iowa with a 4.15 GPA. 
                                        Class of 2027 with a minor in Business Administration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="text-primary w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work Experience</h4>
                                    <p className="text-muted-foreground">
                                        Currently a Software Engineering Intern at Principal Financial, 
                                        developing enterprise applications. Previous experience at Iowa DOT 
                                        and University of Iowa ITS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}