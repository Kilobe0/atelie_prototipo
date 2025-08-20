import Image from "next/image";
import { MotionDiv } from "@/components/motion-div";

export function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
              Sobre a Artesã
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Olá! Eu sou a Bia, a alma por trás do ateliê. Desde criança, minhas mãos encontram alegria em dar forma à imaginação. O biscuit se tornou minha grande paixão, um universo de possibilidades onde cada peça é uma história contada com afeto.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Meu trabalho é um convite para você sonhar. Cada encomenda é tratada como única, com dedicação total para que o resultado final seja não apenas uma peça de biscuit, mas um pedacinho de felicidade materializada.
            </p>
            <p className="font-signature text-5xl text-accent">
              Bia
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[30rem] rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Foto da Bia, a artesã"
                fill
                className="object-cover"
                data-ai-hint="artisan portrait"
              />
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
