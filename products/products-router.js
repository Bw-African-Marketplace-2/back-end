const router = require('express').Router();
const restricted = require('../auth/authenticator.js');

Products = require('./products-model.js');
Users = require('../auth/auth-model');



/************** GET PRODUCTS **************/
router.get('/',  (req, res) => {
    Products.get()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            console.log('GET Products', err)
            res.status(500).json({ message: 'Failed to get products' })
        });
});


/************* GET PRODUCTS BY USER ID *************/
router.get('/:id', restricted,  validateUserId, (req, res) => {
    const userId = req.params.id
    Products.getUserProducts(userId)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            console.log('GET Products', err)
            res.status(500).json({ message: 'The users product information with the specified ID could not be retrieved.' })
        });
});


/************** ADD USER PRODUCT **************/
router.post('/add', restricted,  (req, res) => {
    console.log(req.body)
    Products.add(req.body)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            console.log('POST Products', err)
            res.status(500).json({ message: 'Failed to add product' })
        });
});


/************ UPDATE USER PRODUCT ************/
router.put('/update/:id',  (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    console.log(id)
    Products.getById(id)
        .then(item => {
            if (item) {
               return Products.update(changes, id)
                    .then(changeItem => {
                        res.status(202).json({ updated: changeItem });
                    })
            } else {
                res.status(404).json({ message: 'Could not find the product with the given id' })
            }
        })
        .catch(err => {
            console.log('PUT Products', err)
            res.status(500).json({ message: 'Failed to update product' })
        });
});


/*********** DELETE USER PRODUCT ***********/
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    console.log({id})
    Products.getById(id)
        .then(item => {
            if (item) {
               return Products.remove(id)
                    .then(deleted  => {
                        res.status(200).json({ removed: deleted })
                    })
            } else {
                res.status(404).json({ message: 'The product with the given id cannot be found' })
            }
        })
        .catch(err => {
                    console.log('DELETE Products', err)
                    res.status(500).json({ message: 'Failed to delete product' })
                });
});
    

/*********** CUSTOM MIDDLEWARE ***********/
//Validates user id on all endpoints using id parameters

function validateUserId(req, res, next) {
    const userId = req.params.id
    Users.findById(userId)
        .then(user => {
            // console.log(user)
            if (user) {
                req.user = user;
                next();
            } else {
                res.status(400).json({ message: "invalid user id" })
            }
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "Could not validate user with the specified id" })
        })

};


module.exports = router;