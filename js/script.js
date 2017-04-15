window.onload = function() {

    var lessons = document.querySelector('#lessons_front_page');
    var composition = document.querySelector('#composition_front_page');
    var calendar = document.querySelector('#calendar_front_page');
    var show = document.querySelector('#my_header');
    var menu = document.querySelector('#menu-button');
    var newLessons;
    var newComposition;
    var newCalendar;
    var menuContents = document.querySelector('#menu-contents');
    var spacing = document.querySelector('#navbar');
    var menuLessons = document.querySelector('#menu-Lessons');
    var menuComposition = document.querySelector('#menu-Composition');
    var menuCalendar = document.querySelector('#menu-Calendar');
    var copyright = document.getElementById('#copyright');

    var cal_month = document.getElementById("#cal_month");

    var dateCnstnt = new Date();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

    var calTable = document.getElementById("#calendarBody")
  
    
    var currentMonthLength = monthLength[dateCnstnt.getMonth()];
    var day = dateCnstnt.getDate();
    var dayOfWeek = dateCnstnt.getDay();
    var dayOfWeekCounter = dayOfWeek;
    var numberOfWeek;
    var activeCell;
    
    while (day > 0) {
          numberOfWeek = Math.floor(((day-1) + dayOfWeek)/ 7);
         
          activeCell = calTable.insertRow(numberOfWeek);
          var currentDayInFunc = activeCell.insertCell(dayOfWeek);
          currentDayInFunc.innerText = day;
          day--;
          dayOfWeekCounter--;
          if (dayOfWeekCounter < 0) {
            dayOfWeekCounter = 6;
          }
    }

 // second function that finishes the calendar by counting up from the current day

    // while (day <= currentMonthLength) {


    // for (var i=0; i >= monthLength[dateCnstnt.getMonth()]; i++) {
    //     for (var j=dateCnstnt.getDay)


    // };

    menu.onclick = function() {
      if (menuContents.style.display === 'none') {
          menuContents.style.display = 'block';
          spacing.style.margin = '5.4em 1em 0 1em';
      } else {
        menuContents.style.display = 'none';
        spacing.style.margin = '0em 1em';
      };
    };
    
    menu.addEventListener('click', e => console.log('why does it not open on first click?'));

    show.onclick = function() {
      document.querySelector('#main_page').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'none';
    };

    lessons.onclick = function() {
      document.querySelector('#main_page').style.display = 'none';
      document.querySelector('#lessons_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#composition_front_page2').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'none';
    };
    menuLessons.onclick = function(){
      document.querySelector('#main_page').style.display = 'none';
      document.querySelector('#lessons_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#composition_front_page2').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'none';
    };

    composition.onclick = function() {
      document.querySelector('#main_page').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'none';
    };
    menuComposition.onclick = function() {
      document.querySelector('#main_page').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';  
      document.querySelector('#calendar_front_page2').style.display = 'none';
    };

    calendar.onclick = function() {
      document.querySelector('#main_page').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'none';
    };
    menuCalendar.onclick = function() {
      document.querySelector('#main_page').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'none';
    };

}; //end of window.onload wrapper

    
