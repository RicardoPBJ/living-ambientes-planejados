/*** src/components/forms/ContactForm.tsx ***/
"use client";

import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Calendar,
  Layout,
  User,
  Hammer,
} from "lucide-react";
import { AMBIENTES, CIDADES, PRAZOS, MATERIAIS } from "@/constants/contact";

interface ContactFormProps {
  /** Função chamada após o envio bem-sucedido do formulário (ex: fechar modal) */
  onSuccess: () => void;
}

/**
 * Formulário de contato principal.
 * Gerencia o estado local dos campos e constrói a mensagem para o WhatsApp.
 */
export function ContactForm({ onSuccess }: ContactFormProps) {
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
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto">
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
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
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
              onClick={() => setFormData({ ...formData, ambiente: item })}
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
  );
}
