exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      //id
      users.increments();

      // username

      users.string("username", 128).notNullable().unique();

      //password
      users.string("password", 128).notNullable();

      // First name

      users.string("first_name", 120);

      // Last name

      users.string("last_name", 120);

      //Email

      users.string("email", 120).notNullable().unique();
    })

    .createTable("products", (products) => {
      //id
      products.increments();

      //name---------------->string--------------> notnullable

      products.string("product_name", 128).notNullable();

      //image

      products.binary("image", 255);

      //description --------> string 

      products.string("description", 255);

      // price---------> integer-------->notnullable

      products.integer("price").notNullable();

      // user_id --------->FOREIGN KEY
      products
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("category", category => {
      //id
      category.increments();
      // name
      category.string("category_name", 155).notNullable();
    })
    .createTable("sub_category", sub_category => {
      //id
      sub_category.increments();

      //name------->string

      sub_category.string("sub_category_name", 156);

      //category_id --------->FOREIGN KEY
      sub_category
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("prices", prices => {
      //id
      prices.increments();
      // name
      prices.string("product_name", 156).notNullable();
      //image
      prices.binary("image", 255);

      // price

      prices.integer("price").notNullable();
      // category_id --------->FOREIGN KEY

      prices
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      //sub_id -------> FOREIGN KEY
      prices
        .integer("sub_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("sub_category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      //location_id --------> FOREIGN KEY
      prices
        .integer("location_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("location")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("location", location => {
      //id
      location.increments();

      //name -------->string---------->notnullable
      location.string("locationName").notNullable();
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("products")
    .dropTableIfExists("category")
    .dropTableIfExists("sub_category")
    .dropTableIfExists("prices")
    .dropTableIfExists("location");
};
