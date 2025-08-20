import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ObrigadoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <CheckCircle className="mx-auto h-16 w-16 text-secondary mb-6" />
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-4">
            Pagamento Recebido!
          </h1>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
            Muito obrigada! Sua encomenda agora está confirmada. Em breve, você receberá mais detalhes sobre a produção e envio da sua peça.
          </p>
          <Button asChild size="lg">
            <Link href="/">Voltar para o Início</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
