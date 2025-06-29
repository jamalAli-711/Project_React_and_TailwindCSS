import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", href: "" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "Contact" },
  { name: "cv", href: "cvi" },
];
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);
    const [isLinkNav, setLinkNav] = useState("/");

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 print:hidden",
        isScrolled
          ? "py-3 bg-background/40 backdrop-blur-md shadow-xs "
          : "py-5"
      )}>
              <ThemeToggle/>

      <div className="print:hidden container flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold text-primary flex items-center">
          <span className=" relative z-10">
            {""}
            <span className=" text-glow text-foreground">JamalAli</span>{" "}
            protfolio
          </span>
        </a>

        <div className=" hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <NavLink onClick={()=>setLinkNav(item.href)}
              key={key}
              to={item.href}
              className={cn(
                item.href===isLinkNav  ?
"text-primary hover:text-primary transition-colors duration-300":"  text-foreground/80 hover:text-primary transition-colors duration-300 "
              )}
                >
              {item.name}
            </NavLink>
          ))}
        </div>
        <button onClick={()=>setIsMenuOpen((penv) =>!penv)} 
         className="md:hidden p-2 text-foreground z-50"
         aria-label={isMenuOpen ? "Close Menu ":"Open Menu"}
         >
            {isMenuOpen ? <X size={24}/>:<Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-80 pointer-events-auto "
              : "opacity-0 pointer-events-none"
          )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
             <NavLink
             key={key}
             to={item.href}
                className= "text-foreground/80 hover:text-primary transition-colors duration-300 "
                onClick={()=>setIsMenuOpen(false)}>
                {item.name}
              </NavLink>
          
            ))
            
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
