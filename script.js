
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
    document.getElementById("bubble").style.color="white";
    
  x.style.display="none";
  }
  else{
    document.getElementById("bubble").style.color="red";
    x.style.display="block";
  }
}


function openNav(){
  console.log("yes");
  document.getElementById("mySidepanel").style.width = "300px";
  document.getElementById("mySidepanel").style.height = "100%";
  
}

function closeNav(){
  document.getElementById("mySidepanel").style.width = "0";
}
