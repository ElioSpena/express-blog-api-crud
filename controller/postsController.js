const index = (req, res) => {
  console.log("mostra tutti i post");
};

const show = (req, res) => {
  console.log("mostra un post");
};

const store = (req, res) => {
  console.log("crea un post");
};

const update = (req, res) => {
  console.log("modifica un post per intero");
};

const modify = (req, res) => {
  console.log("modifica un post parzialmente");
};

const destroy = (req, res) => {
  console.log("elimina un post");
};

const controller = { index, show, store, update, modify, destroy };

export default controller;
