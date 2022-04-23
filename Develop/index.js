//Display current day
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//variable for hrs used

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//Function to create and append time blocks

function createTimeblocks(hour, existingTodo = ""){
    var presentTime = new Date().getHours();
    var presentPastOrFuture = "future";
    if(presentTime > hour + 9) presentPastOrFuture = "past"
    if(presentTime === hour +9) presentPastOrFuture = "present"
        var hourName = hours[hour];
        var existingTodo = localStorage.getItem(hourName);
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hourName}</div>
        <textarea name="" id="${hourName}"cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo || ""}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`));
}
//For loop to create dayplanner time blacks

for(var i = 0; i< 9; i++){
    createTimeblocks(i);
}

//Button event listener

var buttons = document.querySelectorAll(".saveBtn");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", functionToSaveBtn);
}

function functionToSaveBtn(event) {

    var todoValue = event.target.parentNode.children[1].value;
    var todoKey = event.target.parentNode.children[1].id;

    localStorage.setItem(todoKey, todoValue);
}