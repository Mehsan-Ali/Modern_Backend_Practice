import { z } from "zod";

export const RestaurantSchema = z.object({
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  cuisines: z.array(z.string().min(1)),
});

export const RestaurantDetailsSchema = z.object({
  links: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      url: z.string().min(1, "URL is required"),
    }),
  ),
  contact: z.object({
    phone: z.string().min(1, "Phone number is required"),
    email: z.string().email("Email is required"),
  }),
});

export type Resturant = z.infer<typeof RestaurantSchema>;
export type ResturantDetails = z.infer<typeof RestaurantDetailsSchema>;
