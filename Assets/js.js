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
        htmlCode += `<div class="row"><div class="time-block col">${i}</div>
        <textarea class="col" id="${i}" rows="2" cols="70"></textarea>
        <button class="saveBtn col">Save</button></div>`
    }
    $("#container").html(htmlCode);
}

timeblocks();