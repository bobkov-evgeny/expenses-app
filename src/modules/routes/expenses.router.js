const express = require('express');
const router = express.Router();

const {
    getAllExpenses,
    createNewExpense,
    changeExpense,
    deleteExpense
} = require('../controllers/expense.controller');

router.get('/', getAllExpenses);
router.post('/', createNewExpense);
router.patch('/', changeExpense);
router.delete('/', deleteExpense);

module.exports = router;