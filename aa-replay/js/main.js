$(document).ready(() => {
  $('.web-select').on('click', (e) => {
    id = e.target.id
    switch(id) {
      case "web-select-1":
        toggleOutVimeo("#video2", "#webinar2");
        toggleOutVimeo("#videoHangout", "#hangout");
        toggleInVimeo("#video1", "#webinar1");
        break;
      case "web-select-hangout":
        toggleOutVimeo("#video1", "#webinar1");
        toggleOutVimeo("#video2", "#webinar2");
        toggleInVimeo("#videoHangout", "#hangout");
        break
      case "web-select-2":
        toggleOutVimeo("#video1", "#webinar1");
        toggleOutVimeo("#videoHangout", "#hangout");
        toggleInVimeo("#video2", "#webinar2");
        break
    }
  })
})

const toggleOutVimeo = (videoID, webinarID) => {
  var iframe = $(videoID);
  var player = new Vimeo.Player(iframe);
  player.pause();
  $(webinarID).fadeOut(200);
}

const toggleInVimeo = (id, webinarID) => {
  var iframe = $(id);
  var player = new Vimeo.Player(iframe);
  $(webinarID).fadeIn(200);
  player.play();
}

function handleTickInit(tick) {

  // uncomment to set labels to different language
  /*
  var locale = {
      YEAR_PLURAL: 'Jaren',
      YEAR_SINGULAR: 'Jaar',
      MONTH_PLURAL: 'Maanden',
      MONTH_SINGULAR: 'Maand',
      WEEK_PLURAL: 'Weken',
      WEEK_SINGULAR: 'Week',
      DAY_PLURAL: 'Dagen',
      DAY_SINGULAR: 'Dag',
      HOUR_PLURAL: 'Uren',
      HOUR_SINGULAR: 'Uur',
      MINUTE_PLURAL: 'Minuten',
      MINUTE_SINGULAR: 'Minuut',
      SECOND_PLURAL: 'Seconden',
      SECOND_SINGULAR: 'Seconde',
      MILLISECOND_PLURAL: 'Milliseconden',
      MILLISECOND_SINGULAR: 'Milliseconde'
  };

  for (var key in locale) {
      if (!locale.hasOwnProperty(key)) { continue; }
      tick.setConstant(key, locale[key]);
  }
  */

  // format of due date is ISO8601
  // https://en.wikipedia.org/wiki/ISO_8601

  // '2018-01-31T12:00:00'        to count down to the 31st of January 2018 at 12 o'clock
  // '2019'                       to count down to 2019
  // '2018-01-15T10:00:00+01:00'  to count down to the 15th of January 2018 at 10 o'clock in timezone GMT+1

  // create the countdown counter
  var counter = Tick.count.down('2019-06-01T00:00:00-04:00');

  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    // redirect, uncomment the next line
    // window.location = 'my-location.html'

    // hide counter, uncomment the next line
    // tick.root.style.display = 'none';

    // show message, uncomment the next line
    // document.querySelector('.tick-onended-message').style.display = '';
  };
}