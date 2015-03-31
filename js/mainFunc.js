var set_elements = function(e, x) {
	text_element(e);

	all_functions = [font_size, line_height, letter_spacing];

	for (var i = 0; i < all_functions.length; i++) {
		e + all_functions[i] = function(element, count) {
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
		}
	}
}