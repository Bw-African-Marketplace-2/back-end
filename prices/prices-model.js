const db = require('../api/dbConfig');

module.exports = {
    get,
    getById
}

function get() {
    return db('goodsPrices as g')
    .select("g.product_name","g.price", "g.image", "s.sub_category_name as sub-category", "l.locationName as location")
    .join("sub_category as s", "g.sub_category_id", "s.id")
    .join("location as l", "g.location_id", "l.id")
    
};

function getById(id) {
    return db('prices')
        .where(({ id }))
        .first()
}
