const express=require('express');
const router=express.Router();
console.log('router loaded');
const homeController= require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/createTodo', homeController.createTodo);
router.post('/deleteTodo', homeController.deleteTodo);

module.exports=router;



