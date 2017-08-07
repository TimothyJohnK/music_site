/**
 * @file
 * Calendar building and functionality.
 */

window.addEventListener('load', function() {

    var lessons = document.getElementsByClassName('lessons_front_page')[0],
        listen = document.getElementsByClassName('listen_front_page')[0],
        calendar = document.getElementsByClassName('calendar_front_page')[0],
        showMenu = document.getElementsByClassName('my_header')[0],
        menu = document.getElementsByClassName('menu_button')[0],
        menuContents = document.getElementsByClassName('menu_contents')[0],
        spacing = document.getElementsByClassName('navbar')[0],
        menuLessons = document.getElementsByClassName('menu_Lessons')[0],
        menulisten = document.getElementsByClassName('menu_listen')[0],
        menuCalendar = document.getElementsByClassName('menu_Calendar')[0],
        copyright = document.getElementsByClassName('copyright')[0],
        cal_month = document.getElementsByClassName('cal_month')[0],
        cal_day = document.querySelector('calendar__day');

    function calendarBuilder() {
        var date = new Date(),
            leap_year = (date.getMonth() === 1 && date.getFullYear() % 4 === 0) ? 29 : 28,
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            daysInMonths = [31, leap_year, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            dayOfMonth = date.getDate(),
            dayOfWeek = date.getDay(),
            currentMonth = date.getMonth(),
            // The monthStartOffset calculation is weird. What it does:
            // - Add 7 to the current day of the month.
            //   This ensures the modulus result will be positive.
            // - dayOfMonth is a number from 1 to whatever (28, 29, 30, or 31).
            //   dayOfWeek is a number from 0 to 6, so add 1 to dayOfWeek.
            //   This makes our subtraction tell us the correct offset.
            //   E.g. if Sunday is the first:
            //   (First of the month (1)) - (Sunday (0 + 1)) = 0
            //   Which is to say, there's no offset for a month starting on Suday.
            // - The modulus returns number of days in the month in the first week
            //   of the calendar.
            // - Subtract 7 to get starting point of counter, i.e. days on the
            //   calendar grid that are not in the current month.
            j = monthStartOffset = (dayOfMonth + 7 - (dayOfWeek + 1)) % 7 - 6,
            weekArray,
            monthDiv = document.createElement('div');
        monthDiv.classList.add('calendar__month');

        while (j <= daysInMonths[currentMonth]) {
            weekArray = [];
            // Build 1 week at a time.
            for (var i = 0; i < 7; i++) {
                // Loop includes days before and/or after the month.  Don't print them.
                weekArray.push(buildDateSpan(j > 0 && j <= daysInMonths[currentMonth] ? j : ''));
                j++;
            }
            // Compile week (see buildWeek()) then add to month.
            monthDiv.appendChild(buildWeek(weekArray));
        }
        document.getElementsByClassName('calendar_body')[0].appendChild(monthDiv);

        function buildDateSpan(spanLabel) {
            var span = document.createElement('span');
            span.classList.add('calendar__day');
            span.appendChild(document.createTextNode(spanLabel));
            return span;
        }

        function buildWeek(weekArray) {
            var weekDiv = weekArray.reduce(function(weekDiv, daySpan) {
                weekDiv.appendChild(daySpan);
                return weekDiv;
            }, document.createElement('div'));
            weekDiv.classList.add('calendar__week');
            return weekDiv;
        }
    };

    menu.addEventListener('click', function() {
        if (getComputedStyle(menuContents).display === 'none') {
            menuContents.style.display = 'block';
            spacing.style.margin = '5.4em 1em 0 1em';
        } else {
            menuContents.style.display = 'none';
            spacing.style.margin = '0em 1em';
        };
    });

    calendarBuilder();
    bottomPadding();

    function mainPageHider() {
        document.getElementsByClassName('main_page')[0].style.display = 'none';
    };

    function bottomPadding() {
        document.getElementsByClassName('bottom_padding_container')[0].style.display = 'block';
    };

    function calendarHider() {
        document.getElementsByClassName('calendar_front_page2')[0].style.display = 'none';
    };

    function listenHider() {
        document.getElementsByClassName('listen_front_page2')[0].style.display = 'none';
    };

    function lessonsHider() {
        document.getElementsByClassName('lessons_front_page2')[0].style.display = 'none';
    };

    showMenu.addEventListener('click', function() {
        document.getElementsByClassName('main_page')[0].style.display = 'block';
        lessonsHider();
        listenHider();
        calendarHider();
    });

    lessons.addEventListener('click', function() {
        mainPageHider();
        document.getElementsByClassName('lessons_front_page2')[0].style.display = 'block';
        listenHider();
        calendarHider();
        bottomPadding();
    });
    menuLessons.addEventListener('click', function() {
        mainPageHider();
        document.getElementsByClassName('lessons_front_page2')[0].style.display = 'block';
        listenHider();
        calendarHider();
        bottomPadding();
    });

    listen.addEventListener('click', function() {
        mainPageHider();
        document.getElementsByClassName('listen_front_page2')[0].style.display = 'flex';
        song_volume = .5;
        lessonsHider();
        calendarHider();
        bottomPadding();
    });
    menulisten.addEventListener('click', function() {
        mainPageHider();
        document.getElementsByClassName('listen_front_page2')[0].style.display = 'block';
        lessonsHider();
        calendarHider();
        bottomPadding();
    });

    calendar.addEventListener('click', function calendarFunc() {
        mainPageHider();
        document.getElementsByClassName('calendar_front_page2')[0].style.display = 'block';
        lessonsHider();
        listenHider();
        bottomPadding();
    });

    menuCalendar.addEventListener('click', function() {
        mainPageHider();
        document.getElementsByClassName('calendar_front_page2')[0].style.display = 'block';
        lessonsHider();
        listenHider();
        bottomPadding();
    });





}); // End of window load listener.