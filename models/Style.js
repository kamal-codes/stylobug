const mongoose = require("mongoose")

const styleSchema = mongoose.Schema({
    styleCode: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("style", styleSchema)