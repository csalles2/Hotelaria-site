import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Quartos", href: "#rooms" },
  { label: "Experiências", href: "#experiences" },
  { label: "Galeria", href: "#gallery" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-dark/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#hero" onClick={() => scrollTo("#hero")} className="font-display text-2xl font-bold text-warm-dark-foreground tracking-wide">
          Serra<span className="text-gold">Vista</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-warm-dark-foreground/80 hover:text-gold transition-colors text-sm font-medium tracking-wider uppercase font-body"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#booking")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Reservar
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-warm-dark-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-dark overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-warm-dark-foreground/80 hover:text-gold transition-colors text-sm tracking-wider uppercase"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#booking")}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wider uppercase"
              >
                Reservar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
