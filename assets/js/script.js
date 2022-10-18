
var currentDate = moment().format('dddd, MMMM Do');
var saveButtons = $('.saveBtn');

$("#currentDay").text(currentDate);

function checkHourStatus() {
    $(".time-block").each(function(){
        // console.log($(this))
        var timeBlockHour = +$(this).attr("id")
        console.log(timeBlockHour);
        var timeBlockMoment = moment(timeBlockHour,"H");
        var formattedTimeBlock = timeBlockMoment.format("ha");
        console.log(formattedTimeBlock);
        
        var currentTime = moment().hour()-4;
        
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
// // if time is at current time then apply .present class 
//     } else if (moment().isSame(timeBlockMoment)) {
//         document.getElementById("#9").classList.add('.present') 

// // if time is after current time then apply .future class 
//     } else (moment().isAfter(timeBlockMoment)) {
//         document.getElementById("#9").classList.add('.future') 
//     }

    })
}
checkHourStatus();


// click handler for saves
// get current input
// call a save data function
// Get name of the element

saveButton.on("click" , clickHandler);

function clickHandler(event) {
    event.target.value
    
}

//save data function
//save it to local storage
function saveData() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
}
