
//Adding Date
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var date = (today.getMonth()+1)+ '/' + today.getDate() + '/' + today.getFullYear();
    var dateTime = daylist[day] + " " + date;

    document.getElementById("currentDay").innerHTML = dateTime


//Current hour for Timeblocks If statement
var currentHour = moment().hours()
var input = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"];

// Adding Time Blocks
var timeblocks = function () {
    var htmlCode = ""

    //for loop to allow dynamic hours
    for (var i = 9; i < 18; i++ ) {

        // saving to local storage
        var getLocalStorage = localStorage.getItem(i) || "";

        // Checking current time for color variances
        var timeCheck = "";
        if (i<currentHour) {
            timeCheck = "past"
        } else if (i === currentHour) {
            timeCheck = "present"
        } else {
            timeCheck = "future"
        }

        //Text area for hours
        htmlCode += `<div class="row"><div class="time-block col-md-2">${i}</div>
        <textarea class="col-md-8 ${timeCheck}" id="${i}" rows="2" cols="70">${getLocalStorage}</textarea>
        <button class="saveBtn col-md-2">Save</button></div>`
    }
    $("#container").html(htmlCode);
}

timeblocks();

//Save Button & Local Storage

//Save button
$("#container").on("click", ".saveBtn", function(){
    var content = $(this).siblings("textarea").val();
    var timeBlock = $(this).siblings("textarea").attr("id");
    console.log(content, timeBlock);

    //Sending to Local Storage
    localStorage.setItem(timeBlock, content);
})