// List of Topics
function onclickhandle(){
  var x= document.getElementById("droparray");
  if(x.style.display=="block"){
    x.style.display="none";
   
  }else{
    x.style.display="block";
  }
}


function onclickhandle1(){
  var x= document.getElementById("sorting");
  var dis=x.style.display;
  if(dis=='block'){
   x.style.display="none";
  }
  else {
   x.style.display="block"; 
 }
}

function onclickhandle2(){
  var x=document.getElementById("Searching");
  
  if(x.style.display=="block"){
    x.style.display="none";
  }
  else{
    x.style.display="block";
  }
}

function onclickhandle3(){
  var x=document.getElementById("Recursion");
  if(x.style.display=="block"){
    x.style.display="none";
  }
  else{
    x.style.display="block";
  }
}
// End of List
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
 
  document.getElementById("mySidepanel").style.width = "50%";

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

  if(localStorage.getItem("mode") == 'white'){
    hbcolor.style.backgroundColor="white";
    ftclr.style.backgroundColor="white";
    bk.style.backgroundImage="url(\"images/bbg1.png\")";
    bk.style.color="black";
    for(var i=0;i<y.length;i++){
        y[i].style.color="black";
    }
    for(var i=0;i<sidepan.length;i++){
      sidepan[i].style.backgroundColor="white";
    }
    // localStorage.setItem('mode','white');
  }

else{
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
      bk.style.backgroundImage="url(\"images/bbg1.png\")";
      bk.style.color="black";
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
    bk.style.backgroundImage="url(\"images/bbg2.png\")";
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
   localStorage.setItem('mode','black');
 }



    
    

// for(var i=0;i<y.length;i++){
//   if(y[i].style.color=="white"){
//     y[i].style.color="black";
//   }
//   else{
//     y[i].style.color="white";
//   }
// }


}
console.log(localStorage.getItem("mode"));