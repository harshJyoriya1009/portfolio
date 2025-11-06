 import { Instagram, Mail, MapPin, Phone, Twitter, Linkedin, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


import React, { useRef } from 'react';      // -------------------------------------------
import emailjs from '@emailjs/browser';     // --------------------------------------

 export const ContactSection =()=>{

    const{toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ------------------------------------------------------
     const form = useRef();

     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6x3zcal', 'template_mg4npos', form.current, {
        publicKey: 'IMurHoC-7V6tCoZHV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
// ----------------------------------------------------------------------------

    const handleSubmit =(e)=>{
        e.preventDefault();
        setIsSubmitting(true)
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for the message, I'ill get back to you soon."
            });
            setIsSubmitting(false)
        }, 1500);
    };

    return <section className="py-24 px-4 relative bg-secondary/30" id="contact">
        <div className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate feel free to ask me....
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> {" "}Contact Information</h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-start spave-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:harshjyoriyagdg24@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">harshjyoriyagdg24@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start spave-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+91 6392395570" className="text-muted-foreground hover:text-primary transition-colors">+91 6392395570</a>
                        </div>
                    </div>

                    <div className="flex items-start spave-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">Jhansi - UP, India</a>
                        </div>
                    </div>


                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect with me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/harsh-jyoriya-1bb657308/" target="_blank"><Linkedin /></a>
                        <a href="#"><Instagram /></a>
                    </div>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6"> Send a message</h3>

                <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                        <input type="text" name="from_name" id="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Enter your name" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email ID</label>
                        <input type="email" name="from_email" id="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Enter your correct email ID" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                        <textarea  name="message" id="message" rows={5} required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Enter your message" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2", )}>
                       {isSubmitting ? "Sending...":"Send Message" } 
                         <Send  size={17}/>
                        </button>

                </form>
            </div>
        </div>
        </div>
    </section>
 };