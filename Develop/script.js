// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  console.log('TEST')
});


//ADD CURRENT DATE
// var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
// var d = document.getElementById('currentDay');
// dateShown.innerHTML = currentTime;
var currentTime = document.getElementById('currentDay');

setInterval(() => {
  var now = dayjs().format('hh:mmA');

}, 1000);


$('.saveBtn').click(function(event){
  event.preventDefault();
  var value = $(this).siblings('.time-block').val();
  var time = $(this).parent().attr('id').split('-')[1];
  localStorage.setItem(time,value);
});

$('time-block').each(function () {
  var timeBlock = $(this).attr('id').split('-') [1];

  if (currentHour == timeBlock) {
  $(this).addClass('present');
  $(this).children('.description').addClass('present');  
 } else if (currentHour < timeBlock) {
  $(this).removeClass('present');
  $(this).addClass('future');
 } else if (currentHour > timeBlock) {
  $(this).removeClass('future');
  $(this).addClass('past');
 }

});

$('#hour-9 .time-block').val(localStorage.getItem('9'));
$('#hour-10 .time-block').val(localStorage.getItem('10'));
$('#hour-11 .time-block').val(localStorage.getItem('11'));
$('#hour-12 .time-block').val(localStorage.getItem('12'));
$('#hour-1 .time-block').val(localStorage.getItem('1'));
$('#hour-2 .time-block').val(localStorage.getItem('2'));
$('#hour-3 .time-block').val(localStorage.getItem('3'));
$('#hour-4 .time-block').val(localStorage.getItem('4'));
$('#hour-5 .time-block').val(localStorage.getItem('5'));


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

