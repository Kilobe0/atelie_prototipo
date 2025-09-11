import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv } from "@/components/motion-div";
import { ProductCarousel } from "@/components/ui/product-carousel";
import products from "@/data/products.json";

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
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col h-full overflow-hidden border-accent/20 bg-muted/20 group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/50">
                <CardContent className="p-0 flex flex-col flex-grow">
                  {/* Carrossel de Imagens */}
                  {product.images && product.images.length > 0 ? (
                    <ProductCarousel
                      images={product.images}
                      alt={product.name}
                    />
                  ) : (
                    <div className="relative aspect-[3/4] w-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Sem imagem</p>
                    </div>
                  )}

                  {/* Detalhes do Produto */}
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-3xl font-headline text-accent font-bold">
                        {product.name}
                      </h3>
                      <p className="text-foreground/80 mt-1">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-foreground self-end mt-4">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </p>
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
