"use server";

import { z } from "zod";

const orderSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  desiredDate: z.coerce.date(),
  description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres."),
});

export async function submitOrder(prevState: any, formData: FormData) {
  const validatedFields = orderSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    desiredDate: formData.get("desiredDate"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor, corrija os erros no formulário.",
    };
  }

  // In a real application, you would send this data to your email,
  // a database, or a CRM.
  console.log("Nova encomenda recebida:", validatedFields.data);

  // For now, we just simulate a success response.
  return {
    errors: null,
    message: "Sua solicitação foi enviada com sucesso! Entrarei em contato em breve.",
  };
}
