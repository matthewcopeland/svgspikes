// thanks ben
// http://benknowscode.wordpress.com/2012/09/26/using-svg-elements-with-jquery/



function SVG(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}



function circle_me() {
  var $svg = $('.appendee');
  $(SVG('circle'))
    .attr('cx', 60)
    .attr('cy', 60)
    .attr('r', 10)
    .attr('fill', 'none')
    .attr('stroke', 'red')
    .attr('stroke-width', 3)
    .appendTo($svg);
}



$(document).ready(function(){
  $('.appender').click(circle_me);
});