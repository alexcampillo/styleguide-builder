// INCREASE / DECREASE FONT SIZE FUNCTIONS
var paragraph_font_size_counter, heading_font_size_counter, subheading_font_size_counter, paragraph_font_size_label, heading_font_size_label, subheading_font_size_label;

// GET INITIAL FONT SIZE

	function font_size_counter(x) {
		var fsc = $('.' + x + '-targeted').css('font-size').toString().slice(0, -2);
		var int_convert = parseInt(fsc, 10);

		return int_convert
	}

	paragraph_font_size_counter = font_size_counter('p');
	heading_font_size_counter = font_size_counter('h');
	subheading_font_size_counter = font_size_counter('sh');

	console.log(paragraph_font_size_counter);
	console.log(heading_font_size_counter);
	console.log(subheading_font_size_counter);

// ADD FONT SIZE TO LABEL IN UI

	// function font_size_label(x) {
	// 	var fs_label = $('.' + x + '-fs-label').text(font_size_counter(x) + "px");
	// 	console.log(fs_label)
	// 	return fs_label
	// }

	function font_size_label(x) {
		var fs_label = $('.' + x + '-fs-label');
		return fs_label;
	}

	paragraph_font_size_label = font_size_label('p');
	heading_font_size_label = font_size_label('h');
	subheading_font_size_label = font_size_label('sh');

	console.log (paragraph_font_size_label);
	console.log(heading_font_size_label);
	console.log(subheading_font_size_label);

// FONT SIZE TOGGLE FUNCTIONS

    function toggle_font_size(x) {

    	var fs_label = $('.' + x + '-fs-label')

    	var fsl = font_size_label(x);
    	var fs_counter = paragraph_font_size_counter

    	console.log("font size is " + fs_counter)
		increase_font_size = $('.' + x + '-font-size .btn-plus')
		decrease_font_size = $('.' + x + '-font-size .btn-minus')

		increase_font_size.click(function(e) {
		  e.preventDefault();
		  fs_counter += 2;
		  target.css('font-size', fs_counter + 'px');
		  $('.fs-label').text(fsl);
		});

		decrease_font_size.click(function(e) {
		  e.preventDefault();
		  fs_counter -= 2;
		  target.css('font-size', fs_counter + 'px');
		  $('.fs-label').text(fsl);
		});
	}

	function font_size(element) {
		element_target(element)
		toggle_font_size(element);
  	}


  	// PARAGRAPH FONT SIZE

  	function change_paragraph_font_size() {
  		font_size('p');
  	}

  	change_paragraph_font_size();








