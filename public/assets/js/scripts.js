$('.bg-preview-btn').click( function() {
  $('.bg-preview').toggleClass('bg-active');
});

$(document).ready(function () {

  var $activeProfile = $('.profile-item.active')

  var profileItems = function () {

    if ($(window).width() < 640) {
      $activeProfile.addClass('closed');
      $activeProfile.nextAll().addClass('hide');

      $activeProfile.click( function() {
        $(this).toggleClass('closed');
        $(this).nextAll().toggleClass('hide');
      })
    } else {
      $activeProfile.removeClass('closed');
      $activeProfile.nextAll().removeClass('hide');
    }
  };

  profileItems();

  $(window).resize(function() {
    profileItems();    
  });
});
