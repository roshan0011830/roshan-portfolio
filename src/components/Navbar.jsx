import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils.js'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"}
]

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Navbar page scroll hua to jaise hi navbar se jyada height  page ka scroll ho ye kaam kar dena
  useEffect(()=>{
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 10)
      
    }

    window.addEventListener("scroll", handleScroll)

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }


  }, [])

  
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between pr-16">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Roshan Pal </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 ">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>


        {/* Mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        

        {isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden">
            <div className="flex flex-col  space-y-8">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar
