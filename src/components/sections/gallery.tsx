import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv } from "@/components/motion-div";

const galleryItems = [
  { src: "https://placehold.co/600x800.png", alt: "Topo de bolo personalizado", title: "Topos de Bolo", "data-ai-hint": "biscuit craft" },
  { src: "https://placehold.co/600x800.png", alt: "Lembrancinha de biscuit", title: "Lembrancinhas", "data-ai-hint": "handmade souvenir" },
  { src: "https://placehold.co/600x800.png", alt: "Peça de biscuit personalizada", title: "Personalizados", "data-ai-hint": "custom figure" },
  { src: "https://placehold.co/600x800.png", alt: "Vela decorada em biscuit", title: "Velas Decoradas", "data-ai-hint": "decorated candle" },
  { src: "https://placehold.co/600x800.png", alt: "Action figure em biscuit", title: "Action Figures", "data-ai-hint": "action figure" },
  { src: "https://placehold.co/600x800.png", alt: "Personagem de filme em biscuit", title: "Personagens", "data-ai-hint": "character sculpture" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline text-center mb-12 text-foreground">
          Minhas Criações
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-accent/20 bg-muted/20 group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/50">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={item['data-ai-hint']}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-headline text-accent">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
