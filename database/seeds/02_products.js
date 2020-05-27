
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products").truncate()
  .then(function () {
  
      return knex('products').insert([
        {
          product_name:"Eggs",
          image:"https://i.imgur.com/skrBl9o.jpg",
          description:"Beautiful fresh farmed brown eggs.",
          price:3,
          users_id:1
        },
        {
          product_name:"Beef",
          image:"https://i.imgur.com/NwvSAbX.jpg",
          description:"Juicy slabs of beef from grass fed cows",
          price:14,
          users_id:2
        },
        {
          product_name:"Milk",
          image:"https://i.imgur.com/4iRINNJ.jpg",
          description:"Delicious from grass feed cows",
          price:14,
          users_id:1
        },
        
        {
          product_name:"Honey",
          image:"https://i.imgur.com/L65zYph.jpg",
          description:"Unprocessed Honey",
          price:8,
          users_id:4
        },
        
        {
          product_name:"Morogoro Rice",
          image:"https://i.imgur.com/zR5g1nX.jpg",
          description:"Unprocessed Honey",
          price:10,
          users_id:3
        },
        {
          product_name:"Wheat Flour",
          image:"http://agrodaily.com/wp-content/uploads/2016/04/wheat.png",
          description:"High quality wheat flour",
          price:4,
          users_id:5
        },
        {
          product_name:"White Millet Grain",
          image:"https://i.imgur.com/l8pXyWM.jpg",          
          description:"Unprocessed Honey",
          price:12,
          users_id:4
        },
        {
          product_name:"Pork Ribs",
          image:"https://i.imgur.com/fwf9TAG.jpg",          
          description:"Good quality pork",
          price:16,
          users_id:2
        },
        {
          product_name:"Sweet Potatoes",
          image:"https://i.imgur.com/LwiGxoD.jpg",          
          description:"Fresh sweet potatoes",
          price:8,
          users_id:2
        },
        {
          product_name:"Cowpeas",
          image:"https://i.imgur.com/ce8syM6.jpg",                    
          description:"Fresh, high quality",
          price:9,
          users_id:3
        },

        {
          product_name:"Goats Milk",
          image:"https://i.imgur.com/4iRINNJ.jpg",          
          description:"Fresh, high quality",
          price:7,
          users_id:4
        },
        {
          product_name:"Tomatoes",
          image:"https://i.imgur.com/l8Z2g9p.jpg",          
          description:"Fresh, high quality",
          price:1,
          users_id:3
        },
        {
          product_name:"Tilapia",
          image:"https://www.supremelobster.com/wp-content/uploads/tilapia.png",                    
          description:"Fresh, high quality",
          price:18,
          users_id:2
        },
        {
          product_name:"Brown Rice",
          image:"https://i.imgur.com/zR5g1nX.jpg",                   
          description:"Fresh, high quality",
          price:6,
          users_id:2
        },
        {
          product_name:"Goat",
          image:"https://i.imgur.com/jApguL1.jpg",          
          description:"Fresh, high quality",
          price:16,
          users_id:4
        },
        {
          product_name:"Beef Rib",
          image:"https://i.imgur.com/fAlg5gf.jpg",                             
          description:"Fresh, high quality",
          price:12,
          users_id:1
        },
      ]);
    }) 
};
