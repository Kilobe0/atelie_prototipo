import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-div";

export function Contact() {
  const whatsappNumber = "5531997271587"; // Placeholder number
  const emailAddress = "studiochlorine@gmail.com"; // Placeholder email

  return (
    <section id="contato" className="py-20 px-4 bg-background">
      <div className="container mx-auto text-center max-w-2xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-foreground/80 mb-10">
            Tem alguma dúvida ou uma ideia especial? Me mande uma mensagem!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild variant="outline" size="lg" className="text-base border-secondary text-secondary-foreground hover:bg-secondary/20 transition-colors w-full sm:w-auto">
              <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto">
               <Link href={`mailto:${emailAddress}`}>
                 <Mail className="mr-2 h-5 w-5" />
                 E-mail
               </Link>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
