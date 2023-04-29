
function opendis(){
  var x=document.getElementById("discriptionblock");

  if(x.style.display=="block"){
    document.getElementById("bubble").style.color="black";
    
  x.style.display="none";
  }
  else{
    document.getElementById("bubble").style.color="red";
    x.style.display="block";
  }
}


function openNav(){
 
  document.getElementById("mySidepanel").style.width = "60%";

  document.getElementById("mySidepanel").style.height = "100%";
  
}

function closeNav(){
  document.getElementById("mySidepanel").style.width = "0";
}




function changemode1(){
  var bk=document.body
  var hbcolor=document.getElementById("header");
  var y=document.getElementsByClassName("textmode");
  var ftclr=document.getElementById("footer");
  var sidepan=document.getElementsByClassName("sidepanel");
  var serial_color=document.getElementsByClassName("serial");
  console.log(serial_color);
  
  if(localStorage.getItem("mode") == 'black'){
    hbcolor.style.backgroundColor="black";
    ftclr.style.backgroundColor="black"
    for(var i=0;i<serial_color.length;i++){
      serial_color[i].style.color="white";
     }
    // bk.style.backgroundImage="url(\"images/bbg2.png\")";
    bk.style.backgroundColor="black";
    bk.style.color="white";
    for(var i=0;i<y.length;i++){
      y[i].style.color="white";
  }
  for(var i=0;i<sidepan.length;i++){
    sidepan[i].style.backgroundColor="black";
  }

  // localStorage.setItem('mode','white');
}

else{
  hbcolor.style.backgroundColor="white";
  ftclr.style.backgroundColor="white";
  for(var i=0;i<serial_color.length;i++){
    serial_color[i].style.color="black";
   }
  // bk.style.backgroundImage="url(\"images/bbg1.png\")";
  bk.style.backgroundColor="white";
  bk.style.color="black";
  for(var i=0;i<y.length;i++){
      y[i].style.color="black";
  }
  for(var i=0;i<sidepan.length;i++){
    sidepan[i].style.backgroundColor="white";
  }
 
}
document.getElementById("loading").style.display = "none";
}

function changemod(){
  
  var bk=document.body;
  var hbcolor=document.getElementById("header");
  var y=document.getElementsByClassName("textmode");
  var ftclr=document.getElementById("footer");
  var sidepan=document.getElementsByClassName("sidepanel");
  var serial_color=document.getElementsByClassName("serial");
  console.log(serial_color);

 const val =  localStorage.getItem('mode');
 if(val) {
  // console.log("mode is " , localStorage.getItem("mode"));
  
    if(localStorage.getItem("mode") == 'black'){
      hbcolor.style.backgroundColor="white";
      ftclr.style.backgroundColor="white";
      // bk.style.backgroundImage="url(\"images/bbg1.png\")";
      bk.style.backgroundColor="white";
      bk.style.color="black";
      for(var i=0;i<serial_color.length;i++){
       serial_color[i].style.color="black";
      }
      for(var i=0;i<y.length;i++){
          y[i].style.color="black";
      }
      for(var i=0;i<sidepan.length;i++){
        sidepan[i].style.backgroundColor="white";
      }
       localStorage.setItem('mode','white');
    }
  
  else{
    hbcolor.style.backgroundColor="black";
    ftclr.style.backgroundColor="black"
    for(var i=0;i<serial_color.length;i++){
      serial_color[i].style.color="white";
     }
    // bk.style.backgroundImage="url(\"images/bbg2.png\")";
    bk.style.backgroundColor="black";
    bk.style.color="white";
    for(var i=0;i<y.length;i++){
      y[i].style.color="white";
  }
  for(var i=0;i<sidepan.length;i++){
    sidepan[i].style.backgroundColor="black";
  }
      localStorage.setItem('mode','black');
  }
  // localStorage.setItem("mode", localStorage.getItem("mode") === "white" ? "black" : "white");
  const currentMode = localStorage.getItem("mode");
  console.log({currentMode});
  
 }else {
  localStorage.setItem("mode","white");
  hbcolor.style.backgroundColor="black";
  ftclr.style.backgroundColor="black"
  bk.style.backgroundImage="url(\"images/bbg2.png\")";
  bk.style.color="white";
  for(var i=0;i<y.length;i++){
    y[i].style.color="white";
  }
  for(var i=0;i<sidepan.length;i++){
    sidepan[i].style.backgroundColor="black";
  }
  for(var i=0;i<serial_color.length;i++){
    serial_color[i].color="white";
   }
   localStorage.setItem('mode','black');
 }



}
console.log(localStorage.getItem("mode"));

// Typewriter js
//made by akash dave
// var TxtType = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//   this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//   this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   var that = this;
//   var delta = 200 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//   delta = this.period;
//   this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//   this.isDeleting = false;
//   this.loopNum++;
//   delta = 500;
//   }

//   setTimeout(function() {
//   that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName('typewrite');
//   for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-type');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtType(elements[i], JSON.parse(toRotate), period);
//       }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//   document.body.appendChild(css);
// };