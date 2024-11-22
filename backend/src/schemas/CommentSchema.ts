import { z } from 'zod';

export const commentAddSchema = z.object({
    id: z.string().uuid().optional(), // id como un UUID opcional
    comment: z.string(), // comment como string requerido
    email: z.string().email(), // email como string requerido y debe ser un email válido
    // createdAt: z.date().optional(), // createdAt como fecha opcional
    // updatedAt: z.date().optional(), // updatedAt como fecha opcional
    // isDeleted: z.date().nullable().optional(), // isDeleted como fecha opcional o null
});

export const commentUpdateSchema = z.object({
    id: z.string().uuid(), // id como un UUID opcional
    comment: z.string(), // comment como string requerido
    email: z.string().email(), // email como string requerido y debe ser un email válido
});

export const commentDeleteSchema = z.object({
    id: z.string().uuid(), // id como un UUID opcional
});