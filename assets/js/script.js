var currentDate = moment().format('dddd, MMMM Do');
var saveButtons = $('.saveBtn');
var userInput = $('.user-input');

$("#currentDay").text(currentDate);

function checkHourStatus() {
    $(".time-block").each(function(){
        // console.log($(this))
        var timeBlockHour = +$(this).attr("id")
        console.log(timeBlockHour);
        var timeBlockMoment = moment(timeBlockHour,"H");
        var formattedTimeBlock = timeBlockMoment.format("ha");
        console.log(formattedTimeBlock);
        
        var currentTime = moment().hour();
        
        console.log("time block hour " + typeof timeBlockHour);
        console.log("current time " + typeof currentTime);

// if time is before current time then apply .past class 
    if (timeBlockHour < currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past'); 
    }
// if time is equal to current time then apply .present class 
    else if (timeBlockHour === currentTime) {
        console.log("currentTime");
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
    }

// apply .future class 
    else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
    }

    })
}
checkHourStatus();


// click handler for saves
// get current input
// call a save data function
// Get name of the element

// saveButtons.on("click" , clickHandler);
// // console.log(clickHandler);

// function clickHandler(event) {
//     // event.target.value
//     console.log(event.target); 
//     console.log($(this).siblings('.user-input').val());
//     console.log(userInput);
//     console.log($(this).siblings('.time-block'));
//     console.log($(this).parent().attr("id"));
//     var keyArea = $(this).parent().attr("id");
//     var varArea = $(this).siblings('.user-input').val()
//     saveData(keyArea, varArea);
// }

// // save data function
// // save it to local storage
// function saveData() {
//     localStorage.setItem(key, var);
// }

// saveButtons.addEventListener("click", function() {
//     localStorage.setItem("text" , "name");
// })
