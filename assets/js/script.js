var tasks = {
    nine: [],
    ten: [],
    eleven: [],
    twelve: [],
    thirteen: [],
    fourteen: [],
    fifteen: [],
    sixteen: [],
    seventeen: []
};

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
// $(".description").on("click", function(event) {
//     var taskText = $(this).text().trim();

//     var taskInput = $("<textarea>").val(taskText);
//     $(this).replaceWith(taskInput);  

//     // console.log(this);

//     // GETS TIME FROM NEAREST TIME DOM
//     // var time = $(taskInput).closest(".row").find(".hour");
//     // time = parseInt(time[0].innerText.split(" ")[0]);
//     // console.log(time);    

//     taskInput.trigger("focus");
//     event.stopPropagation();
    
// });

$(".description").attr("contenteditable", "true");

function saveTasks() {
    console.log(this);

    // gets time from nearest time dom ele
    var time = $(this).closest(".row").find(".hour");
    time = parseInt(time[0].innerText.split(" ")[0]);
    
    if (time < 9) {
        time = time + 12;
    }
    
    // changes time into an integer
    time = parseInt(time);
    
    // declares task as user input or what already loaded on the page
    task = $(this).closest(".row").find(".description")[0].innerHTML;

    // checks time variable and saves task inappropriate array
    if (time == 9) {
        tasks.nine.push(task);
    } 
    else if (time === 10) {
        tasks.ten.push(ta==sk);
    }
    else if (time === 11) {
        tasks.eleven.push(task);
    }
    else if (time === 12) {
        tasks.twelve.push(task);
    }
    else if (time === 13) {
        tasks.thirteen.push(task);
    }
    else if (time === 14) {
        tasks.fourteen.push(task);
    }
    else if (time === 15) {
        tasks.fifteen.push(task);
    }
    else if (time === 16) {
        tasks.sixteen.push(task);
    }
    else if (time === 17) {
        tasks.seventeen.push(task);
    }
    
    localStorage.setItem("tasks", tasks);
};

function loadTasks() {
    
}

$(".saveBtn").on("click", saveTasks);



