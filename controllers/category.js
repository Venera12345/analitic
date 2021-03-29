const errorHandler = require('../utilits/errorHandler')
const Categories = require('../models/Category')
const Position = require('../models/Positions')
module.exports.getAll = async function (req, res) {
    try {
        const categories = await Categories.find({user: req.user.id})
        res.status(200).json(categories)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getById = async function (req, res) {
    try {
        const category = await Categories.findById(req.params.id)
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.delete = async function (req, res) {
    try {
        await Categories.remove({_id: req.params.id})
        await Position.remove({category: req.params.id})
        res.status(200).json({message: 'Категория удалена'})
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.update = async function (req, res) {
    try {

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.create = async function (req, res) {
    console.log(req.user)
    try {

        // const category = await new Categories({
        //     name: req.body.name,
        //     user: req.user.id,
        //   //  imageSrc: req.file ? req.file.path : ''
        // }).save()
        // res.status(200).json(category)
        res.status(201)
    } catch (e) {
        errorHandler(res, e)
    }
}