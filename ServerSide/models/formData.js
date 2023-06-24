const mongoose = require('mongoose');

const summitSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type:String,
    },
    message: {
        type: String,
    }
});

const summitmodel = mongoose.model("formData", summitSchema);
module.exports = summitmodel;