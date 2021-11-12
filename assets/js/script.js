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



function saveTasks() {
    // declares tasks array and saves current text as task.hour value
    var tasks = {
        nine: [$("#nine").closest(".row").find(".description")[0].innerHTML],
        ten: [$("#ten").closest(".row").find(".description")[0].innerHTML],
        eleven: [$("#eleven").closest(".row").find(".description")[0].innerHTML],
        twelve: [$("#twelve").closest(".row").find(".description")[0].innerHTML],
        thirteen: [$("#thirteen").closest(".row").find(".description")[0].innerHTML],
        fourteen: [$("#fourteen").closest(".row").find(".description")[0].innerHTML],
        fifteen: [$("#fifteen").closest(".row").find(".description")[0].innerHTML],
        sixteen: [$("#sixteen").closest(".row").find(".description")[0].innerHTML],
        seventeen: [$("#seventeen").closest(".row").find(".description")[0].innerHTML]
    };
    // gets time from nearest time dom ele of change/click event
    var time = $(this).closest(".row").find(".hour");
    time = parseInt(time[0].innerText.split(" ")[0]);
    
    if (time < 9) {
        time = time + 12;
    }
    
    // parses time into an integer
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
    
    // declares new array for tasks if localStorage tasks is empty
    if (!pastTasks) { 
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

        $("#nine").text("Enter text here!");

    } else if (pastTasks) {
        // sets new tasks array for saving if localStorage retrieval was successful
        tasks = pastTasks;
       
        // populates text content using new tasks array
        $("#nine").text(tasks.nine);
        $("#ten").text(tasks.ten);
        $("#eleven").text(tasks.eleven);
        $("#twelve").text(tasks.twelve);
        $("#thirteen").text(tasks.thirteen);
        $("#fourteen").text(tasks.fourteen);
        $("#fiteen").text(tasks.fifteen);
        $("#sixteen").text(tasks.sixteen);
        $("#seventeen").text(tasks.seventeen); 
    }
        
};

loadTasks();
$(".description").attr("contenteditable", "true").on("DOMSubtreeModified", saveTasks);
$(".saveBtn").on("click", saveTasks);

