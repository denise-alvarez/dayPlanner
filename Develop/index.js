//Function to create and append time blocks

function createTimeblocks(hour, existingTodo = ""){
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" cols="30" rows="3" class="description col-9 present">${existingTodo}</textarea>
        <div class="btn saveBtn col-2">Save</div>
    </div>`));
}

createTimeblocks(9);