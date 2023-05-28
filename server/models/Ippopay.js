const mongoose = require("mongoose");

const IppopaySchema = mongoose.Schema(
    {
        input: {
            type: Array,
            required: true,
        },
        output: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const ippopay = mongoose.model("Ippopay", IppopaySchema);

module.exports = ippopay;