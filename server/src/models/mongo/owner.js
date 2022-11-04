const mongoose = require('mongoose')
const validator = require('validator')

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [5, 'Name is too short'],
        max: 20
    },
    password: {
        type: String,
        required: true,
        min: [8, 'Password too short']
    },
    email: {
        type:email,
        validate: {
            validator: v => validator.isEmail(v),
            message: props => `${props} is not a valid email`
        }
    },
    phone: {
        type: Number
    }
})

module.exports = mongoose.model('Owner', ownerSchema)