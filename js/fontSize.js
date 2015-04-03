// INCREASE / DECREASE FONT SIZE FUNCTIONS
var p_font_size_counter, h_font_size_counter, sh_font_size_counter, p_font_size_label, h_font_size_label, sh_font_size_label;

// GET INITIAL FONT SIZE

	function font_size_counter(x) {
		var fsc = $('.' + x + '-targeted').css('font-size').toString().slice(0, -2);
		var int_convert = parseInt(fsc, 10);

		return int_convert
	}

	p_font_size_counter = font_size_counter('p');
	h_font_size_counter = font_size_counter('h');
	sh_font_size_counter = font_size_counter('sh');

	console.log(p_font_size_counter);
	console.log(h_font_size_counter);
	console.log(sh_font_size_counter);

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

	p_font_size_label = font_size_label('p');
	h_font_size_label = font_size_label('h');
	sh_font_size_label = font_size_label('sh');

	console.log (p_font_size_label);
	console.log(h_font_size_label);
	console.log(sh_font_size_label);

// FONT SIZE TOGGLE FUNCTIONS

    function toggle_font_size(x) {

    	var fs_label = $('.' + x + '-fs-label')

    	var fsl = font_size_label(x);
    	var fs_counter;

    	if(x == 'p') {
    		fs_counter = p_font_size_counter
    	} else if(x == 'h') {
    		fs_counter = h_font_size_counter
    	} else if(x == 'sh'){
    		fs_counter = sh_font_size_counter
    	}

    	console.log(x + " font size is " + fs_counter)
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


  	// CHANGE FONT SIZE

  	function change_paragraph_font_size() {
  		font_size('p');
  	}

  	function change_heading_font_size() {
  		font_size('h');
  	}

  	function change_subheading_font_size() {
  		font_size('sh');
  	}

$('.paragraph').click(function(){
	change_paragraph_font_size();
});

$('.heading').click(function(){
	change_heading_font_size();
});

$('.subheading').click(function(){
	change_subheading_font_size();
});








