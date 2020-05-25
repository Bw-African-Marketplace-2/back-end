
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      return knex('products').insert([
        {
          product_name:"Eggs",
          image:"https://i.imgur.com/skrBl9o.jpg",
          description:"Beautiful fresh farmed brown eggs.",
          price:3,
          user_id:1
        },
        {
          product_name:"Beef",
          image:"https://i.imgur.com/NwvSAbX.jpg",
          description:"Juicy slabs of beef from grass feed cows",
          price:14,
          user_id:1
        },
        {
          product_name:"Milk",
          image:"https://i.imgur.com/4iRINNJ.jpg",
          description:"Delicious from grass feed cows",
          price:14,
          user_id:1
        },
        
        {
          product_name:"Honey",
          image:"https://i.imgur.com/L65zYph.jpg",
          description:"Unprocessed Honey",
          price:8,
          user_id:1
        },
        
        {
          product_name:"Morogoro Rice",
          image:"https://i.imgur.com/zR5g1nX.jpg",
          description:"Unprocessed Honey",
          price:10,
          user_id:1
        },
        
      
      ]);
    
};
