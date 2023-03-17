






var xx=true;
let x= document.getElementById('array');
x.addEventListener('click',handlearrayclick);
function handlearrayclick(e){
  console.log("hh");
    e.preventDefault()
    if(xx==true){
    document.getElementById('droparray').style.display="block";
    xx=false;
    }
    else{
        xx=true;
        document.getElementById('droparray').style.display="none";
   
    }
    return false;
   
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

