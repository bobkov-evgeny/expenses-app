const Expense = require("../../db/models/expense/index");

module.exports.getAllExpenses = (req, res) => {
	Expense.find().then((result) => {
		res.send(result);
	});
};

module.exports.createNewExpense = (req, res) => {
	const expense = new Expense(req.body);
	expense.save().then((result) => {
		if (result) {
			res.send("Saved successfully");
		} else {
			res.status(404).json({
				message: "Что-то пошло не так. Попробуйте снова. (сохранение заметки)",
			});
		}
	});
};

module.exports.deleteExpense = (req, res) => {
	const id = req.body.id;

	Expense.findByIdAndDelete({ _id: id })
		.then((result) => res.send("Deleted successfully"))
		.catch((e) => res.send(e));
};

module.exports.changeExpense = (req, res) => {
	const id = req.body.id;
	const changes = req.body;

	Expense.findOneAndUpdate({ _id: id }, changes).then((expense) => {
		if (expense) {
			res.status(200).json(expense);
		} else {
			res.status(404).json({
				message:
					"Запись не найдена. Возможно, она была удалена. Обновите страницу",
			});
		}
	});
};
