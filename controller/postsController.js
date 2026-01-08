const index = (req, res) => {
  res.send("mostra tutti i post");
};

const show = (req, res) => {
  res.send("mostra un post");
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
  res.send("elimina un post");
};

const controller = { index, show, store, update, modify, destroy };

export default controller;
