const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
     

      return knex('users').insert([
        {username: 'lambda',
        password: bcrypt.hashSync("apple"),
        first_name: 'peter',
        last_name: 'john',
        email: 'peter@lambda.com'
      },
      ])
    };

