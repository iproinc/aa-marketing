$(document).ready(function() {
  // Back To Top Button
  $('.container').on('click', '.back-to-top', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800);
  });

  $('.hello').on('click', (e) => {
    e.preventDefault()
    $('h3, p').toggle('slow')
  })
})

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