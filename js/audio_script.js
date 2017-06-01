$(document).ready(function(){
// html5media enables <video> and <audio> tags in all major browsers
// External File: https://api.html5media.info/1.1.8/html5media.min.js

// Add user agent as an attribute on the <html> tag...
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
jQuery(function ($) {
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://raw.githubusercontent.com/TimothyJohnK/music_site/master/songs/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": " Night Becomes the Sky - from the Album 'The Light'",
                "length": "7:13",
                "file": "sky_becomes_the_night"
            }, {
                "track": 2,
                "name": "In a Tone So Mellow - from the motion picture 'Little Pink House'",
                "length": "1:43",
                "file": "in_a_tone_so_mellow"
            }, {
                "track": 3,
                "name": "Upon the Foundation - from the motion picture 'Little Pink House'",
                "length": "1:43",
                "file": "upon_the_foundation"
            }, {
                "track": 4,
                "name": "Watchman - from the Album 'Northern Melody'",
                "length": "2:35",
                "file": "watchman"
            }, {
                "track": 5,
                "name": "SFX/sound design - Spaceship Computer noise background",
                "length": "0:54",
                "file": "sfx_tng_computer_noise"
            }, {
                "track": 6,
                "name": "Sound Design - tanpura influenced guitar ostinato",
                "length": "0:48",
                "file": "tanpura_guitar"
            }, {
                "track": 7,
                "name": "Under My Skin - soundtrack",
                "length": "1:33",
                "file": "under_my_skin"
            }, {
                "track": 8,
                "name": "Sound Design - guitar and drum driving background",
                "length": "1:49",
                "file": "driving_background_build"
            },{
                "track": 9,
                "name": "Talk - from the Album 'Northern Melody'",
                "length": "1:44",
                "file": "talk"
            }, {
                "track": 10,
                "name": "End of Days Jogger - from the Album 'The Dark'",
                "length": "6:56",
                "file": "end_of_days_jogger"
            }, {
                "track": 11,
                "name": "Let Us Have the Future - Churchill remix",
                "length": "3:23",
                "file": "let_us_have_the_future"
            }],

        
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Playing');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
    });
});