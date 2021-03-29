const express = require('express');
const route = express.Router();
const controller = require('../controllers/position');

route.get('/:categoryId', controller.getById);
route.post('/', controller.create);
route.patch('/:id', controller.update);
route.delete('/:id', controller.delete);
module.exports = route;