import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const formData = {
                from_name: e.target.name.value,
                from_email: e.target.email.value,
                message: e.target.message.value,
                to_email: 'eestierman@gmail.com'
            };

            await emailjs.send(
                'service_qdm7ae8',
                'template_xhnxjhm',
                formData,
                '0zlHZM-hM8JVpbxJq'
            );

            toast.success("Message sent! I'll get back to you soon.");
        } catch (error) {
            toast.error("Oops! Something went wrong. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hello? Feel free to reach out!
                    I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow tech enthusiasts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 mr-18">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="text-primary w-6 h-6" /> {" "}
                                </div>
                                <div className="ml-10">
                                    <h4 className="font-mediun"> Email </h4>
                                    <a 
                                        href="mailto:eestierman@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        eestierman@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="text-primary w-6 h-6" /> {" "}
                                </div>
                                <div className="ml-18">
                                    <h4 className="font-mediun"> Phone </h4>
                                    <a 
                                        href="tel:5157788070" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        (515) 778-8070
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="text-primary w-6 h-6" /> {" "}
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-mediun"> Location </h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        href = "https://www.google.com/maps/place/Des+Moines,+IA/@41.5668442,-93.6065148,12z/data=!3m1!4b1!4m6!3m5!1s0x87ee99a4c1611ee7:0x710028512691e4b2!8m2!3d41.5896139!4d-93.6163963!16zL20vMDJqM3c?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                    >
                                        Des Moines, Iowa, United States
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/ethan-stierman-502487213/" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/ethan.stierman/" target="_blank">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name 
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    required 
                                    placeholder="John Doe..."
                                >
                                </input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email 
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    required 
                                    placeholder="john.doe@gmail.com..."
                                >
                                </input>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message 
                                </label>
                                <input
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    required 
                                    placeholder="Hello, I would like to talk about..."
                                >
                                </input>
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}