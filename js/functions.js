

	// 	VARIABLE DECLARATIONS
	var get_counter, fs_counter, lh_counter, ls_counter, hex_color, target, increase_font_size, decrease_font_size, increase_line_height, decrease_line_height, increase_letter_spacing, decrease_letter_spacing, random_color;

	//	TARGETING TEXT ELEMENTS
	function element_target(x) {
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


