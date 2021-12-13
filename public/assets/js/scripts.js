$('.bg-preview-btn').click( function() {
  $('.bg-preview').toggleClass('bg-active');
});

$(document).ready(function () {

  var profileItems = function () {

    if ($(window).width() < 640) {
      $('.profile-item.active').addClass('closed');
      $('.profile-item.active').nextAll().addClass('hide');

      $('.profile-item.active').click( function() {
        $(this).toggleClass('closed');
        $(this).nextAll().toggleClass('hide');
      })
    } else {
      $('.profile-item.active').removeClass('closed');
      $('.profile-item.active').nextAll().removeClass('hide');
    }
  };

  $(window).resize(function() {
    profileItems();    
  });

  profileItems();
});
