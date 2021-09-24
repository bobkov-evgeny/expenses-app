const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    createNewUser,
    changeUserInfo,
    deleteUser
} = require('../controllers/user.controller');

router.get('/allUsers', getAllUsers);
router.post('/createUser', createNewUser);
router.patch('/updateUserInfo', changeUserInfo);
router.delete('/deleteUser', deleteUser);

module.exports = router;