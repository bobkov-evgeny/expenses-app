    const express = require('express');
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const app = express();

    const expensesRouter = require('./src/modules/routes/expenses.router')

    // Подключаемся к Базе данных
    const uri = "mongodb+srv://Bobkov:Nhk09327rus!@cluster0.yxkny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    //

    app.use(cors());
    app.use(bodyParser.json())
    app.use("/expenses", expensesRouter)
    app.listen(9000, () => {
        console.log('Server started');
    })