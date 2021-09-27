const Expense = require('../../db/models/expense/index');

module.exports.getAllExpenses = (req, res) => {
    Expense.find().then(result => {
        res.send(result);
    })
};

module.exports.createNewExpense = (req, res) => {
    const expense = new Expense(req.body);
    expense.save().then(result => res.send('Saved successfully')).catch(e => res.send(e));
};

module.exports.deleteExpense = (req, res) => {
    const data = req.body;
    Expense.findByIdAndDelete({_id: data.id})
        .then(result => res.send('Deleted successfully'))
        .catch(e => res.send(e));;
};

module.exports.changeExpense = (req, res) => {
        const data = req.body;
        console.log(data);
        Expense.findOneAndReplace({_id: data.id}, data).then(response => res.send(!!response))
            .catch(err => res.send(err));

};