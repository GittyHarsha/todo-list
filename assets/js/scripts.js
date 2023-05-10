
// gives gackground color to the category tags
let categories = document.getElementsByClassName('category');
for (let category of categories) {

  let cat = category.innerHTML.trim();
  if (cat === "personal") {
    category.style.backgroundColor = "lightgreen";
  }
  if (cat === "work") {
    category.style.backgroundColor = "lightyellow";
  }
  if (cat === "school") {
    category.style.backgroundColor = "lightpink";
  }
  if (cat === "health") {
    category.style.backgroundColor = "lightred";
  }
  if (cat === "other") {
    category.style.backgroundColor = "lightgrey";
  }

}


var currentDate = new Date();

//function to compare two dates
function date_compare(date1, date2)
{
    //returns 1 if date1<=date2
    // else returns 0
    if(date1.getYear() < date2.getYear()) return 1;
    else if(date1.getYear()==date2.getYear()) {
        if(date1.getMonth() < date2.getMonth()) return 1;
        else if(date1.getMonth()==date2.getMonth()) {
            if(date1.getDay() < date2.getDay()) return 1;
            else return 0;
        }
        else return 0;
    }
    else return 0;
}

let dates=document.getElementsByClassName("due_date");
//this code section assigns red if the task is not completed within due date
//and assigns green for tasks to be completed within due date
for(date of dates) {


    //custom attribute data-time is used so that the date can be used in this js file
    d= new Date(date.getAttribute('data-time'));
    var check=date_compare(d, currentDate);
    if(check){
        date.style.color="red";
    }
    else {
        date.style.color="green";
    }

}