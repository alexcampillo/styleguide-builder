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