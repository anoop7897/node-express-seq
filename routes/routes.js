const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController');

route.get('/',userController.index);
route.get('/signup',userController.signup_get);
route.post('/signup',userController.signup_post);
route.get('/user/:id',userController.get_user);
route.get('/users',userController.getAllUsers);
route.put('/user/:id',userController.update);
route.delete('/user/:id',userController.deleteUser);
module.exports = route;