const mongoose = require("mongoose")

// Kamal ->The name should be styleMaster
const stylePropMasterSchema = mongoose.Schema({
    clientID: {
        type: String
    },
    styleCode: {
        type: String
    },
 // Kamal ->The name should be attributeCode
    AttributeCode: {
        type: String
    },
 // Kamal ->The name should be in camel case
    AttributeGroupCode: {
        type: String
    },
  // Kamal ->The name should be in camel case
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

module.exports = mongoose.model("stylePropMaster", stylePropMasterSchema)
