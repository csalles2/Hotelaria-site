import { motion } from "framer-motion";
import heroImg from "@/assets/hotel-exterior.jpg";
import roomWinter from "@/assets/room-winter.jpg";
import cafe from "@/assets/cafe.jpeg";
import poolImg from "@/assets/pool.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import spaImg from "@/assets/spa.jpg";

const images = [
  { src: heroImg, alt: "Hotel exterior" },
  { src: roomWinter, alt: "Suíte premium" },
  { src: cafe, alt: "Café da manhã" },
  { src: poolImg, alt: "Piscina" },
  { src: restaurantImg, alt: "Restaurante" },
  { src: spaImg, alt: "Spa" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Nossos espaços</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Galeria</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`overflow-hidden rounded-lg ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
              loading="lazy"
              style={{ minHeight: i === 0 ? "400px" : "200px" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
