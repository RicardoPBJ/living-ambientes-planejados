/*** src/components/sections/Contact.tsx ***/
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ContactModal } from "./ContactModal";

/**
 * Seção de Chamada para Ação (CTA) de Contato.
 * Inclui um botão que abre o modal de orçamento.
 */
export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contato" className="py-24 bg-zinc-950 text-white relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Transforme Seu Espaço em Uma Obra de Arte
          </h2>
          <p className="mt-6 text-lg text-stone-300 font-light leading-relaxed">
            Entre em contato e solicite um orçamento exclusivo. Nossa equipe de
            designers está pronta para dar vida ao seu projeto, com a
            sofisticação que você merece.
          </p>

          <div className="mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-zinc-950 font-bold text-sm tracking-[0.2em] uppercase hover:bg-stone-200 transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar Conversa
            </button>
          </div>
        </motion.div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
