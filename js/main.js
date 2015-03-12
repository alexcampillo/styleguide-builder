// Add your js here
$(document).ready(function() {
  
  var increase_font_size = $('.p-font-size .btn-plus')
  var decrease_font_size = $('.p-font-size .btn-minus')

  var increase_line_height = $('.p-line-height .btn-plus')
  var decrease_line_height = $('.p-line-height .btn-minus')

  var increase_letter_spacing = $('.p-letter-spacing .btn-plus')
  var decrease_letter_spacing = $('.p-letter-spacing .btn-minus')

  var random_color = $('.p-color .btn-random')

  var target = $(".targeted");


  // INCREASE / DECREASE FONT SIZE

  var fs_counter = 16;

  increase_font_size.click(function(e) {
    e.preventDefault();
    fs_counter += 2;
    target.css('font-size', fs_counter + 'px');
    $('.fs-label').text(fs_counter + "px");
  });

  decrease_font_size.click(function(e) {
    e.preventDefault();
    fs_counter -= 2;
    target.css('font-size', fs_counter + 'px');
    $('.fs-label').text(fs_counter + "px");
  });

  // INCREASE / DECREASE LINE HEIGHT

  var lh_counter = 24;

  increase_line_height.click(function(e) {
    e.preventDefault();
    lh_counter += 2;
    target.css('line-height', lh_counter + 'px');
    $('.lh-label').text(lh_counter + 'px');
  });

  decrease_line_height.click(function(e) {
    e.preventDefault();
    lh_counter -= 2;
    target.css('line-height', lh_counter + 'px');
    $('.lh-label').text(lh_counter + 'px');
  });

// INCREASE / DECREASE LETTER SPACING

  var ls_counter = 0;

  increase_letter_spacing.click(function(e) {
    e.preventDefault();
    ls_counter += 2;
    target.css('letter-spacing', ls_counter + 'px');
    $('.ls-label').text(ls_counter + 'px');
  });

  decrease_letter_spacing.click(function(e) {
    e.preventDefault();
    ls_counter -= 2;
    target.css('letter-spacing', ls_counter + 'px');
    $('.ls-label').text(ls_counter + 'px');
  });

  //Random Colors Function
  function hex() {
    random_number = Math.random() * 100
    if(random_number < 51) {
      return 
    }

    color_num = Math.round(Math.random() * 100)
    
    for(var i = 0; i < 7; i++) {

    }
  }

  // RANDOM HEX COLOR
  random_color.click(function(e) {
    e.preventDefault();

    color_1 = Math.round(Math.random() * 100)
    color_2 = Math.round(Math.random() * 100)
    color_3 = Math.round(Math.random() * 100)

    hex_color = '#' + color_1 + color_2 + color_3

    target.css('color', hex_color)

    $('.color-label').text(hex_color);
  });

  //Add Labels
  $('.fs-label').text(fs_counter + "px");
  $('.lh-label').text(lh_counter + 'px');
  $('.ls-label').text(ls_counter + 'px');
  $('.color-label').text(hex_color);

});