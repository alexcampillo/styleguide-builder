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