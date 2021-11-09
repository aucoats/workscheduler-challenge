var divEl = document.querySelector(".container");
var currentDay = document.querySelector("#currentDay");

currentDay.textContent = moment().format("dddd, MMMM Do")
