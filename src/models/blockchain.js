const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            unique: true,
            required: true
        },
        name: {
            type: String,
            unique: true,
            required: true
        },
        marketCapUsd: {
            type: String,
            required: true
        },
        priceUsd: {
            type: String,
            required: true
        }

    },

    { timestamps: true }
);

module.exports = mongoose.model("Coin", authorSchema);