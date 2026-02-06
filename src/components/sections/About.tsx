/*** src/components/sections/About.tsx ***/
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight">
              A excelência está nos <br />
              <span className="italic text-zinc-500">detalhes invisíveis</span>
            </h2>

            <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-lg">
              <p>
                Na Living Ambientes Planejados, não apenas fabricamos móveis;
                nós materializamos o estilo de vida de nossos clientes. Cada
                projeto é uma jornada colaborativa onde funcionalidade e
                estética se encontram em perfeita harmonia.
              </p>
              <p>
                Utilizamos matérias-primas selecionadas e ferragens de alta
                tecnologia para garantir que a sofisticação visual seja
                acompanhada de durabilidade excepcional. Do closet dos sonhos à
                cozinha gourmet, nossa assinatura é a exclusividade.
              </p>
            </div>

            {/* Estatísticas / Prova Social */}
            <div className="pt-4 border-t border-zinc-200">
              <div className="flex gap-12">
                <div>
                  <span className="block font-serif text-4xl text-zinc-900">
                    12+
                  </span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">
                    Anos de Experiência
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-4xl text-zinc-900">
                    850+
                  </span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">
                    Projetos Entregues
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo Visual (Imagem) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative h-[500px] w-full bg-zinc-200 overflow-hidden"
          >
            {/* 
              DICA: Adicione uma imagem chamada 'about.jpg' na pasta /public 
              e descomente o código abaixo para ver a imagem real.
            */}
            {/* 
            <Image
              src="/about.jpg"
              alt="Interior sofisticado Living Ambientes"
              fill
              className="object-cover"
            /> 
            */}

            {/* Placeholder enquanto não há imagem */}
            <div className="absolute inset-0 flex items-center justify-center bg-stone-200">
              <span className="text-stone-400 font-light tracking-widest uppercase">
                Imagem Institucional
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
