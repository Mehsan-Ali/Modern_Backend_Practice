import express from "express";

const appRouter = express.Router();

appRouter.get("/", async (req, res) => {
  res.status(200).json("Hello from restaurants");
});

export default appRouter;
