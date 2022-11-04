const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Owner'
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    image
})