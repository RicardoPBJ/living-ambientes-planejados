/*** src/components/sections/ContactModal.tsx ***/
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

interface ContactModalProps {
  /** Indica se o modal está visível */
  isOpen: boolean;
  /** Função para fechar o modal */
  onClose: () => void;
}

/**
 * Modal de contato que exibe o formulário de orçamento.
 * Utiliza Framer Motion para animações de entrada e saída.
 */
export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Fundo escuro) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* Container do Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white text-zinc-950 w-full max-w-lg relative pointer-events-auto shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              {/* Cabeçalho do Modal */}
              <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-stone-50">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-zinc-900">
                    Detalhes do Projeto
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    Conte-nos um pouco mais para agilizarmos seu atendimento.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-zinc-200 transition-colors rounded-full text-zinc-500 hover:text-zinc-900"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Formulário Refatorado */}
              <ContactForm onSuccess={onClose} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
