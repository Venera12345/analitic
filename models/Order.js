const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    order: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    list: [
        {
            name: String,
            cost: Number,
            quantity: Number
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('orders', orderSchema)