//filename : api-routes.js
//Initialize express router
let router = require('express').Router();

//default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API its working',
        message: 'Welcome to Resthub dumbass API'
    });
});

var contactController = require('./src/contactController');
var carsController = require('./src/carsController');

//Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/cars')
    .get(carsController.index)
    .post(carsController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete)

module.exports = router;