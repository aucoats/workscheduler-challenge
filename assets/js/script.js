var tasks = {};

var divEl = document.querySelector(".container");
var taskDiv = document.querySelector(".description");
var currentDay = document.querySelector("#currentDay");

// adds date in the header el with currentDay ID
currentDay.textContent = moment().format("dddd, MMMM Do");

// changes styles of time-blocks relative to time of day
for (i = 0; i < $(".hour").length; i++) {
    var time = $(".hour")[i].innerHTML; 
    var formatTime = time.split(" "); 
    formatTime = parseInt(formatTime);
    
    var now = moment().format("h");
    now = parseInt(now);

    if (now < 9) {
        now = now + 12;
    }
    
    
    if (formatTime < 9) {
        formatTime = formatTime + 12;
    }   

    if (formatTime > now) {
        var toBe = $(".hour").next(".time-block")[i];
        $(toBe).addClass("future");
    }
    else if (formatTime < now) {
        var toBe = $(".hour").next(".time-block")[i];
        $(toBe).addClass("past"); 
    } else {
        var toBe = $(".hour").next(".time-block")[i];
        $(toBe).addClass("present");
    }
}

// if (parseInt($(".hour").textContent) )

// edit tasks
$(".description").on("click", function() {
    var taskText = $(this).text().trim();

    var taskInput = $("<input>").addClass("description col-8").val(taskText);
    $(this).replaceWith(taskInput);  

    var time = $(taskInput).find("")
    taskInput.trigger("focus");
});

// $(".description").on("blur", function() {
//     var taskText = $(this).text().trim();

//     var taskDiv = $("<div>").addClass("description").val(taskText);
//     $(this).replaceWith(taskDiv);
// });

