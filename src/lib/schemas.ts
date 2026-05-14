import { z } from "zod";
import { tours } from "@/lib/content";

const tourIds = tours.map((tour) => tour.id);

export const bookingSchema = z.object({
  firstName: z.string().trim().min(2),
  lastName: z.string().trim().min(2),
  email: z.email(),
  phone: z.string().trim().min(6),
  tourId: z.string().refine((value) => tourIds.includes(value), "Select a valid tour"),
  numberOfPeople: z.coerce.number().int().min(1).max(20),
  tourDate: z.string().trim().min(8),
  specialRequests: z.string().trim().max(1200).optional().default(""),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.email(),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(10).max(3000),
});
