// taken from w3schools

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("aDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropBttn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
// }

function myFunction() {
    var dropdown = document.getElementById("aDropdown");
    var container = document.querySelector(".container");
    
    // Toggle the display of the dropdown
    dropdown.classList.toggle("show");
    
    // If dropdown is shown, adjust the margin of the container
    if (dropdown.classList.contains("show")) {
        container.style.marginTop = "125px";  // Adjust this value based on the dropdown height
    } else {
        container.style.marginTop = "0";  // Reset the margin when dropdown is hidden
    }
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropBttn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        // Reset the margin when clicking outside
        document.querySelector(".container").style.marginTop = "0";
    }
}