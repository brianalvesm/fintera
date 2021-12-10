$('.bg-preview-btn').click( function() {
  $('.bg-preview').toggleClass('bg-active');
});


var profileItems = function () {

  if ($(window).width() < 640) {
    $('.profile-item.active').toggleClass('closed');
    $('.profile-item.active').nextAll().addClass('hide');

    $('.profile-item.active').click( function() {
      $(this).nextAll().toggleClass('hide');
      $(this).toggleClass('closed');
    })
  }
};

$(document).ready(function () {
  profileItems();

  $(window).resize(function() {
    profileItems();    
  });
});
