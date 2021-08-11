function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    $("body").toggleClass("overflow-y-hidden");
}

var $autoplay = document.querySelector('#autoplay');
var autoPlay = new Vimeo.Player($autoplay);

function playVideo() {
  $('.play-overlay').removeClass("z-10");
  autoPlay.play();
}