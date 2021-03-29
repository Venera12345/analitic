const errorHandler = require('../utilits/errorHandler')
const Position = require('../models/Positions')
module.exports.getById = async function (req, res) {
    try{
     const position = await Position.find({
         category: req.params.categoryId,
         user: req.user.id
     })
        res.status(200).json(position)
    }
    catch (e) {
        errorHandler(res, e)
    }
}
module.exports.delete = async function (req, res) {
    try{
     await Position.remove({_id: req.params.id})
        res.status(200).json({message:'Позиция удалена'})
    }
    catch (e) {
        errorHandler(res, e)
    }
}
module.exports.update = async function (req, res) {
    try{
    const position = await Position.findOneAndUpdate(
        {_id: req.params.id},
        {$set: req.body},
        {new: true})
        res.status(200).json(position)
    }
    catch (e) {
        errorHandler(res, e)
    }
}
module.exports.create = async function (req, res) {
    try{
      const position = await new Position({
          cost: req.body.cost,
          name: req.body.name,
          category: req.body.category,
          user: req.user.id
      }).save()
        res.status(201).json(position)
    }
    catch (e) {
        errorHandler(res, e)
    }
}