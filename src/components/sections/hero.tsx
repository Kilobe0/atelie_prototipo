import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-div";
import Link from "next/link";

export function Hero() {
  return (
    <section className="text-center py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-foreground">
            Bebendo cloro e fazendo arte.
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Peças únicas e personalizadas, feitas à mão com carinho para eternizar seus momentos mais especiais. Cada detalhe é pensado para contar a sua história.
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl">
            <Link href="#encomenda">
              Quero uma peça exclusiva
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
