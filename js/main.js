// Add your js here
$(document).ready(function() {

  // font_size('p', 16);
  // line_height('p', 24);
  // letter_spacing('p', 0);
  // color('p');

  // $('a').click(function(e) {

  //   if ($('a').hasClass('paragraph')) {
  //     font_size('p', 16);
  //     line_height('p', 24);
  //     letter_spacing('p', 0);
  //     color('p');
  //   } else if ($('a').hasClass('subheading')) {
  //     font_size('sh', 30);
  //     line_height('sh', 24);
  //     letter_spacing('sh', 0);
  //     color('sh');
  //   } else if ($('a').hasClass('heading')) {
  //     font_size('h', 36);
  //     line_height('h', 24);
  //     letter_spacing('h', 0);
  //     color('h');
  //   }
  // });
var get_counter = function(x){
  $(x).css('font-size').toString().slice(0, -2);
}

$('a.paragraph').click(function(e){
    font_size('p', 16);
    line_height('p', 24);
    letter_spacing('p', 0);
    color('p');
});

$('a.subheading').click(function(e){
    font_size('sh', 30);
    line_height('sh', 24);
    letter_spacing('sh', 0);
    color('sh');
});

$('a.heading').click(function(e){
    font_size('h', 36);
    line_height('h', 24);
    letter_spacing('h', 0);
    color('h');
});





  //Add Labels
  $('.fs-label').text(fs_counter + "px");
  $('.lh-label').text(lh_counter + 'px');
  $('.ls-label').text(ls_counter + 'px');
  $('.color-label').text(hex_color);

});