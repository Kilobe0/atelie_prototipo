export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-muted/10">
      <div className="container mx-auto text-center text-foreground/60">
        <p className="font-cursive text-4xl text-accent mb-2">Chlorine Ateliê</p>
        <p className="text-sm">
          &copy; {currentYear} Chlorine Ateliê. Todos os direitos reservados.
        </p>
        <p className="text-sm mt-2">
          Desenvolvido com ❤️ por <a href="https://github.com/Kilobe0" className="text-accent hover:underline">Matheus Achim</a>
        </p>
      </div>
    </footer>
  );
}
