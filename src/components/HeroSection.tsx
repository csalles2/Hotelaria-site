import { motion } from "framer-motion";
import heroImg from "@/assets/hotel-exterior.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Serra Vista Hotel - Vista panorâmica das montanhas"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/60 via-warm-dark/30 to-warm-dark/70" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Refúgio de montanha exclusivo
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-warm-dark-foreground leading-tight mb-6"
        >
          Serra<span className="text-gold italic">Vista</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-warm-dark-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Onde o luxo encontra a natureza. Desperte com vistas deslumbrantes das montanhas e viva experiências inesquecíveis.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToBooking}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Fazer Reserva
          </button>
          <button
            onClick={() => document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-warm-dark-foreground/30 text-warm-dark-foreground px-10 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-warm-dark-foreground/10 transition-all"
          >
            Nossos Quartos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
