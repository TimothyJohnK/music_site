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
    var menuCalendar = document.querySelector('#menu-Calendar')


    menu.onclick = function() {
      if (menuContents.style.display === 'none') {
          menuContents.style.display = 'block';
          spacing.style.margin = '5.4em 1em 0 1em';
      } else {
        menuContents.style.display = 'none';
        spacing.style.margin = '0em 1em';
      };
    };
    

    show.onclick = function() {
      document.querySelector('#body-wrapperID').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'none';
    };

    lessons.onclick = function() {
      document.querySelector('#body-wrapperID').style.display = 'none';
      document.querySelector('#lessons_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#composition_front_page2').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'none';
    };
    menuLessons.onclick = function(){
      document.querySelector('#body-wrapperID').style.display = 'none';
      document.querySelector('#lessons_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#composition_front_page2').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'none';
    };

    composition.onclick = function() {
      document.querySelector('#body-wrapperID').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'none';
    };
    menuComposition.onclick = function() {
      document.querySelector('#body-wrapperID').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';  
      document.querySelector('#calendar_front_page2').style.display = 'none';
    };

    calendar.onclick = function() {
      document.querySelector('#body-wrapperID').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'none';
    };
    menuCalendar.onclick = function() {
      document.querySelector('#body-wrapperID').style.display = 'none';
      document.querySelector('#calendar_front_page2').style.display = 'block';
      document.querySelector('#bottom_padding_container').style.display = 'block';
      document.querySelector('#lessons_front_page2').style.display = 'none';
      document.querySelector('#composition_front_page2').style.display = 'none';  
    };

}; //end of window.onload wrapper

    
