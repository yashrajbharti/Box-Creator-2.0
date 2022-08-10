var output4 = document.getElementById("demo4");
var output5 = document.getElementById("demo5");
$('.box').resizable({
    handles: 'n,w,s,e',minWidth: 10,
    maxWidth: 4000,
    resize: function(event,ui) {
      output5.innerHTML = $(this).outerHeight();
      output4.innerHTML = $(this).outerWidth();   
  }
});

$('.box').draggable({
   
});

function colorSelected (element) {
    document.getElementById('wrapper').style.background = element.value;
var c = element.value.substring(1);      // strip #
var rgb = parseInt(c, 16);   // convert rrggbb to decimal
var r = (rgb >> 16) & 0xff;  // extract red
var g = (rgb >>  8) & 0xff;  // extract green
var b = (rgb >>  0) & 0xff;  // extract blue

var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 40) {
      // pick a different colour
    document.body.style.backgroundColor = "#355439";
   }
   else{
    document.body.style.backgroundColor = "#000000";
   }
}

var slider = document.getElementById("myRange");
var border = document.getElementById("border");
var transparent = document.getElementById("transparent");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  document.getElementById("wrapper").style.borderRadius = this.value+"px";
}
border.oninput = function() {
  output2.innerHTML = this.value;
  document.getElementById("wrapper").style.borderWidth = this.value+"px";
}
transparent.oninput = function() {
  output3.innerHTML = this.value;
  document.getElementById("wrapper").style.opacity = (100 - this.value)+"%";
}
