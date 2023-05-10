
const todo_list=require("../models/todo");



module.exports.home=function(req, res) {
    const query=todo_list.find();
    const promise=query.exec();
    promise.then(

        function(list){

            return res.render('home', 
            {
                todo_list: list
            }
            );
        });
};

module.exports.createTodo=function(req, res) {
    console.log(req.body.due_date, req.body.category);
    const promise=todo_list.create(
        {
            description: req.body.description,
            category: req.body.category,
            due_date: req.body.due_date
        }
    );
    promise.then(
        function(obj) {
            console.log(obj);
            res.redirect('back');
        }
    ).catch(function(err) {
        console.log(err);
    });

};

module.exports.deleteTodo=function(req, res) {
let ids=req.body.ids;

console.log(ids);
if(typeof(ids)=="string") {
let query=todo_list.findByIdAndDelete(ids);
query.exec().then(function(deletedTodo) {
    console.log(deletedTodo);
}).catch(function(err) {
    console.log("error deleting");
});
}
else {
    for(let id of ids) {
        let query=todo_list.findByIdAndDelete(id);
        query.exec().then(function(deletedTodo) {
            console.log(deletedTodo);
        }).catch(function(err) {
            console.log("error deleting");
        });
     
    }
}


return res.redirect('back');

};