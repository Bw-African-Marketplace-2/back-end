const server = require('../api/server');
const request = require('supertest');


const prepTestDB= require('../config/prepTestDB')
const Products = require('./products-model');
const db = require('../api/dbConfig');
const restrict= require('../config/test/test-middleware');
jest.mock('../config/test/test-middleware');

beforeEach(prepTestDB);

describe('products router',  () => {
    it('post /', restrict, async () => {
        const item = {
            id:1,
            product_name: "Eggs",
            description: "Beautiful fresh farmed brown eggs.",
            price: 3,
        }

        const res = await request(server)
            .post('/post')
            .send(item)
        expect(res.status).toBe(404)
    })

    it('get /', restrict, async () => {
        const res = await request(server)
            .get('/products')
        expect(res.status).toBe(200)
        expect(res.body[1]).toEqual(item)
        expect(res.type).toMatch(/json/)
    })

})

describe('products model', () => {
    beforeEach(async () => {
        await db('products').truncate();
    });

    it('should set the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    describe('add()', () => {

        it('should add a product to the database', async() => {
            await Products
                .add({
                        product_name: "Milk", 
                        description:"Beautiful fresh farmed brown eggs.",
                        price:3,
                        users_id:2
                    });
            let product = await db('products');

            // expect(product).toHaveLength(2)
            expect(product).toHaveLength(1)
        });

        it('should add a product with the right name', async() => {
             await Products.add({
                product_name: "Milk", 
                description:"Beautiful fresh farmed brown eggs.",
                price:3,
                users_id:2
            })

            let product = await db('products')
                .where(product_name)
                .first()

            // expect(product.productName).toBe("Chicken")
            expect(product.product_name).toBe("Milk")
        });

    })
})