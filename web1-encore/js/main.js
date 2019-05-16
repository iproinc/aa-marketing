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

function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

var affId = getQueryVariable('hop')
var newLink = `http://${affId}.adtrics.hop.clickbank.net/?pid=8`;
$('#affTrack').attr('src', newLink);