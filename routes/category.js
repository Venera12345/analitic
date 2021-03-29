const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const route = express.Router()
const controller = require('../controllers/category')

route.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
route.get('/:id', controller.getById);
route.delete('/:id', controller.delete);
route.post('/', upload.single('image'), controller.create);
route.patch('/:id', upload.single('image'), controller.update);
module.exports = route;