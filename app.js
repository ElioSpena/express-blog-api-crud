import express from "express";
import postsRouter from "./routers/postRouter.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`in ascolto sulla porta ${port}`);
});
