const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").truncate()
    .then(function () {


      return knex('users').insert([
        {username: 'lambda',
        password: bcrypt.hashSync("apple"),
        first_name: 'peter',
        last_name: 'john',
        email: 'peter@lambda.com'
      },
      {username: 'mazda',
        password: bcrypt.hashSync("berry"),
        first_name: 'patrik',
        last_name: 'jones',
        email: 'patrk@lambda.com'
      },
      {username: 'velvet',
        password: bcrypt.hashSync("pawpaw"),
        first_name: 'christian',
        last_name: 'johnson',
        email: 'christian@lambda.com'
      },
      {username: 'violet',
        password: bcrypt.hashSync("purple"),
        first_name: 'frank',
        last_name: 'lampard',
        email: 'frank@lambda.com'
      },
      {username: 'crimson',
        password: bcrypt.hashSync("treble"),
        first_name: 'adrian',
        last_name: 'igwillo',
        email: 'adrian@lambda.com'
      },
      ])
    })
    };

