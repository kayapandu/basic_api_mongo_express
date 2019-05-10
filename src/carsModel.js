var mongoose = require('mongoose');

//Setup schema
var carsSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

var Cars = module.exports = mongoose.model('cars', carsSchema);

module.exports.get = function (callback, limit) {
    Cars.find(callback).limit(limit);
}