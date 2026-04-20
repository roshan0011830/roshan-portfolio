import { Mail, MapPin, Phone, SendIcon } from "lucide-react";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";

// Toaster
import {useToast} from '@/hooks/use-toast'
import { Toaster } from "./ui/toaster";



function ContactSection() {
  const {toast} = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  });

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    setTimeout(()=>{

      toast({
        title: "Message Sent!",
        description: "Your message has been sent Succesfully."
      })
      clearFormData();
      setIsSubmitting(false)
    }, 1500)

  }

  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Get In<span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have an project in mind or wnat to collaborate? Feel free to reach
          out. I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* left contact */}
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <h3 className="text-center text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 flex justify-center w-fit">
              <div className="flex items-start gap-2">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    href="mailto:pal9122088@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pal9122088@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center  gap-2  w-fit">
              <div className="p-3 rounded-full bg-primary/20">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4>Phone</h4>
                <a
                  href="tel:+91 8962493949"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8962493949
                </a>
              </div>
            </div>

            <div className="flex justify-center items-start gap-2 w-fit">
              <div className="p-3 rounded-full bg-primary/20">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4>Location</h4>
                <a
                  href="tel:+91 8962493949"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  142/6 Indore, Madhya Pradesh
                </a>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-3">Connect With Me</h4>
              <div className="flex space-x-6 justify-center">
                <a href="https://www.linkedin.com/in/roshan-pal-19391628b/" target="_blank">
                  <FaLinkedin size={20} />
                </a>
                <a href="#">
                  <BsTwitterX size={20}/>
                </a>
                <a href="#">
                  <FaInstagram size={20}/>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Right */}
          <div className="bg-card p-8 rounded-lg shadow-xs card-hover">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Roshan Pal..."
                  onChange={(e)=>setFormData({name: e.target.value})}
                  value={formData.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                  onChange={(e)=>setFormData({email: e.target.value})}
                  value={formData.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="what in your mind...?"
                  onChange={(e)=>setFormData({message: e.target.value})}
                  value={formData.message}
                />
              </div>

              <button type="submit" className="cosmic-button w-full flex justify-center items-center gap-2" disabled={isSubmitting}>{
                isSubmitting ? "Sending..." : "Send Message"
              } <SendIcon size={16}/></button>
            </form>
          </div>
          <Toaster/>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
