const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};
// find all users
function find() {
  return db("users").select("id", "username", "password", "department");
}

// LogIn
function findBy(filter) {
  return db("users").where(filter);
}

 function add(user) {
  return db("users").insert(user, "id")
  .then(ids => {
      const [id] = ids;
  

  return findById(id);
})
 };

// Registration
function findById(id) {
  return db("users").where({ id }).first();
}

function remove(id) {
    return find()
        .where('id', id)
        .del()
}

