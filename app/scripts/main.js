$('nav li').click(function(){
  $('nav li').removeClass('navActive');
  $('section').removeClass('sectionActive');
  $(this).addClass('navActive');
  var dataSection = $(this).attr('data-section');
  var section = $('section[data-section=' + dataSection + ']')
  $(section).addClass('sectionActive');
})
