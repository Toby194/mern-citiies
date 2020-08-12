const City = require('../models/City.models');

module.exports.index = (req, res) => {
  res.json({
    message: 'Welcome to the city.'
  });
};

module.exports.createCity = (req, res) => {
  City.create(req.body)
    .then(createdCity => res.json(createdCity))
    .catch(err => res.json(err));
};

module.exports.getAll = (req, res) => {
  City.find()
    .then(cities => res.json(cities))
    .catch(err => res.json(err));
};

module.exports.getOne = (req, res) => {
  City.findById(req.params.id)
    .then(city => res.json(city))
    .catch(err => res.json(err));
};

module.exports.update = (req, res) => {
  // destructuring and instantiating
  const { name, population, imageUrl, nice } = req.body;
  City.findByIdAndUpdate(
    req.params.id,
    {
      name,
      population,
      imageUrl,
      nice
    },
    {
      new: true,
      runValidators: true
    }
  )
    .then(updatedCity => res.json(updatedCity))
    .catch(err => res.status(400).json(err));
};

module.exports.delete = (req, res) => {
  City.findByIdAndDelete(req.params.id)
    .then(() => res.json({ status: 'success' }))
    .catch(err => res.json(err));
};
