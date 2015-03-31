

	// 	VARIABLE DECLARATIONS
	var fs_counter, lh_counter, ls_counter, hex_color, target, increase_font_size, decrease_font_size, increase_line_height, decrease_line_height, increase_letter_spacing, decrease_letter_spacing, random_color;

	//	TARGETING TEXT ELEMENTS
	var element_target = function(x) {
		target = $('.' + x + '-targeted')
	}

	// CREATING ELEMENT SELECTIONS
	var text_element = function(x) {

		increase_font_size = $('.' + x + '-font-size .btn-plus')
		decrease_font_size = $('.' + x + '-font-size .btn-minus')

		increase_line_height = $('.' + x + '-line-height .btn-plus')
		decrease_line_height = $('.' + x + '-line-height .btn-minus')

		increase_letter_spacing = $('.' + x + '-letter-spacing .btn-plus')
		decrease_letter_spacing = $('.' + x + '-letter-spacing .btn-minus')

		random_color = $('.' + x + '-color .btn-random')

		return increase_font_size, decrease_font_size, increase_line_height, decrease_line_height, increase_letter_spacing, decrease_letter_spacing, random_color;
	}

  // INCREASE / DECREASE FONT SIZE
  
  function font_size(element, counter) {
  text_element(element);
    
  fs_counter = counter;
  
  function increase_decrease_toggle() {

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
	  
	}
  }

  // INCREASE / DECREASE LINE HEIGHT

  function line_height(element, counter) {

  text_element(element);

  lh_counter = counter;

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

}

// INCREASE / DECREASE LETTER SPACING

function letter_spacing(element, counter) {

  text_element(element);

  ls_counter = 0;

  increase_letter_spacing.click(function(e) {
    e.preventDefault();
    ls_counter += 2;
    target.css('letter-spacing', ls_counter + 'px');

    return ls_counter
  });

  decrease_letter_spacing.click(function(e) {
    e.preventDefault();
    ls_counter -= 2;
    target.css('letter-spacing', ls_counter + 'px');

    return ls_counter
  });

  $('.ls-label').text(ls_counter + 'px');
  return ls_counter
}


// RANDOM HEX COLOR
function color(element) {
  random_color.click(function(e) {
    e.preventDefault();

    color_1 = Math.round(Math.random() * 100)
    color_2 = Math.round(Math.random() * 100)
    color_3 = Math.round(Math.random() * 100)

    hex_color = '#' + color_1 + color_2 + color_3

    target.css('color', hex_color)

    $('.color-label').text(hex_color);
  });
}


