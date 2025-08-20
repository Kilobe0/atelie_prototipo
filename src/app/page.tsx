import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Gallery } from '@/components/sections/gallery';
import { About } from '@/components/sections/about';
import { Order } from '@/components/sections/order';
import { Payment } from '@/components/sections/payment';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <About />
        <Order />
        <Payment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
