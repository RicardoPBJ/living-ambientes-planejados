"use client";

import { motion } from "framer-motion";
import { smoothScroll } from "@/utils/smoothScroll";

/**
 * Seção Hero (Destaque principal).
 * Exibe um vídeo de fundo e a chamada principal da marca.
 */
export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    smoothScroll("portfolio");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          {/* IMPORTANTE: Adicione um vídeo 'hero.mp4' na pasta public/ do seu projeto */}
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay de gradiente para legibilidade e sofisticação */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            Living Ambientes
            <span className="block text-3xl md:text-5xl lg:text-6xl font-light italic mt-2 text-stone-200">
              Planejados
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-stone-300 font-light tracking-wide leading-relaxed">
            Sofisticação e exclusividade em cada detalhe. Transformamos espaços
            em experiências únicas de alto padrão.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href="#portfolio"
            onClick={handleScroll}
            className="inline-block px-10 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-medium text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-zinc-950 transition-all duration-300"
          >
            Ver Portfólio
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
