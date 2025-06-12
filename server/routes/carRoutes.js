const express = require('express');
const { getCars , readCar, addCars, updateCar, deleteCar} = require('../controllers/carController');
const router = express.Router();

router.get('/cars', getCars);
router.get('/cars/:id', readCar); // optional, if you want to get a specific car by ID

router.post('/cars', addCars);

router.put('/cars/:id', updateCar);

router.delete('/cars/:id', deleteCar);

// optional
// router.post('/cars', addCar);

module.exports = router;
