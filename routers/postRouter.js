import express from "express";
import controller from "../controller/postsController.js";

const postsRouter = express.Router();

//INDEX
postsRouter.get("/", controller.index);

//SHOW
postsRouter.get("/:id", controller.show);

//STORE
postsRouter.post("/", controller.store);

//UPDATE
postsRouter.put("/:id", controller.update);

//MODIFY
postsRouter.patch("/:id", controller.modify);

//DESTROY
postsRouter.delete("/:id", controller.destroy);

export default postsRouter;
