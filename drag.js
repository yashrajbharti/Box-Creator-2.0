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

function colorSelected (element) {
    document.getElementById('wrapper').style.background = element.value
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