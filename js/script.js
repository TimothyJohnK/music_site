window.onload = function() {

    var lessons = document.getElementsByClassName('lessons_front_page');
    var composition = document.getElementsByClassName('composition_front_page');
    var calendar = document.getElementsByClassName('calendar_front_page');
    var show = document.getElementsByClassName('my_header');
    var menu = document.getElementsByClassName('menu_button');
    var newLessons;
    var newComposition;
    var newCalendar;
    var menuContents = document.getElementsByClassName('menu_contents');
    var spacing = document.getElementsByClassName('navbar');
    var menuLessons = document.getElementsByClassName('menu_Lessons');
    var menuComposition = document.getElementsByClassName('menu_Composition');
    var menuCalendar = document.getElementsByClassName('menu_Calendar');
    var copyright = document.getElementsByClassName('copyright');

    var cal_month = document.getElementsByClassName('cal_month');

    // var body_width = window.innerWidth;
    // var days_of_week = document.getElementsByClassName('days_of_week');

    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var daysInMonths = [31, leap_year, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var date = new Date();
    var dayOfMonth = date.getDate();
    var dayOfWeek = date.getDay();
    var startOfMonthOffset = 0;
    var leap_year = 28;
    var calendarCell = document.getElementsByClassName('calendar_body');

    function calendarBuilder () {
        if (date.getMonth() === '1' && date.getFullYear()/ 4 === 0 ) {
          leap_year = 29;
        }

        while (dayOfMonth > 0){
            dayOfWeek--;
            dayOfMonth--;
            if (dayOfWeek < 0) {
              dayOfWeek = 6;
            };
        };
        
        startOfMonthOffset = dayOfWeek;
        var IdCounter = 1;

        for (var i = 0; i = startOfMonthOffset; i++) {
            var newSpan = document.createElement('span');
            var newContent = document.createTextNode(' ');
            newSpan.appendChild(newContent);
            var currentSpan = document.getElementsByClassName('span' + IdCounter.toString()); 
            document.getElementsByClassName('calendar_body').insertBefore(newSpan, currentSpan);
            IdCounter = i;
          };
        
        while (dayOfMonth <= daysInMonths[date.getMonth()]) {
          newSpan = document.createElement('span');
          newContent = document.createTextNode(dayOfMonth);
          newSpan.appendChild(newContent);
          currentSpan = document.getElementsByClassName('span' + IdCounter.toString()); 
          document.getElementsByClassName('calendar_body').insertBefore(newSpan, currentSpan);
          if (dayOfWeek + startOfMonthOffset > 6) {
          var newWeek = document.createElement('div');
          };
          if (dayOfWeek >= 7) {
            dayOfWeek = 0;
          };
          dayOfWeek ++;
          dayOfMonth ++;
          IdCounter ++;
        };

    };

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
      document.getElementsByClassName('main_page').style.display = 'block';
      document.getElementsByClassName('lessons_front_page2').style.display = 'none';
      document.getElementsByClassName('composition_front_page2').style.display = 'none';
      document.getElementsByClassName('calendar_front_page2').style.display = 'none';
    };

    lessons.onclick = function() {
      document.getElementsByClassName('main_page').style.display = 'none';
      document.getElementsByClassName('lessons_front_page2').style.display = 'block';
      document.getElementsByClassName('bottom_padding_container').style.display = 'block';
      document.getElementsByClassName('composition_front_page2').style.display = 'none';
      document.getElementsByClassName('calendar_front_page2').style.display = 'none';
    };
    menuLessons.onclick = function(){
      document.getElementsByClassName('main_page').style.display = 'none';
      document.getElementsByClassName('lessons_front_page2').style.display = 'block';
      document.getElementsByClassName('bottom_padding_container').style.display = 'block';
      document.getElementsByClassName('composition_front_page2').style.display = 'none';
      document.getElementsByClassName('calendar_front_page2').style.display = 'none';
    };

    composition.onclick = function() {
      document.getElementsByClassName('main_page').style.display = 'none';
      document.getElementsByClassName('composition_front_page2').style.display = 'block';
      document.getElementsByClassName('bottom_padding_container').style.display = 'block';
      document.getElementsByClassName('lessons_front_page2').style.display = 'none';
      document.getElementsByClassName('calendar_front_page2').style.display = 'none';
    };
    menuComposition.onclick = function() {
      document.getElementsByClassName('main_page').style.display = 'none';
      document.getElementsByClassName('composition_front_page2').style.display = 'block';
      document.getElementsByClassName('bottom_padding_container').style.display = 'block';
      document.getElementsByClassName('lessons_front_page2').style.display = 'none';  
      document.getElementsByClassName('calendar_front_page2').style.display = 'none';
    };

    calendar.onclick = function() {
      document.getElementsByClassName('main_page').style.display = 'none';
      document.getElementsByClassName('calendar_front_page2').style.display = 'block';
      document.getElementsByClassName('bottom_padding_container').style.display = 'block';
      document.getElementsByClassName('lessons_front_page2').style.display = 'none';
      document.getElementsByClassName('composition_front_page2').style.display = 'none';
      calendarBuilder();
    };
    menuCalendar.onclick = function() {
      document.getElementsByClassName('main_page').style.display = 'none';
      document.getElementsByClassName('calendar_front_page2').style.display = 'block';
      document.getElementsByClassName('bottom_padding_container').style.display = 'block';
      document.getElementsByClassName('lessons_front_page2').style.display = 'none';
      document.getElementsByClassName('composition_front_page2').style.display = 'none';
      calendarBuilder();
    };

}; //end of window.onload wrapper

    
