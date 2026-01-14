import posts from "../data/posts.js";

const index = (req, res) => {
  const tagToFilter = req.query.tags;
  const titleToFilter = req.query.titolo;

  let filteredPosts = posts;
  if (tagToFilter !== undefined) {
    filteredPosts = posts.filter((p) => p.tags.includes(tagToFilter));
  }
  if (titleToFilter !== undefined) {
    filteredPosts = filteredPosts.filter((p) =>
      p.titolo.toLowerCase().includes(titleToFilter)
    );
  }
  res.json(filteredPosts);
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.json(post);
};

const store = (req, res) => {
  const newPost = req.body;
  newPost.id = posts[posts.length - 1].id + 1;
  posts.push(newPost);
  console.log(newPost);
  res.status(201); //è stato creato

  res.json(newPost);
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const newPost = req.body;
  const postToUpdate = posts.find((p) => p.id === id);

  const updatedPost = {
    id: id,
    titolo: newPost.titolo,
    contenuto: newPost.contenuto,
    immagine: newPost.immagine,
    tags: newPost.tags,
  };

  posts.splice(posts.indexOf(postToUpdate), 1, updatedPost);

  res.send(`modifica il post ${newPost.titolo} per intero`);
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
