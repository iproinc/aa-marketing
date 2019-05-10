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