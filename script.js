$(document).ready(function() {
    

    //Display the current day at the top of the calender when a user opens the planner.

// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page
// all code goes here:




$('.saveBtn').on('click', function() {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')
    localStorage.setItem(time, value)
});
//com eacg row to rea; time/use dayjs - vanilla function with jquiry in it.fucntion that compares each row to realtime.method to make  my sting an integer / split method.
function updateHour(){
    var currentHour =dayjs().hour()
    console.log(currentHour)
// identify my parent line apply a for lopp to it.jquery style. 
$('.time-block').each(function(){
    var blockHour =parseInt($(this).attr('id').split('_')[1])

})
}
updateHour();
//apply a timer to the function 
// how often we want it to run. timer thatcontinuout - keeps on running. 

// grab from local store each line -- each code line to display


// usuing dayJS - display todays date

currentDate = dayjs(); var formattedDate = currentDate. format('DD-MM-YYYY');
$("#currentDay").text(formattedDate);


});


// can use lesson 1  to use the for loop to change the clours of the input feild -past present future etc

