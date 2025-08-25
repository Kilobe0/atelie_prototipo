import { MotionDiv } from "@/components/motion-div";
import Image from "next/image";

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
              Quem faz as encomendas
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Me chame de Chlorine, nasci em 2005 e desde criança estudo por conta própria modelagem e ilustração, comecei fazendo miniaturas para bonecas, objetos decorativos e acessórios para uso pessoal.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Em 2023 participei de feiras de artesanato em minha cidade natal, Sete Lagoas; na época eu fazia peças decorativas e acessórios, tudo na temática tons pastéis. Tentei ter uma loja online mas a experiência não me agradou, decidi então fechar a loja e agora faço tudo com a proposta de um ateliê.
            </p>
            <h3 className="text-3xl font-headline text-foreground mt-8 mb-4">
              Proposta do Ateliê
            </h3>
            <p className="text-lg text-foreground/80 mb-4">
              Este é o meu ateliê, que diferente de uma loja online, cada encomenda que recebo se torna um projeto onde realizo pesquisas, testes, protótipos e modelos até chegar em um resultado final.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Atualmente eu trabalho em um emprego CLT e tenho pouco tempo livre para me dedicar à arte. Toda grana que recebo das encomendas é investida em upgrades de materiais para fazer novos projetos e expandir o ateliê, assim pretendo sempre ter um acervo melhor de peças.
            </p>
            <p className="font-cursive text-5xl text-accent">
              Chlorine
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[30rem] rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Foto da Chlorine, a artesã"
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