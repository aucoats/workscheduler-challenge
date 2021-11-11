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

$(".description").attr("contenteditable", "true");

function saveTasks() {
    
    // gets time from nearest time dom ele
    var time = $(this).closest(".row").find(".hour");
    time = parseInt(time[0].innerText.split(" ")[0]);
    
    if (time < 9) {
        time = time + 12;
    }
    
    // changes time into an integer
    time = parseInt(time);
    
    // declares task as user input or what already loaded on the page
    // in closest description block
    task = $(this).closest(".row").find(".description")[0].innerHTML;

    // checks time variable and saves task in appropriate array
    if (time === 9) {
        tasks.nine.splice(0, 1, task);
    } 
    else if (time === 10) {
        tasks.ten.splice(0, 1, task);
    }
    else if (time === 11) {
        tasks.eleven.splice(0, 1, task);
    }
    else if (time === 12) {
        tasks.twelve.splice(0, 1, task);
    }
    else if (time === 13) {
        tasks.thirteen.splice(0, 1, task);
    }
    else if (time === 14) {
        tasks.fourteen.splice(0, 1, task);
    }
    else if (time === 15) {
        tasks.fifteen.splice(0, 1, task);
    }
    else if (time === 16) {
        tasks.sixteen.splice(0, 1, task);
    }
    else if (time === 17) {
        tasks.seventeen.splice(0, 1, task);
    }
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function loadTasks() {
    var pastTasks = JSON.parse(localStorage.getItem("tasks"));

    
    tasks.nine.push(pastTasks.nine);
    tasks.ten.push(pastTasks.ten);
    tasks.eleven.push(pastTasks.eleven);
    tasks.twelve.push(pastTasks.twelve);
    tasks.thirteen.push(pastTasks.thirteen);
    tasks.fourteen.push(pastTasks.fourteen);
    tasks.fifteen.push(pastTasks.fifteen);
    tasks.sixteen.push(pastTasks.sixteen);
    tasks.seventeen.push(pastTasks.seventeen);

    
    
    if (!tasks.nine) {
        $("#nine").text("Enter a task!");
    }
    if (!tasks.ten) {
        $("#ten").text("Enter a task!");
    }
    if (!tasks.eleven) {
        $("#eleven").text("Enter a task!");
    }
    if (!tasks.twelve) {
        $("#twelve").text("Enter a task!");
    }
    if (!tasks.thirteen) {
        $("#thirteen").text("Enter a task!");
    }
    if (!tasks.fourteen) {
        $("#fourteen").text("Enter a task!");
    }
    if (!tasks.fifteen) {
        $("#fifteen").text("Enter a task!");
    }
    if (!tasks.sixteen) {
        $("#sixteen").text("Enter a task!");
    }
    if (!tasks.seventeen) {
        $("#seventeen").text("Enter a task!");
    }
    
    $("#nine").text(tasks.nine);
    $("#ten").text(tasks.ten);
    $("#eleven").text(tasks.eleven);
    $("#twelve").text(tasks.twelve);
    $("#thirteen").text(tasks.thirteen);
    $("#fourteen").text(tasks.fourteen);
    $("#fiteen").text(tasks.fiteen);
    $("#sixteen").text(tasks.sixteen);
    $("#seventeen").text(tasks.seventeen); 
};

loadTasks();
$(".saveBtn").on("click", saveTasks);

