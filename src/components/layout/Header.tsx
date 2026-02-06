"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { smoothScroll } from "@/utils/smoothScroll";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    smoothScroll(targetId);
  };

  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    smoothScroll(); // Sem argumentos = rolar para o topo
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="font-serif text-2xl font-bold tracking-tighter text-zinc-900 hover:opacity-80 transition-opacity"
        >
          LIVING
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#portfolio"
            onClick={(e) => handleScroll(e, "portfolio")}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide"
          >
            Portfólio
          </Link>
          <Link
            href="#sobre"
            onClick={(e) => handleScroll(e, "sobre")}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide"
          >
            A Marca
          </Link>
          <Link
            href="#contato"
            onClick={(e) => handleScroll(e, "contato")}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 p-6 flex flex-col gap-4 shadow-lg">
          <Link
            href="#portfolio"
            className="text-lg font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            onClick={(e) => handleScroll(e, "portfolio")}
          >
            Portfólio
          </Link>
          <Link
            href="#sobre"
            className="text-lg font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            onClick={(e) => handleScroll(e, "sobre")}
          >
            A Marca
          </Link>
          <Link
            href="#contato"
            className="text-lg font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            onClick={(e) => handleScroll(e, "contato")}
          >
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}
