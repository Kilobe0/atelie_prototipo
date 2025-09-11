"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { useFormStatus } from "react-dom";
import { useEffect, useActionState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { submitOrder } from "@/app/encomenda/actions";
import { Card, CardContent } from "./ui/card";

const orderFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  desiredDate: z.date({ required_error: "A data desejada é obrigatória." }),
  description: z
    .string()
    .min(10, { message: "A descrição deve ter pelo menos 10 caracteres." })
    .max(500, { message: "A descrição não pode exceder 500 caracteres." }),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

const initialState = {
  message: "",
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
    >
      {pending ? "Enviando..." : "Solicitar Orçamento"}
    </Button>
  );
}

export function OrderForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitOrder, initialState);

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: "Erro na Validação",
          description: state.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sucesso!",
          description: state.message,
          variant: "default",
          className: "bg-secondary text-secondary-foreground",
        });
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <Card className="bg-muted/20 border-accent/20">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form action={formAction} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="seu.email@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desiredDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data Desejada para Entrega</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP", { locale: ptBR })
                          ) : (
                            <span className="text-base">Escolha uma data</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date <
                          new Date(new Date().setDate(new Date().getDate() - 1))
                        }
                        initialFocus
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descreva sua Peça</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Me conte sobre a peça dos seus sonhos: tema, cores, tamanho, referências, etc."
                      className="resize-y min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <SubmitButton />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
