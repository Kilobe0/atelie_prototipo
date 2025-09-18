// src/components/gallery.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv } from "@/components/motion-div";
import { ProductCarousel } from "@/components/ui/product-carousel";
import products from "@/data/products.json";

// 1. Importe os componentes necessários para o título acessível
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = (typeof products)[0] & { videoUrl?: string };

export function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isShowingVideo, setIsShowingVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsShowingVideo(false); // Sempre começa mostrando as imagens
  };

  const handleCloseProduct = () => {
    // 2. Garantimos que, ao fechar o modal, saímos do modo de tela cheia se ele estiver ativo.
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setSelectedProduct(null);
  };

  // 2. A MÁGICA: Este useEffect orquestra a tela cheia
  useEffect(() => {
    const videoElement = videoRef.current;
    if (isShowingVideo && videoElement) {
      const requestFullscreen = () => {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if ((videoElement as any).webkitRequestFullscreen) {
          // Safari
          (videoElement as any).webkitRequestFullscreen();
        }
      };

      // Damos um pequeno tempo para o navegador renderizar o vídeo antes de pedir tela cheia
      const timer = setTimeout(() => {
        requestFullscreen();
        videoElement.play();
      }, 100); // 100ms é um delay seguro

      // Função para detectar quando o usuário sai da tela cheia (ex: apertando ESC)
      const handleFullscreenChange = () => {
        if (!document.fullscreenElement) {
          setIsShowingVideo(false); // Volta para o carrossel
        }
      };

      document.addEventListener("fullscreenchange", handleFullscreenChange);

      // Limpeza: remove o timer e o listener
      return () => {
        clearTimeout(timer);
        document.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
      };
    }
  }, [isShowingVideo]); // Este efeito dispara toda vez que 'isShowingVideo' muda

  const handleKeyDown = (e: React.KeyboardEvent, product: Product) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpenProduct(product);
    }
  };

  return (
    <>
      <section id="galeria" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline text-center mb-12 text-foreground">
            Minhas Criações
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(products as Product[]).map((product, index) => (
              <MotionDiv
                key={product.id}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  onClick={() => handleOpenProduct(product)}
                  onKeyDown={(e) => handleKeyDown(e, product)}
                  role="button"
                  tabIndex={0}
                  className="w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
                >
                  <Card className="flex flex-col h-full overflow-hidden border-accent/20 bg-muted/20 group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/50">
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <ProductCarousel
                        images={product.images}
                        alt={product.name}
                      />
                      <div className="p-4 flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-3xl font-headline text-accent font-bold brightness-125">
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
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedProduct}
        onOpenChange={(isOpen) => !isOpen && handleCloseProduct()}
      >
        <DialogContent
          className="
          bg-card border-accent/20 
          
          /* --- Novos Estilos para MOBILE (padrão) --- */
          w-[85vw] max-w-md h-auto max-h-[85vh] rounded-lg

          /* --- Estilos para DESKTOP (sm:) que já estavam corretos --- */
          sm:max-w-5xl sm:max-h-[90vh]

          /* --- Estilos de Layout Interno --- */
          p-0 flex flex-col overflow-hidden
        "
        >
          {selectedProduct && (
            <>
              <DialogTitle asChild>
                <VisuallyHidden>{selectedProduct.name}</VisuallyHidden>
              </DialogTitle>
              <DialogDescription asChild>
                <VisuallyHidden>{selectedProduct.description}</VisuallyHidden>
              </DialogDescription>

              <div className="flex flex-col md:grid md:grid-cols-2 w-full h-full">
                {/* Coluna da Mídia */}
                <div className="w-full aspect-square flex-shrink-0">
                  {/* 3. A renderização condicional volta */}
                  {isShowingVideo && selectedProduct.videoUrl ? (
                    <video
                      ref={videoRef}
                      src={selectedProduct.videoUrl}
                      className="w-full h-full object-contain"
                      controls
                      muted
                      playsInline
                    />
                  ) : (
                    <>
                      <ProductCarousel
                        images={selectedProduct.images}
                        alt={selectedProduct.name}
                      />
                      {selectedProduct.videoUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-2 top-2 z-20 bg-black/30 text-white hover:bg-black/50 hover:text-white"
                          onClick={() => setIsShowingVideo(true)} // Apenas muda o estado
                          aria-label="Reproduzir vídeo do produto"
                        >
                          <PlayCircle className="h-8 w-8" />
                        </Button>
                      )}
                    </>
                  )}
                </div>

                {/* Coluna das Informações*/}
                <div className="flex flex-col min-h-0 flex-grow p-2 md:p-8">
                  <h2 className="font-bold text-2xl md:text-4xl font-headline text-accent mb-2 flex-shrink-0 brightness-125">
                    {selectedProduct.name}
                  </h2>

                  {/* 2. No DESKTOP, mostramos a descrição normalmente */}
                  <p className="text-2xl text-muted-foreground flex-grow overflow-y-auto hidden md:block">
                    {selectedProduct.description}
                  </p>

                  {/* 3. No MOBILE, mostramos um Drawer clicável */}
                  <div className="md:hidden flex-grow flex items-center">
                    <Drawer>
                      <DrawerTrigger asChild>
                        <button className="text-left text-muted-foreground underline underline-offset-4">
                          Ver descrição
                        </button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                          <DrawerHeader>
                            <DrawerTitle className="font-headline text-accent text-3xl brightness-125">
                              {selectedProduct.name}
                            </DrawerTitle>
                          </DrawerHeader>
                          <div className="p-5">
                            <p className="text-foreground">
                              {selectedProduct.description}
                            </p>
                          </div>
                        </div>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  <p className="text-1xl md:text-2xl font-bold text-foreground self-end mt-4 flex-shrink-0">
                    R$ {selectedProduct.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
