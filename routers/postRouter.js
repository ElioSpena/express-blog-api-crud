import express from "express";

const postsRouter = express.Router();

//INDEX
postsRouter.get("/", (req, res) => {
  console.log("mostra tutti i post");
});

//SHOW
postsRouter.get("/:id", (req, res) => {
  console.log("mostra un post");
});

//STORE
postsRouter.post("/", (req, res) => {
  console.log("crea un post");
});

//UPDATE
postsRouter.put("/:id", (req, res) => {
  console.log("modifica un post per intero");
});

//MODIFY
postsRouter.patch("/:id", (req, res) => {
  console.log("modifica un post parzialmente");
});

//DESTROY
postsRouter.delete("/:id", (req, res) => {
  console.log("elimina un post");
});

export default postsRouter;
