const router = require('express').Router();
const restricted = require('../auth/authenticator.js');

Prices = require('./prices-model')

/************** GET PRICING **************/
router.get('/', restricted, (req, res) => {
    Prices.get()
        .then(price => {
            res.status(200).json(price);
        })
        .catch(err => {
            console.log('GET Prices', err);
            res.status(500).json({ message: 'Failed to get prices' });
        });
});

/************** GET PRICING BY ID **************/
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Prices.getById(id)
        .then(price => {
            if(price) {
                res.status(200).json(price);
            } else {
                res.status(404).json({ message: 'Could not find the product with the given id.' })
            }
        })
        .catch(err => {
            console.log("Get Prices By Id", err)
            res.status(500).json({ message: 'Failed to get prices' });
          });
})

module.exports = router;