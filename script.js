
function onclickhandle(){
  //  console.log("Click")
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
  // console.log("click");
  if(dis=='block'){
    // console.log("Click2")
   x.style.display="none";
  }
  else {
  // console.log("Click1")
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

function opendis(){
  var x=document.getElementById("discriptionblock");
  console.log("kk");
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
function changemod(){
  var bk=document.body;
var hbcolor=document.getElementById("header");
var y=document.getElementsByClassName("textmode");
var ftclr=document.getElementById("footer");
var sidepan=document.getElementsByClassName("sidepanel");
if(hbcolor.style.backgroundColor=="black"){
  hbcolor.style.backgroundColor="white";
  ftclr.style.backgroundColor="white";
  bk.style.backgroundImage="url(\"bbg1.png\")";
  bk.style.color="black";
  
}
else{
  hbcolor.style.backgroundColor="black";
  ftclr.style.backgroundColor="black"
  bk.style.backgroundImage="url(\"bbg2.png\")";
  bk.style.color="white";
}

for(var i=0;i<y.length;i++){
  if(y[i].style.color=="white"){
    y[i].style.color="black";
  }
  else{
    y[i].style.color="white";
  }
}
for(var i=0;i<sidepan.length;i++){
  console.log(sidepan[i].style.backgroundColor);
  if(sidepan[i].style.backgroundColor=="black")
  sidepan[i].style.backgroundColor="white";
  else
  sidepan[i].style.backgroundColor="black";
}

}
