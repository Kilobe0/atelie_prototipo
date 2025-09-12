import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-div";

export function Payment() {
  const stripePaymentLink = "https://buy.stripe.com/test_5kA5m2e8c1qYgG43cc"; // Placeholder link

  return (
    <section id="pagamento" className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto text-center max-w-2xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-4">
            Pagamento
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Após a confirmação do seu orçamento, o pagamento pode ser realizado de forma segura através do link abaixo.
          </p>
          <Button asChild size="lg" className="text-base bg-accent text-accent-foreground hover:bg-accent hover:brightness-125 transition-colors">
            <Link href={stripePaymentLink} target="_blank" rel="noopener noreferrer">
              Pagar com Stripe
            </Link>
          </Button>
          <p className="text-base text-muted-foreground mt-4">
            Você será redirecionado para o ambiente seguro do Stripe.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
