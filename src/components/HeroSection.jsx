import { ArrowDown } from 'lucide-react';
import React from 'react'

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold ">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Roshan
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Pal
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build modern, responsive web applications using React and
            JavaScript, focusing on clean UI, performance, and real-world
            usability. I turn ideas into scalable and user-friendly digital
            experiences.
          </p>

          <div>
            <a href="#projects" className='cosmic-button'>View My Work</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className='text-sm text-muted-foreground mb-1'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary'/>
      </div>
    </section>
  );
}

export default HeroSection
