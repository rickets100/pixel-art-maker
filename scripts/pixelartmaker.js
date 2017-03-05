


$(function(){
  var canvas = $(".canvas");

  for(var i=0;i<100;i++){
    canvas.append("<div></div>"); // appends to bottom of what is already there
  }
// $(this).toggleClass
  $('.canvas div').on('click', function(e) {
    var currentTarget = $(e.currentTarget);

    currentTarget.css('background-color', 'red'); //second param will set
    console.log(e.currentTarget);
  });

});

$(function() {
var colors = ['#9C4A40', '#E06B5C', '#E38278', '#D59F5B', '#EDB166', '#F2C78E', '#E5D866', '#FFF073', '#7EBE5D','#9EEE74', '#BAF2A7', '#3255A9', '#4879F3'];
var palette = $(".palette");

for (var i = 0; i < colors.length; i++) {
    palette.append("<div style='background-color:" + colors[i] + ";'></div>");

  }

  $('.palette div').on('click', function(e) {
    var currentTarget = $(e.currentTarget);
    var selectedColor = currentTarget.css('background-color'); //second param will set
    console.log('selectedColor', selectedColor);
    console.log('click', currentTarget);
  });

});


// myObject.css({
//   "background-color":"red",
//   "width":"20px",
//   "height":"10px"
// })
