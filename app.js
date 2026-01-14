import express from "express";
import postsRouter from "./routers/postRouter.js";
import routeNotFound from "./middlewares/routeNotFound.js";
import handleError from "./middlewares/handleError.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));

app.use("/posts", postsRouter);

app.use(routeNotFound);

app.use(handleError);

app.listen(port, () => {
  console.log(`in ascolto sulla porta ${port}`);
});
