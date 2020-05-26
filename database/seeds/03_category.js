
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
  return knex("category").truncate()
  .then(function () {
      return knex('category').insert([
        {
          category_name:"Animal Products"
        },
        {
          category_name:"Beans"
        },
        {
          category_name:"Cereals"
        },
        {
          category_name:"Fruits"
        },
        {
          category_name:"Other"
        },
        {
          category_name:"Peas"
        },
        {
          category_name:"Roots & Tubers"
        },
        {
          category_name:"Seeds & Nuts"
        },
        {
          category_name:"Vegetables"
        }
        
      ]);
    })
};
