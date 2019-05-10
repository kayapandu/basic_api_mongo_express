var Cars = require('./carsModel');

exports.index = function (req, res) {
    Cars.get(function (err, cars){
        if(err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Cars retrieved successfully",
            data: cars
        });
    });
};

//add cars
exports.new = function (req, res) {
    var cars = new Cars();
    cars.userId = req.body.userId;
    cars.brand  = req.body.brand;
    cars.name   = req.body.name;

    cars.save(function (err) {
        if(err) {
            res.json(err)
        }
        res.json({
            message: 'New cars added!',
            data: cars
        });
    });
}