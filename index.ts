import express from "express";
import restaurantsRouter from "./routes/restaurants.js";
import cuisinesRouter from "./routes/cuisines.js";
import { errorHandler } from "./middlewares/errorHandlers.js";
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/restaurants", restaurantsRouter);
app.use("/api/v1/cuisines", cuisinesRouter);

app.use(errorHandler);
app
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
