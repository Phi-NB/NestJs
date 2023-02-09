import { z } from 'zod';

export const createCarSchema = z.object({
  name: z.string().min(1).max(30),
  price: z.number().min(100).max(9999999),
  company: z.string().min(1).max(200),
  typeOfCar: z.string().min(1).max(200),
});

export const modifyCarSchema = z.object({
  name: z.string().min(1).max(30),
  price: z.number().min(100).max(9999999),
  company: z.string().min(1).max(200),
  typeOfCar: z.string().min(1).max(200),
});
