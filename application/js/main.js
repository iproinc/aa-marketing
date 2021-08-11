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

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    if (scroll >= 900) {
        $(".sidebar").addClass("fixed top-10 right-0 lg:mr-[5%] xl:mr-[11%] 2xl:mr-[18%] 3xl:mr-[22%] 4xl:mr-[28%] w-[300px] hidden lg:block");
        $(".left").addClass("lg:w-2/3");
        $(".sidebar-title").removeClass("hidden");
        $(".sidebar-button").removeClass("hidden");
    } else {
        $(".sidebar").removeClass("fixed top-10 right-0 lg:mr-[5%] xl:mr-[11%] 2xl:mr-[18%] 3xl:mr-[22%] 4xl:mr-[28%] w-[300px] hidden lg:block");
        $(".left").removeClass("lg:w-2/3");
        $(".sidebar-title").addClass("hidden");
        $(".sidebar-button").addClass("hidden");
    }
});