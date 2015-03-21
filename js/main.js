// Add your js here
$(document).ready(function() {

  // font_size('p', 16);
  // line_height('p', 24);
  // letter_spacing('p', 0);
  // color('p');

  $('a').click(function() {
    if ($(this).hasClass('paragraph')) {
      font_size('p');
      line_height('p');
      letter_spacing('p');
      color('p');
    } else if ($(this).hasClass('subheading')) {
      font_size('sh');
      line_height('sh');
      letter_spacing('sh');
      color('sh');
    } else if ($(this).hasClass('heading')) {
      font_size('h');
      line_height('h');
      letter_spacing('h');
      color('h');
    }
  });

  //Add Labels
  $('.fs-label').text(fs_counter + "px");
  $('.lh-label').text(lh_counter + 'px');
  $('.ls-label').text(ls_counter + 'px');
  $('.color-label').text(hex_color);

});