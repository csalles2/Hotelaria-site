import { motion } from "framer-motion";
import poolImg from "@/assets/pool.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import spaImg from "@/assets/spa.jpg";

const experiences = [
  {
    title: "Piscina Infinita",
    description: "Relaxe na nossa piscina com borda infinita com vista para as montanhas ao pôr do sol.",
    image: poolImg,
  },
  {
    title: "Gastronomia",
    description: "Saboreie pratos autorais preparados com ingredientes locais e frescos da serra.",
    image: restaurantImg,
  },
  {
    title: "Spa & Bem-Estar",
    description: "Terapias holísticas e tratamentos relaxantes em um ambiente de serenidade absoluta.",
    image: spaImg,
  },
];

const ExperiencesSection = () => (
  <section id="experiences" className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Viva momentos únicos</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Experiências</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative h-96 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/80 via-warm-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-2xl font-semibold text-warm-dark-foreground mb-2">{exp.title}</h3>
              <p className="text-warm-dark-foreground/80 font-body text-sm leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperiencesSection;
