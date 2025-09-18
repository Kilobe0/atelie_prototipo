// src/components/ui/product-carousel.tsx

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  images: string[]; // Voltamos a aceitar apenas um array de imagens
  alt: string;
}

export function ProductCarousel({ images, alt }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Se houver apenas uma imagem, não mostre os controles
  const showControls = images.length > 1;

  return (
    <div className="relative aspect-square w-full bg-black/10">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              <Image
                src={src}
                alt={`${alt} - Imagem ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              scrollPrev();
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              scrollNext();
            }}
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollTo(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
