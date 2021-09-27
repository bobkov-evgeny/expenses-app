const mongoose = require('mongoose');

// СОЗДАЕМ СХЕМУ
const {Schema} = mongoose;
const expenseScheme = new Schema({
    id: String,
    storeName: {type: String, unique: false},
    date: String,
    amount: Number
});

module.exports = Expense = mongoose.model("expenses", expenseScheme);
//