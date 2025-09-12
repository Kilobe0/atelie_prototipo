// src/components/header.tsx

"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Home, Menu } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export function Header() {
  const navLinks = [
    { href: "#galeria", label: "Galeria" },
    { href: "#sobre", label: "Sobre" },
    { href: "#encomenda", label: "Encomendas" },
    { href: "#contato", label: "Contato" },
  ];

  const scrolled = useScroll();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header
      className={cn(
        "px-6 md:px-8 w-full bg-background/80 backdrop-blur-sm z-20 sticky top-0 transition-all duration-300",
        scrolled ? "py-2 border-b border-border/40" : "py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* --- LADO ESQUERDO: LOGO DINÂMICO --- */}
        <div className="relative h-12 flex items-center">
          {/* Logo Completo (só visível no topo da página) */}
          <Link
            href="/"
            className={cn(
              "relative top-3 text-5xl font-cursive text-foreground hover:text-accent transition-opacity duration-300",
              scrolled ? "opacity-0" : "opacity-100"
            )}
          >
            Chlorine Ateliê
          </Link>
          {/* Ícone de Casa (só visível com scroll) */}
          <Link
            href="/"
            aria-label="Voltar para a página inicial"
            className={cn(
              "absolute top-1/2 -translate-y-1/2 transition-opacity duration-300",
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <Home className="h-7 w-7 md:h-8 md:w-8 text-foreground transition-colors hover:text-accent" />
          </Link>
        </div>

        {/* --- LADO DIREITO: NAVEGAÇÃO DINÂMICA --- */}
        <div>
          {/* Navegação Desktop (só visível no topo da página em desktop) */}
          <nav
            className={cn(
              "hidden items-center space-x-6 transition-opacity duration-300",
              isDesktop && !scrolled
                ? "md:flex opacity-100"
                : "md:hidden opacity-0"
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Drawer/Sheet (visível no mobile OU quando a página está rolada no desktop) */}
          <div
            className={cn(
              "transition-opacity duration-300",
              !isDesktop || scrolled
                ? "opacity-100"
                : "opacity-0 pointer-events-none md:hidden"
            )}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetHeader>
                <SheetTitle asChild>
                  <VisuallyHidden>Menu Principal</VisuallyHidden>
                </SheetTitle>
                <SheetDescription asChild>
                  <VisuallyHidden>Navegue pelas seções do site.</VisuallyHidden>
                </SheetDescription>
              </SheetHeader>
              <SheetContent>
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="text-4xl font-headline text-foreground transition-colors hover:text-accent"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
