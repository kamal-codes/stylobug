const mongoose = require("mongoose")

const styleMasterSchema = mongoose.Schema({
    clientID: {
        type: String
    },
    styleCode: {
        type: String
    },
    AttributeCode: {
        type: String
    },
    AttributeGroupCode: {
        type: String
    },
    Status: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("sizeMaster", styleMasterSchema)