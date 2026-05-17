import express from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantSchema } from "../schemas/restaurants.js";

const appRouter = express.Router();

appRouter.get("/", validate(RestaurantSchema), async (req, res) => {
  res.status(200).json("Hello from restaurants");
});

export default appRouter;
