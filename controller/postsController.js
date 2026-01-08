import posts from "../data/posts.js";

const index = (req, res) => {
  res.json(posts);
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.json(post);
};

const store = (req, res) => {
  res.send("crea un post");
};

const update = (req, res) => {
  res.send("modifica un post per intero");
};

const modify = (req, res) => {
  res.send("modifica un post parzialmente");
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  posts.splice(posts.indexOf(post), 1);

  console.log(`il post ${id} è stato eliminato`);
  res.send("post eliminato");
};

const controller = { index, show, store, update, modify, destroy };

export default controller;
