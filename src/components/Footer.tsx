import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold text-background mb-4">
            Serra<span className="text-gold">Vista</span>
          </h3>
          <p className="text-background/50 font-body text-sm leading-relaxed">
            Um refúgio exclusivo nas montanhas, onde cada detalhe foi pensado para proporcionar experiências inesquecíveis.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-background mb-4">Contato</h4>
          <div className="space-y-3 text-background/60 font-body text-sm">
            <p className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> Serra Gaúcha, RS — Brasil</p>
            <p className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +55 (54) 3000-0000</p>
            <p className="flex items-center gap-2"><Mail size={16} className="text-gold" /> reservas@serravista.com.br</p>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-background mb-4">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-gold hover:text-gold-foreground transition-colors text-sm font-bold">IG</a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-gold hover:text-gold-foreground transition-colors text-sm font-bold">FB</a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-8 text-center">
        <p className="text-background/30 font-body text-xs tracking-wider">
          © 2026 SerraVista Hotel. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
