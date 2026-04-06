import { motion } from "framer-motion";
import { Users, Maximize, Wifi, Coffee } from "lucide-react";
import roomWinter from "@/assets/room-winter.jpg";
import coworking from "@/assets/coworking.jpg";
import cafe from "@/assets/cafe.jpeg";

const rooms = [
  {
    name: "Suíte Montanha",
    description: "Suíte premium com lareira, banheira de hidromassagem e vista panorâmica para os cânions. Perfeita para momentos de puro romance e relaxamento.",
    price: 890,
    image: roomWinter,
    guests: 2,
    size: "65m²",
    amenities: ["Wi-Fi", "Café da manhã"],
  },
  {
    name: "Chalé Natureza",
    description: "Espaço aconchegante com varanda privativa, café da manhã servido com vista para as montanhas e a brisa da serra.",
    price: 650,
    image: cafe,
    guests: 2,
    size: "45m²",
    amenities: ["Wi-Fi", "Varanda"],
  },
  {
    name: "Suíte Panorâmica",
    description: "Ampla suíte com janelas do chão ao teto, espaço de trabalho integrado e vistas infinitas do oceano de montanhas.",
    price: 1200,
    image: coworking,
    guests: 3,
    size: "80m²",
    amenities: ["Wi-Fi", "Escritório"],
  },
];

const RoomsSection = () => {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Acomodações</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Nossos Quartos</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Cada espaço foi cuidadosamente projetado para oferecer conforto absoluto em harmonia com a natureza.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card rounded-lg overflow-hidden shadow-[var(--shadow-warm)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 right-4 bg-warm-dark/80 backdrop-blur-sm text-gold px-4 py-1.5 rounded-sm text-sm font-semibold">
                  R$ {room.price}<span className="text-warm-dark-foreground/60 text-xs">/noite</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{room.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{room.description}</p>
                <div className="flex items-center gap-4 text-muted-foreground text-xs mb-5 font-body">
                  <span className="flex items-center gap-1"><Users size={14} /> {room.guests} hóspedes</span>
                  <span className="flex items-center gap-1"><Maximize size={14} /> {room.size}</span>
                  <span className="flex items-center gap-1"><Wifi size={14} /></span>
                  <span className="flex items-center gap-1"><Coffee size={14} /></span>
                </div>
                <button
                  onClick={scrollToBooking}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors"
                >
                  Reservar Agora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
