import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-stone-50 py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="font-serif text-2xl font-bold tracking-tight">
            LIVING
          </h3>
          <p className="text-zinc-400 text-sm font-light">
            &copy; {new Date().getFullYear()} Living Ambientes Planejados.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <Link
            href="/privacidade"
            className="hover:text-white transition-colors"
          >
            Privacidade
          </Link>
          <Link href="/termos" className="hover:text-white transition-colors">
            Termos
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
