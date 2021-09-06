const mongoose = require("mongoose")

const skuMasterSchema = mongoose.Schema({
    clientID: {
        type: String
    },
    sku: {
        type: String,
        // required: true
    },
    sizeCode: {
        type: String,
    },
// Kamal ->Consistent naming. It should be barCode.
    BarCode: {
        type: String,
    },
    styleCode: {
        type: String,
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

module.exports = mongoose.model("skuMaster", skuMasterSchema)
