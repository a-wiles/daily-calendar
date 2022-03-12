// Data Variances

// Main Coding


//Adding Date
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var date = (today.getMonth()+1)+ '/' + today.getDate() + '/' + today.getFullYear();
    var dateTime = daylist[day] + " " + date;

    document.getElementById("currentDay").innerHTML = dateTime


//Event Listeners
var timeblocks = function () {
    var htmlCode = ""
    for (var i = 9; i < 18; i++ ) {
        var getLocalStorage = localStorage.getItem(i) || "";
        htmlCode += `<div class="row"><div class="time-block col-md-2">${i}</div>
        <textarea class="col-md-8" id="${i}" rows="2" cols="70">${getLocalStorage}</textarea>
        <button class="saveBtn col-md-2">Save</button></div>`
    }
    $("#container").html(htmlCode);
}

timeblocks();

$("#container").on("click", ".saveBtn", function(){
    console.log("Does-this-work");
    var content = $(this).siblings("textarea").val();
    var timeBlock = $(this).siblings("textarea").attr("id");
    console.log(content, timeBlock);
    localStorage.setItem(timeBlock, content);
})

// var user="Alex Wiles"
// var greeting = "Welcome "+user+"!"
// console.log("Welcome ",user,"!")
// console.log(greeting)
// console.log(`Welcome ${user} !`)