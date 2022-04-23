//Function to create and append time blocks

function createTimeblocks(hour, existingTodo = ""){
    var presentTime = new Date().getHours();
    var presentPastOrFuture = "future";
    if(presentTime > hour) presentPastOrFuture = "past"
    if(presentTime === hour) presentPastOrFuture = "present"
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo}</textarea>
        <div class="btn saveBtn col-2">Save</div>
    </div>`));
}
//For loop to create dayplanner time blacks

for(var i = 9; i<18; i++){
    createTimeblocks(i);
}