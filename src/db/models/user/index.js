const mongoose = require('mongoose');

// СОЗДАЕМ СХЕМУ
const {Schema} = mongoose;
const userScheme = new Schema ({
    id: String,
    storeName: String,
    date: String,
    amount: String
});

module.exports = Task = mongoose.model("users", userScheme);
//