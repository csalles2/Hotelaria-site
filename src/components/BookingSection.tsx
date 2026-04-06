import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, CreditCard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const rooms = [
  { id: "montanha", name: "Suíte Montanha", price: 890 },
  { id: "natureza", name: "Chalé Natureza", price: 650 },
  { id: "panoramica", name: "Suíte Panorâmica", price: 1200 },
];

const BookingSection = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    room: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    payment: "",
  });

  const selectedRoom = rooms.find((r) => r.id === form.room);

  const nights = form.checkIn && form.checkOut
    ? Math.max(1, Math.ceil((new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) / 86400000))
    : 0;

  const total = selectedRoom ? selectedRoom.price * nights : 0;

  const handleSubmit = () => {
    toast({
      title: "Reserva Confirmada! ✨",
      description: `${selectedRoom?.name} — ${nights} noites — Total: R$ ${total.toLocaleString("pt-BR")}. Enviamos a confirmação para ${form.email}.`,
    });
    setStep(4);
  };

  return (
    <section id="booking" className="py-24 bg-warm-dark">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Reserve sua estadia</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-dark-foreground mb-4">Fazer Reserva</h2>
        </motion.div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step >= s ? "bg-primary text-primary-foreground" : "bg-warm-dark-foreground/10 text-warm-dark-foreground/40"
              }`}>
                {step > s ? <Check size={16} /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-primary" : "bg-warm-dark-foreground/10"}`} />}
            </div>
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-warm-dark-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-warm-dark-foreground/10"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="font-display text-xl text-warm-dark-foreground flex items-center gap-2">
                <CalendarDays size={20} className="text-gold" /> Datas e Quarto
              </h3>
              <div>
                <label className="block text-warm-dark-foreground/70 text-sm mb-2 font-body">Quarto</label>
                <select
                  value={form.room}
                  onChange={(e) => setForm({ ...form, room: e.target.value })}
                  className="w-full bg-warm-dark border border-warm-dark-foreground/20 text-warm-dark-foreground rounded-sm px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione um quarto</option>
                  {rooms.map((r) => (
                    <option key={r.id} value={r.id}>{r.name} — R$ {r.price}/noite</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-warm-dark-foreground/70 text-sm mb-2 font-body">Check-in</label>
                  <input
                    type="date"
                    value={form.checkIn}
                    onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                    className="w-full bg-warm-dark border border-warm-dark-foreground/20 text-warm-dark-foreground rounded-sm px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-warm-dark-foreground/70 text-sm mb-2 font-body">Check-out</label>
                  <input
                    type="date"
                    value={form.checkOut}
                    onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                    className="w-full bg-warm-dark border border-warm-dark-foreground/20 text-warm-dark-foreground rounded-sm px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-warm-dark-foreground/70 text-sm mb-2 font-body flex items-center gap-1">
                  <Users size={14} /> Hóspedes
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                  className="w-full bg-warm-dark border border-warm-dark-foreground/20 text-warm-dark-foreground rounded-sm px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "hóspede" : "hóspedes"}</option>
                  ))}
                </select>
              </div>

              {selectedRoom && nights > 0 && (
                <div className="bg-primary/10 border border-primary/20 rounded-sm p-4 text-warm-dark-foreground font-body">
                  <p className="text-sm">{selectedRoom.name} — {nights} {nights === 1 ? "noite" : "noites"}</p>
                  <p className="text-2xl font-display font-bold text-gold mt-1">R$ {total.toLocaleString("pt-BR")}</p>
                </div>
              )}

              <button
                onClick={() => setStep(2)}
                disabled={!form.room || !form.checkIn || !form.checkOut}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-display text-xl text-warm-dark-foreground flex items-center gap-2">
                <Users size={20} className="text-gold" /> Dados Pessoais
              </h3>
              <div>
                <label className="block text-warm-dark-foreground/70 text-sm mb-2 font-body">Nome completo</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full bg-warm-dark border border-warm-dark-foreground/20 text-warm-dark-foreground rounded-sm px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-warm-dark-foreground/30"
                />
              </div>
              <div>
                <label className="block text-warm-dark-foreground/70 text-sm mb-2 font-body">E-mail</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="w-full bg-warm-dark border border-warm-dark-foreground/20 text-warm-dark-foreground rounded-sm px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-warm-dark-foreground/30"
                />
              </div>
              <div>
                <label className="block text-warm-dark-foreground/70 text-sm mb-2 font-body">Telefone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-warm-dark border border-warm-dark-foreground/20 text-warm-dark-foreground rounded-sm px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-warm-dark-foreground/30"
                />
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="flex-1 border border-warm-dark-foreground/20 text-warm-dark-foreground py-3.5 rounded-sm text-sm tracking-wider uppercase hover:bg-warm-dark-foreground/5 transition-colors">
                  Voltar
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!form.name || !form.email || !form.phone}
                  className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-display text-xl text-warm-dark-foreground flex items-center gap-2">
                <CreditCard size={20} className="text-gold" /> Pagamento
              </h3>
              <div className="space-y-3">
                {[
                  { id: "credit", label: "Cartão de Crédito", desc: "Visa, Mastercard, Elo" },
                  { id: "pix", label: "PIX", desc: "Pagamento instantâneo — 5% de desconto" },
                  { id: "transfer", label: "Transferência Bancária", desc: "Dados enviados por e-mail" },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 p-4 rounded-sm border cursor-pointer transition-colors ${
                      form.payment === method.id
                        ? "border-primary bg-primary/10"
                        : "border-warm-dark-foreground/10 hover:border-warm-dark-foreground/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={form.payment === method.id}
                      onChange={(e) => setForm({ ...form, payment: e.target.value })}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      form.payment === method.id ? "border-primary" : "border-warm-dark-foreground/30"
                    }`}>
                      {form.payment === method.id && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                    <div>
                      <p className="text-warm-dark-foreground font-body font-medium">{method.label}</p>
                      <p className="text-warm-dark-foreground/50 text-xs font-body">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-sm p-4 text-warm-dark-foreground font-body">
                <p className="text-sm mb-1">Resumo da reserva</p>
                <p className="font-medium">{selectedRoom?.name} — {nights} {nights === 1 ? "noite" : "noites"}</p>
                <p className="text-sm text-warm-dark-foreground/60">{form.name} · {form.email}</p>
                <p className="text-3xl font-display font-bold text-gold mt-2">
                  R$ {(form.payment === "pix" ? total * 0.95 : total).toLocaleString("pt-BR")}
                </p>
                {form.payment === "pix" && (
                  <p className="text-xs text-accent mt-1">5% de desconto aplicado via PIX</p>
                )}
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="flex-1 border border-warm-dark-foreground/20 text-warm-dark-foreground py-3.5 rounded-sm text-sm tracking-wider uppercase hover:bg-warm-dark-foreground/5 transition-colors">
                  Voltar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.payment}
                  className="flex-1 bg-gold text-gold-foreground py-3.5 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-gold/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Confirmar Reserva
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8 space-y-4">
              <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                <Check size={36} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl text-warm-dark-foreground">Reserva Confirmada!</h3>
              <p className="text-warm-dark-foreground/60 font-body">
                Enviamos todos os detalhes para <span className="text-gold">{form.email}</span>. Nos vemos em breve!
              </p>
              <button
                onClick={() => { setStep(1); setForm({ room: "", checkIn: "", checkOut: "", guests: 1, name: "", email: "", phone: "", payment: "" }); }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors mt-4"
              >
                Nova Reserva
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
