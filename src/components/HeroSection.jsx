import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Ethan</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Stierman</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I'm a Software Engineering Intern at Principal Financial and Computer Science student at the University 
                    of Iowa. With experience in full-stack development using AWS, React, and Java, I create efficient and 
                    scalable solutions that drive business value.
                </p>

                <div>
                    <a 
                        href="#projects" 
                        className="cosmic-button opacity-0 animate-fade-in-delay-4"
                    > 
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary animate-bounce"/>
        </div>
    </section>;
}