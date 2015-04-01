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