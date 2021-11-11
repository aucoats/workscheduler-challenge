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
$(".description").on("click", function(event) {
    var taskText = $(this).text().trim();

    var taskInput = $("<textarea>").val(taskText);
    $(this).replaceWith(taskInput);  

    // console.log(this);

    // GETS TIME FROM NEAREST TIME DOM
    // var time = $(taskInput).closest(".row").find(".hour");
    // time = parseInt(time[0].innerText.split(" ")[0]);
    // console.log(time);    

    taskInput.trigger("focus");
    event.stopPropagation();
    
});

// $(".description").on("blur", "textarea", function(event) {
//     $("textarea").trigger("blur");
//     console.log(event);
//     // var taskText = $(this).text().trim();
//     // console.log(taskText);

//     // var newTaskDiv = $("<div>").addClass("description col-8").val(taskText);
//     // console.log(newTaskDiv);
//     // $("textarea").replaceWith(newTaskDiv);



    
// });

function saveTasks() {
    console.log(this);

    // gets time from nearest time dom ele
    var time = $(this).closest(".row").find(".hour");
    time = parseInt(time[0].innerText.split(" ")[0]);
    console.log(time);
    
    task = $(this).closest(".row").find("textarea")[0].innerHTML;
    console.log(task);

    task = taskDiv.innerHTML;
}

$(".saveBtn").on("click", saveTasks);



