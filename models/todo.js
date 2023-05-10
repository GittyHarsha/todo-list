const mongoose=require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    due_date: {
        type: Date
    }
});

const todo_list=mongoose.model('todo_list', todoSchema);
module.exports=todo_list;