const request = require("supertest");
const server = require("../api/server");
const db = require("../api/dbConfig.js");


describe("products", function () {
    describe("GET /products", function () {
      it("should return 200 OK", async function () {
        const login = await request(server)
        .post("/api/auth/login")
        .send({username: "lambda", password: "apple", email: "peter@lambda.com"})
        console.log(login.body)
        // make a GET request to / endpoint on the server

        const res = await request(server) // return the async call to let jest know it should wait
          .get("/api/products").set("authorization", login.body.token)
          
            // assert that the HTTP status code is 200
            expect(res.status).toBe(200);
        
        })
      })
    it('should add a product with the right name', async function() {
          const login = await request(server)
          .post("/api/auth/login")
        .send({username: "lambda", password: "apple", email: "peter@lambda.com"})
        console.log(login.body)
//make a POST request to / endpoint
const res = await request(server)
.post("/api/products/add").set("authorization", login.body.token)
                let product = await Products.add({
                        product_name: "Milk", 
                        description:"Beautiful fresh farmed brown eggs.",
                        price:3,
                        users_id:2
                })
            })
            
            it('should delete a product ', async function() {
                const login = await request(server)
                .post("/api/auth/login")
              .send({username: "lambda", password: "apple", email: "peter@lambda.com"})
              console.log(login.body)
      //make a POST request to / endpoint
      const res = await request(server)
      .delete("/api/products/delete/:1d").set("authorization", login.body.token)
                      let product = await Products.add({
                              product_name: "Milk", 
                              description:"Beautiful fresh farmed brown eggs.",
                              price:3,
                              users_id:2
                      })
                  })
            

    //   it('post /', async function () {
    //             const login = await request(server)
    //             .post("/api/auth/login")
    //             .send({username: "lambda", password: "apple", email: "peter@lambda.com"})
    //             console.log(login.body)

    //             const res = await request(server)
    //                 .post('/api/products').set("authorization", login.body.token)
    //             expect(res.status).toBe(201)
    //             expect(res.body[1]).toEqual(item)
    //             expect(res.type).toMatch(/json/)
    //         })
    // })



// const server = require('../api/server');
// const request = require('supertest');


// const prepTestDB= require('../config/prepTestDB')
// const Products = require('./products-model');
// const db = require('../api/dbConfig');
// const restrict= require('../config/test/test-middleware');
// jest.mock('../config/test/test-middleware');

//  beforeEach(prepTestDB);

// describe('products router',  () => {
//     it('post /',  async () => {
//         const item = {
//             id:1,
//             product_name: "Eggs",
//             description: "Beautiful fresh farmed brown eggs.",
//             price: 3,
//         }

//         const res = await request(server)
//             .post('/post')
//             .send(item)
//         expect(res.status).toBe(404)
//     })

//     it('get /', async function() => {
//         const login = await request(server)
//         .post("/api/auth/login")
//         .send({username: "lambda", password: "apple", email: "peter@lambda.com"})
//         const res = await request(server)
//             .get('/api/products').set("authorization", login.body.token)
//         expect(res.status).toBe(200)
//         expect(res.body[1]).toEqual(item)
//         expect(res.type).toMatch(/json/)
//     })

// })

// beforeEach(async () => {
//     await db('products').truncate();
// });

// describe('products model', () => {
   
//     describe('add()', () => {
//     it('should set the environment to testing', () => {
//         expect(process.env.DB_ENV).toBe('testing')
//     });

   

//         it('should add a product to the database', async() => {
//             await Products
//                 .add({
//                         product_name: "Milk", 
//                         description:"Beautiful fresh farmed brown eggs.",
//                         price:3,
//                         users_id:2
//                     });
//             let products = await db('products');

//             // expect(product).toHaveLength(2)
//             expect(products).toHaveLength(1)
//         });

//         it('should add a product with the right name', async() => {
            
//         let product = await Products.add({
//                 product_name: "Milk", 
//                 description:"Beautiful fresh farmed brown eggs.",
//                 price:3,
//                 users_id:2
//             });
//             // let product = await db('products')
//             //     .where(product_name)
//             //     .first()
            

//             // expect(product.productName).toBe("Chicken")
//             expect(product.product_name).toBe("Milk")
//         });

    })
