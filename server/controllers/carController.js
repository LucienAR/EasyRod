const Car = require('../models/Car');

// sucessfully fetch all cars
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find({}).exec();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
};

// sucessfully fetch a specific car by ID
exports.readCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).exec();
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch car' });
  }
};

//successfully add a new car
exports.addCars = async (req, res) => {
  try {
    console.log(req.body);
    const newCar = new Car(req.body);
    const saved = await newCar.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: 'Failed to save car' });
  }
};

//successfully update an existing car
exports.updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).exec();
    if (!updatedCar) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(updatedCar);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update car' });
  }
};

//
exports.deleteCar = async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id).exec();
    if (!deletedCar) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete car' });
  }
};

