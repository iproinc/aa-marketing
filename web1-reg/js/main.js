jQuery(document).ready(function($) {
  var form = $('form[name="webinar"]'),
      radio = $('input[name="dates"]'),
      choice = '';

  radio.change(function(e) {
      choice = this.value;

      if (choice === '3pm') {
          form.attr('action', 'https://fredlam.sendlane.com/form/26410');
      } else {
          form.attr('action', 'https://fredlam.sendlane.com/form/26411');
      }
  });
});
