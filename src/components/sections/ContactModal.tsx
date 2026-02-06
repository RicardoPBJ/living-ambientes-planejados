/*** src/components/sections/ContactModal.tsx ***/
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  MapPin,
  Calendar,
  Layout,
  User,
  Hammer,
} from "lucide-react";
import { AMBIENTES, CIDADES, PRAZOS, MATERIAIS } from "@/constants/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    ambiente: "",
    cidade: "",
    prazo: "",
    material: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `Olá! Me chamo *${formData.nome}*.\n\nGostaria de um orçamento para: *${formData.ambiente}*.\nLocal: *${formData.cidade}*.\nPrevisão: *${formData.prazo}*.`;

    if (formData.material) {
      message += `\nInteresse em material: *${formData.material}*.`;
    }

    message += `\n\nPodemos conversar?`;

    // IMPORTANTE: Substitua pelo seu número real
    const whatsappNumber = "5511999999999";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white text-zinc-950 w-full max-w-lg relative pointer-events-auto shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
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
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-6 overflow-y-auto"
              >
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                    <User className="w-4 h-4" /> Seu Nome
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Como gostaria de ser chamado?"
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:ring-0 outline-none transition-all placeholder:text-zinc-400"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                    <Layout className="w-4 h-4" /> O que você deseja planejar?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {AMBIENTES.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, ambiente: item })
                        }
                        className={`p-2 text-sm border transition-all text-left ${
                          formData.ambiente === item
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Onde será o projeto?
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full p-3 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:ring-0 outline-none transition-all appearance-none text-zinc-700"
                      value={formData.cidade}
                      onChange={(e) =>
                        setFormData({ ...formData, cidade: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Selecione a cidade/região
                      </option>
                      {CIDADES.map((cidade) => (
                        <option key={cidade} value={cidade}>
                          {cidade}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Previsão de Início
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full p-3 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:ring-0 outline-none transition-all appearance-none text-zinc-700"
                      value={formData.prazo}
                      onChange={(e) =>
                        setFormData({ ...formData, prazo: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Selecione a urgência
                      </option>
                      {PRAZOS.map((prazo) => (
                        <option key={prazo} value={prazo}>
                          {prazo}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                    <Hammer className="w-4 h-4" /> Material de Interesse{" "}
                    <span className="text-zinc-400 font-normal normal-case">
                      (Opcional)
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {MATERIAIS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            material: formData.material === item ? "" : item,
                          })
                        }
                        className={`px-3 py-2 text-sm border transition-all ${
                          formData.material === item
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={
                    !formData.nome ||
                    !formData.ambiente ||
                    !formData.cidade ||
                    !formData.prazo
                  }
                  className="w-full py-4 bg-zinc-900 text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
