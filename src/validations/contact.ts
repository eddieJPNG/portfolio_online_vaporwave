import { z } from 'zod';

const MIN_SUBMIT_INTERVAL_MS = 3000;

export const contactFormSchema = z
  .object({
    nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
    email: z.string().email('Email inválido').max(255, 'Email muito longo'),
    assunto: z
      .string()
      .min(3, 'Assunto deve ter pelo menos 3 caracteres')
      .max(100, 'Assunto muito longo'),
    mensagem: z
      .string()
      .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
      .max(1000, 'Mensagem muito longa'),
    honeypot: z.string().max(0, 'Campo deve estar vazio').optional().or(z.literal('')),
    _timestamp: z.string().min(1),
  })
  .refine(
    (data) => {
      const loadedAt = Number(data._timestamp);
      if (Number.isNaN(loadedAt)) return false;
      return Date.now() - loadedAt >= MIN_SUBMIT_INTERVAL_MS;
    },
    { message: 'Formulário enviado rapidamente demais. Tente novamente.', path: ['_timestamp'] }
  );

export type ContactFormData = z.infer<typeof contactFormSchema>;
