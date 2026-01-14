import express from "express";
import controller from "../controller/postsController.js";
import checkID from "../middlewares/checkID.js";

const postsRouter = express.Router();

//INDEX
postsRouter.get("/", controller.index);

//SHOW
postsRouter.get("/:id", checkID, controller.show);

//STORE
postsRouter.post("/", controller.store);

//UPDATE
postsRouter.put("/:id", checkID, controller.update);

//MODIFY
postsRouter.patch("/:id", checkID, controller.modify);

//DESTROY
postsRouter.delete("/:id", checkID, controller.destroy);

export default postsRouter;
