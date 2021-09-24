const Task = require('../../db/models/user/index');

module.exports.getAllUsers = (req, res, next) => {
    Task.find().then(result => {
        res.send(result);
    })
};

module.exports.createNewUser = (req, res, next) => {
    const task = new Task(req.body);
    task.save().then(result => {
        res.send('User saved');
    });
};

module.exports.deleteUser = (req, res, next) => {
    const data = req.body;
    Task.findByIdAndDelete({_id: data.id}).then(result => res.send('User deleted'));
};

module.exports.changeUserInfo = (req, res, next) => {
    const data = req.body;
    Task.findByIdAndUpdate({_id: data.id}, data).then(result => res.send('Changed successfully'))
};