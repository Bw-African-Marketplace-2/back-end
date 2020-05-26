const db = require('../database/dbConfig');

module.exports = {
    get,
    getById
}

function get() {
    return db('prices')
    .select("r.product_name","r.price", "r.image", "s.sub_category_name as sub-category", "l.locationName as location")
    .join("sub_category as s", "r.sub_id", "s.id")
    .join("location as l", "r.location_id", "l.id")
    
};

function getById(id) {
    return db('prices')
        .where(({ id }))
        .first()
}
