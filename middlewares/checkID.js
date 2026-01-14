import posts from "../data/posts.js";

export default function checkID(req, res, next) {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (post === undefined) {
    res.status(404);
    return res.json({
      error: "404 not found",
      message: "The requested post was not found",
    });
  }

  next();
}
