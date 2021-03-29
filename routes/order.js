const express = require('express');
const route = express.Router();
const controller = require('../controllers/order');

route.get('/', controller.getAll);
route.post('/', controller.create);
module.exports = route;