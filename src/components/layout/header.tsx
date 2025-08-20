import Link from "next/link";

export function Header() {
  const navLinks = [
    { href: "#galeria", label: "Galeria" },
    { href: "#sobre", label: "Sobre" },
    { href: "#encomenda", label: "Encomendas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="py-6 px-4 md:px-8 w-full bg-background/80 backdrop-blur-sm z-20 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-signature text-foreground hover:text-accent transition-colors">
          Ateliê da Bia
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
