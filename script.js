
function onclickhandle(){
   console.log("Click")
  var x= document.getElementById("droparray");
  if(x.style.display=="none"){
    x.style.display="block";
   
  }else{
    x.style.display="none";
  }
}
function onclickhandle1(){
  console.log("Click")
 var x= document.getElementById("drop1");
 if(x.style.display=="none"){
   x.style.display="block";
 }else{
   x.style.display="none";
 }
}
function openNav(){
  console.log("yes");
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav(){
  document.getElementById("mySidepanel").style.width = "0";
}
// function myFunction() {
//     document.getElementById("droparray").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('array')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

