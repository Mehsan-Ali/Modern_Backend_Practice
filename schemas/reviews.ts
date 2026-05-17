import { z } from "zod";

export const ReviewSchema = z.object({
  review: z.string().min(1, "Review is required"),
  rating: z
    .number()
    .min(1, "Rating is required")
    .max(5, "Rating must be at most 5"),
});


export type Review = z.infer<typeof ReviewSchema>