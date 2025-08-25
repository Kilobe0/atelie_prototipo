import { MotionDiv } from "@/components/motion-div";
import { Card, CardContent } from "@/components/ui/card";
import products from "@/data/products.json";
import Image from "next/image";

export function Gallery() {
  return (
    <section id="galeria" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline text-center mb-12 text-foreground">
          Minhas Criações
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <MotionDiv
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-accent/20 bg-muted/20 group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/50">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                      <h3 className="text-xl font-headline text-accent">{product.name}</h3>
                      <p className="text-sm text-foreground/80 mt-1">{product.description}</p>
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
