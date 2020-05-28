const db = require('../api/dbConfig');

module.exports = {
    get,
    getUserProducts,
    getByUserId,
    getById,
    add,
    update,
    remove
}

function get() {
    //select * from products
    return db('products')
    .select(
        'products.id',
        'product_name',
        'image',
        'description',
        'price',
        'users.id AS users_id',
    )
    .join('users', 'users.id', 'products.users_id')
        
};

function getUserProducts(users_id) {
    return db('products')
        .select(
                'products.id',
                'product_name',
                'image',
                'description',
                'price',
                'users.id AS users_id'
            )
        .join('users', 'users.id', 'products.users_id')
        .where('products.users_id', "users_id")
}

function getById(id) {
    return db('products')
    .where({ id })
    .first();
  }

function getByUserId(id) {
    return get()
        .where({ "users.id": id });
};

function add(product) {
    return db('products')
        .insert(product)
        .then(ids => {
            return getById(ids[0])
        })
};

function update(changes, id) {
    return db('products')
        .where({ id })
        .update(changes);
        
}

function remove(id) {
    //delete from schemes where id = 123
    return db('products')
        .where('id', id)
        .del()
}