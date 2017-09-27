var existingData = [{
    "name": "Test Task #1",
    "date": "12/01/2012",
    "assigned": "John Doe"
}, {
    "name": "Test Task #2",
    "date": "12/02/2012",
    "assigned": "John Doe"
}, {
    "name": "Test Task #3",
    "date": "12/03/2012",
    "assigned": "John Doe"
}, {
    "name": "Test Task #4",
    "date": "12/04/2012",
    "assigned": "John Doe"
}, {
    "name": "Test Task #5",
    "date": "12/05/2012",
    "assigned": "John Doe"
}, {
    "name": "Test Task #6",
    "date": "12/06/2012",
    "assigned": "John Doe"
}, {
    "name": "Test Task #7",
    "date": "12/07/2012",
    "assigned": "John Doe"
}];

function populateData(existingData) {
    existingData.forEach(function (data) {
        var taskItem = "<div class='task-item'><h4 class='task-name'>" + data.name + "</h4><h4 class='task-date'>" + data.date + "</h4><h4 class='task-assigned'>" + data.assigned + "</h4></div>";
        $(".task-container").prepend(taskItem);
    });
};

function createNewTask() {
    var taskName = $(".js-name").val();
    var taskDate = $(".js-date").val();
    var taskAssigned = $(".js-assigned").val();

    if(taskName == '' || taskDate == '' || taskAssigned == ''){
        alert('please enter the form fields');
        return;
    }else {
        var taskItem = "<div class='task-item'><h4 class='task-name'>" + taskName + "</h4><h4 class='task-date'>" + taskDate + "</h4><h4 class='task-assigned'>" + taskAssigned + "</h4></div>";
        $(".task-container").prepend(taskItem);
    }
    
};

$(document).ready(function () {

    populateData(existingData);

    $("#user-form").on('submit', function (event) {
        event.preventDefault();
        createNewTask();
    });

});