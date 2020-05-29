const request = require("supertest");

const server = require("../api/server");
const db = require("../api/dbConfig.js");

describe("prices", function () {
    describe("GET /prices", function () {
      it("should return 200 OK", async function () {
        const login = await request(server)
        .post("/api/auth/login")
        .send({username: "lambda", password: "apple", email: "peter@lambda.com"})
        console.log(login.body)
        // make a GET request to / endpoint on the server

        const res = await request(server) // return the async call to let jest know it should wait
          .get("/api/prices").set("authorization", login.body.token)
          
            // assert that the HTTP status code is 200
            expect(res.status).toBe(200);
        
        })
      })
    
    })
