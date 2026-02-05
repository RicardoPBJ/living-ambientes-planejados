import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tighter text-zinc-900 hover:opacity-80 transition-opacity"
        >
          LIVING
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/portfolio"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide"
          >
            Portfólio
          </Link>
          <Link
            href="/sobre"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide"
          >
            A Marca
          </Link>
          <Link
            href="/contato"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors">
          <span className="sr-only">Abrir menu</span>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
