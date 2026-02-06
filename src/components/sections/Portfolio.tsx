"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Categorias para o filtro
const CATEGORIES = ["Todos", "Cozinhas", "Dormitórios", "Salas", "Banheiros"];

// Dados simulados (Placeholder)
const PROJECTS = [
  {
    id: 1,
    title: "Cozinha Minimalista",
    category: "Cozinhas",
    image: "/portfolio/kitchen-1.jpg",
  },
  {
    id: 2,
    title: "Suíte Master",
    category: "Dormitórios",
    image: "/portfolio/bedroom-1.jpg",
  },
  {
    id: 3,
    title: "Home Theater",
    category: "Salas",
    image: "/portfolio/living-1.jpg",
  },
  {
    id: 4,
    title: "Cozinha Gourmet",
    category: "Cozinhas",
    image: "/portfolio/kitchen-2.jpg",
  },
  {
    id: 5,
    title: "Closet Walk-in",
    category: "Dormitórios",
    image: "/portfolio/closet-1.jpg",
  },
  {
    id: 6,
    title: "Banheiro Spa",
    category: "Banheiros",
    image: "/portfolio/bath-1.jpg",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900">
            Nosso Portfólio
          </h2>
          <p className="text-zinc-600 font-light max-w-2xl mx-auto text-lg">
            Explore nossa coleção de projetos exclusivos, onde cada detalhe é
            pensado para unir funcionalidade e beleza.
          </p>
        </div>

        {/* Filtros (Abas) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 border ${
                activeCategory === category
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden bg-zinc-100 cursor-pointer"
              >
                {/* Placeholder de Imagem */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 text-zinc-400">
                  <span className="font-light tracking-widest uppercase text-sm">
                    {project.category}
                  </span>
                </div>

                {/* Overlay com Efeito Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="text-center text-white p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-2xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase border-t border-white/30 pt-2 inline-block">
                      Ver Detalhes
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
