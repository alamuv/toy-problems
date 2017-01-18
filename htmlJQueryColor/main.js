$(function () {
  $('p').each(function(index, element) {
    var $el = $(element);
    var words = $el.text().split(' ');
    $el.html('');

    for(var i = 0; i < words.length; i++) {
      var newSpan = $('<span>').text(words[i] + ' ');
      $el.append(newSpan);
    }
  });

  setInterval( function () {
    $('span').each(function() {
      var color1 = Math.floor(Math.random() * 256);
      var color2 = Math.floor(Math.random() * 256);
      var color3 = Math.floor(Math.random() * 256);
      $(this).css('color', 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')');
    })
  }, 1000);
});