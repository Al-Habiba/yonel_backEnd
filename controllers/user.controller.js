const userService=require('../services/user.service')
const express=require('express');
const auth=require("../middleware/auth");
const routes=express.Router();

    routes.post('/register',userService.register)
    routes.post('/login',userService.login)

    module.exports=routes;