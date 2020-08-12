const CitiesCtl = require('../controllers/city.controller');

module.exports = function (app) {
  app.get('/api', CitiesCtl.index);
  app.post('/api/cities', CitiesCtl.createCity);
  app.get('/api/cities', CitiesCtl.getAll);
  app.get('/api/cities/:id', CitiesCtl.getOne);
  app.delete('/api/cities/:id', CitiesCtl.delete);
  app.put('/api/cities/:id', CitiesCtl.update);
};
