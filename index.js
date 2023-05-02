const express=require("express");

const app=express();
const port=8000;

app.listen(port, function(err) {
if(err) {
    console.log(`error message: ${err}`);
}
else {
    console.log("app is running and listening to \
    port number 8000");
}
});