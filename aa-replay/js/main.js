$(document).ready(() => {
  $('.web-select').on('click', (e) => {
    id = e.target.id
    if(id === "web-select-1") {
      toggleOutVimeo("#video2", "#web2");
      toggleInVimeo("#video1", "#web1");
    } else {
      toggleOutVimeo("#video1", "#web1");
      toggleInVimeo("#video2", "#web2");
    }
  })
})

const toggleOutVimeo = (id, webinarID) => {
  var iframe = $(id);
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