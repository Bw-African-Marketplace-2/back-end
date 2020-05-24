exports.up = function (knex) {
  return knex.schema.createTable("users", users => {
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

  .createTable("products", products => {

   //id
   products.increments()

   //name

   products.string("product_name", 128).notNullable()

   //image

   products.binary("image", 255)

   //description

   products.string("description", 255)

   // price

   products.integer("price").notNullable

   // user_id FOREIGN KEY
   products
   .integer('user_id')
   .unsigned()
   .notNullable()
   .references('id')
   .inTable('users')
   .onDelete('CASCADE')
   .onUpdate('CASCADE');

})

.createTable("sub_category", sub => {
    //id
sub.increments()

//name
sub.string("sub_category_name", 156)

//category_id FOREIGN KEY
sub
.integer('category_id')
.unsigned()
.notNullable()
.references('id')
.inTable('category')
.onDelete('CASCADE')
.onUpdate('CASCADE');
})







}








  






exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
