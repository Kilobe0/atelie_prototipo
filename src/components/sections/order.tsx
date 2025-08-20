import { OrderForm } from "@/components/order-form";
import { MotionDiv } from "@/components/motion-div";

export function Order() {
  return (
    <section id="encomenda" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-4">
            Faça sua Encomenda
          </h2>
          <p className="text-lg text-foreground/80 mb-12">
            Preencha o formulário abaixo com os detalhes da peça que você sonha. Entrarei em contato para transformarmos sua ideia em realidade.
          </p>
        </MotionDiv>
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
        >
          <OrderForm />
        </MotionDiv>
      </div>
    </section>
  );
}
